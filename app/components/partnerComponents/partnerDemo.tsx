// components/CheckDiscountForm.tsx
import React, { FC, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
  ScrollView,
} from "react-native";
import Parse from "parse/react-native";

type Discount = {
  id: string;
  title: string;
  description: string;
  products: string;
  qrPayload: string;
};

const CheckDiscountForm: FC = () => {
  const [qrPayloadInput, setQrPayloadInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [discount, setDiscount] = useState<Discount | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleCheckDiscount = async () => {
    setLoading(true);
    setDiscount(null);
    setMessage(null);

    try {
      const currentUser = await Parse.User.currentAsync();
      if (!currentUser) {
        Alert.alert("Error", "You must be logged in to check a discount.");
        setLoading(false);
        return;
      }

      const payload = qrPayloadInput.trim();
      if (!payload) {
        Alert.alert("Error", "Please enter a QR payload.");
        setLoading(false);
        return;
      }

      // 1️⃣ Check if discount exists
      const DiscountClass = Parse.Object.extend("Discounts");
      const query = new Parse.Query(DiscountClass);
      query.equalTo("qrPayload", payload);
      const discountResult = await query.first();

      if (!discountResult) {
        setMessage("❌ No matching QR code found.");
        setLoading(false);
        return;
      }

      const matchedDiscount: Discount = {
        id: discountResult.id,
        title: discountResult.get("title"),
        description: discountResult.get("Description"),
        products: discountResult.get("products"),
        qrPayload: discountResult.get("qrPayload"),
      };

      // 2️⃣ Check if QR already used in DiscountHistory
      const History = Parse.Object.extend("DiscountHistory");
      const historyQuery = new Parse.Query(History);
      historyQuery.equalTo("qrCode", payload);
      historyQuery.equalTo("discountUser", currentUser);
      const existing = await historyQuery.first();

      if (existing) {
        setMessage("⚠️ This QR code has already been used by you.");
        setLoading(false);
        return;
      }

      // 3️⃣ Save QR to DiscountHistory
      const newHistory = new History();
      newHistory.set("qrCode", payload);
      newHistory.relation("discountUser").add(currentUser);
      await newHistory.save();

      setDiscount(matchedDiscount);
      setMessage("✅ Discount applied successfully!");
    } catch (error) {
      console.error("Error checking discount:", error);
      Alert.alert("Error", "Failed to check discount.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Check a Discount QR Code</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter QR payload"
        value={qrPayloadInput}
        onChangeText={setQrPayloadInput}
      />

      <TouchableOpacity style={styles.button} onPress={handleCheckDiscount}>
        <Text style={styles.buttonText}>Check Discount</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="#007AFF" style={{ marginTop: 20 }} />}

      {message && <Text style={styles.message}>{message}</Text>}

      {discount && (
        <View style={styles.discountCard}>
          <Text style={styles.title}>{discount.title}</Text>
          <Text style={styles.description}>{discount.description}</Text>
          <Text style={styles.products}>{discount.products}</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default CheckDiscountForm;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    alignItems: "center",
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    width: "100%",
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    textAlign: "center",
  },
  discountCard: {
    marginTop: 20,
    padding: 20,
    borderRadius: 12,
    backgroundColor: "#f2f2f2",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
  products: {
    fontSize: 16,
    textAlign: "center",
  },
});
