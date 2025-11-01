import React, { FC, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  Image,
} from "react-native";
import Parse from "parse/react-native";
import { useRouter } from "expo-router";

type Discount = {
  id: string;
  title: string;
  description: string;
  products: string;
  expires: string; // YYYY-MM-DD format
  qrCodeUrl?: string; // URL of QR code image
  companyId: string;
};

const ManageDiscounts: FC = () => {
  const [discounts, setDiscounts] = useState<Discount[]>([]);
  const [editedDiscounts, setEditedDiscounts] = useState<Record<string, Discount>>({});
  const [hasChanges, setHasChanges] = useState<Record<string, boolean>>({});
  const router = useRouter();

  useEffect(() => {
    const fetchDiscounts = async () => {
      try {
        const Discount = Parse.Object.extend("Discounts");
        const query = new Parse.Query(Discount);
        const currentUser = await Parse.User.currentAsync();
        const fetchedRole = currentUser.get('role')
        query.equalTo("companyId", fetchedRole);
        query.equalTo("isActive", true)
        const results = await query.find();

        const parsed = results.map((item) => {
          const expires = item.get("expires");
          const qrFile = item.get("qrCode");
          return {
            id: item.id,
            title: item.get("title"),
            description: item.get("Description"),
            products: item.get("products"),
            expires: expires ? new Date(expires).toISOString().split("T")[0] : "",
            qrCodeUrl: qrFile ? qrFile.url() : undefined,
            companyId: item.get("companyId"),
          };
        });

        setDiscounts(parsed);
      } catch (error) {
        console.error("Error fetching discounts:", error);
        Alert.alert("Error", "Failed to load discounts.");
      }
    };

    fetchDiscounts();
  }, []);

  const handleChange = (id: string, field: keyof Discount, value: string) => {
    setEditedDiscounts((prev) => ({
      ...prev,
      [id]: { ...discounts.find((d) => d.id === id)!, ...prev[id], [field]: value },
    }));
    setHasChanges((prev) => ({ ...prev, [id]: true }));
  };

  const handleSave = async (id: string) => {
    try {
      const Discount = Parse.Object.extend("Discounts");
      const query = new Parse.Query(Discount);
      const obj = await query.get(id);

      const updated = editedDiscounts[id];
      if (updated) {
        obj.set("title", updated.title);
        obj.set("Description", updated.description);
        obj.set("products", updated.products);

        if (updated.expires) {
          const parsedDate = new Date(updated.expires);
          if (isNaN(parsedDate.getTime())) {
            Alert.alert("Invalid Date", "Please enter a valid date (YYYY-MM-DD).");
            return;
          }
          obj.set("expires", parsedDate);
        } else {
          obj.unset("expires");
        }

        await obj.save();
        Alert.alert("✅ Success", "Discount updated!");
        setHasChanges((prev) => ({ ...prev, [id]: false }));
      }
    } catch (error) {
      console.error("Error saving discount:", error);
      Alert.alert("Error", "Failed to save discount.");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const Discount = Parse.Object.extend("Discounts");
      const query = new Parse.Query(Discount);
      const obj = await query.get(id);
      await obj.destroy();

      setDiscounts((prev) => prev.filter((d) => d.id !== id));
      Alert.alert("🗑️ Deleted", "Discount deleted successfully.");
    } catch (error) {
      console.error("Error deleting discount:", error);
      Alert.alert("Error", "Failed to delete discount.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {discounts.length === 0 ? (
        <Text style={styles.noDiscounts}>No discounts available.</Text>
      ) : (
        discounts.map((discount) => {
          const edited = editedDiscounts[discount.id] || discount;
          return (
            <View key={discount.id} style={styles.card}>
              <TextInput
                style={styles.input}
                value={edited.title}
                onChangeText={(text) => handleChange(discount.id, "title", text)}
                placeholder="Title"
              />
              <TextInput
                style={[styles.input, styles.multiLine]}
                value={edited.description}
                onChangeText={(text) => handleChange(discount.id, "description", text)}
                placeholder="Description"
                multiline
              />
              <TextInput
                style={[styles.input, styles.multiLine]}
                value={edited.products}
                onChangeText={(text) => handleChange(discount.id, "products", text)}
                placeholder="Products"
                multiline
              />
              <TextInput
                style={styles.input}
                value={edited.expires}
                placeholder="YYYY-MM-DD"
                onChangeText={(text) => handleChange(discount.id, "expires", text)}
              />

              {discount.qrCodeUrl && (
                <Image source={{ uri: discount.qrCodeUrl }} style={styles.qrImage} />
              )}

              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={[
                    styles.button,
                    hasChanges[discount.id] ? styles.saveButton : styles.disabledButton,
                  ]}
                  onPress={() => handleSave(discount.id)}
                  disabled={!hasChanges[discount.id]}
                >
                  <Text style={styles.buttonText}>
                    {hasChanges[discount.id] ? "Save" : "Saved"}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.button, styles.deleteButton]}
                  onPress={() => handleDelete(discount.id)}
                >
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })
      )}

      {/* Blue Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.push("/screens/appPartners/renewPortal")}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ManageDiscounts;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#1f1f1f',
  },
  noDiscounts: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#555",
  },
  card: {
    backgroundColor: "#ff66a2",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    alignItems: "center",
  },
  input: {
      color: "white",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    paddingVertical: 8,
    marginBottom: 12,
    fontSize: 16,
    width: "100%",
  },
  multiLine: {
    minHeight: 60,
    textAlignVertical: "top",
  },
  qrImage: {
    width: 150,
    height: 150,
    marginVertical: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 5,
  },
  saveButton: {
    backgroundColor: "#4caf50",
  },
  deleteButton: {
    backgroundColor: "#f44336",
  },
  disabledButton: {
    backgroundColor: "#aaa",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  backButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  backButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
