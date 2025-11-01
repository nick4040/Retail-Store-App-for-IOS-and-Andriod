import React, { FC, ReactElement, useRef, useState } from "react";
import {
  Alert,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";
import Parse from "../parseInit";
import QRCode from "react-native-qrcode-svg";
import ViewShot from "react-native-view-shot";
import { LinearGradient } from 'expo-linear-gradient';


export const PartnerDiscountUpdateForm: FC<{}> = (): ReactElement => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [products, setProducts] = useState("");
  const [expires, setExpires] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [qrPayload, setQrPayload] = useState<string | null>(null);

  const router = useRouter();
  const qrRef = useRef<ViewShot>(null);

  const createDiscount = async (): Promise<boolean> => {
    try {
      const currentUser = await Parse.User.currentAsync();
      if (!currentUser) {
        setErrorMessage("You must be logged in to create a discount.");
        return false;
      }

      if(!title){
        setErrorMessage("You must have a title for your discount.");
        return false;
      }

      // Get the current role of the user
      const fetchedRole = currentUser.get('role')

      // Create base discount object
      const Discounts = Parse.Object.extend("Discounts");
      const discountObj = new Discounts();

      discountObj.set("title", title.trim());
      discountObj.set("Description", description.trim());
      discountObj.set("products", products.trim());
      discountObj.set("companyId", fetchedRole);//change to find the role

      if (expires) {
        discountObj.set("expires", expires);
      }

      // Restrict ACL
      const acl = new Parse.ACL(currentUser);
      acl.setPublicReadAccess(true);
      acl.setPublicWriteAccess(false);
      discountObj.setACL(acl);

      // Save once to get objectId
      const savedDiscount = await discountObj.save();

      // Generate unique payload (e.g., use discount id)
      const payload = `discount-${savedDiscount.id}-${Date.now()}`;
      setQrPayload(payload);

      // Capture QR code image as PNG
      setTimeout(async () => {
        if (qrRef.current) {
          const uri = await qrRef.current.capture!();
          const response = await fetch(uri);
          const blob = await response.blob();

          const parseFile = new Parse.File(`qr_${savedDiscount.id}.png`, blob);
          await parseFile.save();

          savedDiscount.set("qrCode", parseFile);
          savedDiscount.set("qrPayload", payload);
          await savedDiscount.save();

          Alert.alert("✅ Success", "Your Discount with QR code was created!");
          router.push("screens/appPartners/renewPortal");
        }
      }, 500); // small delay to allow QR to render
    } catch (error: any) {
      console.error("Create error:", error);
      setErrorMessage(error.message || "Error creating Discount.");
      return false;
    }
    return true;
  };

  const onDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === "ios"); // keep open on iOS
    if (selectedDate) {
      setExpires(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a New Discount</Text>

    <LinearGradient colors={['#ff66c4', '#ffde59']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        value={title}
        placeholder="Give your discount a Title"
        placeholderTextColor="#fff"
        onChangeText={setTitle}
      />
    </LinearGradient>

    <LinearGradient colors={['#ff66c4', '#ffde59']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={[styles.inputWrapper, styles.multilineWrapper]}>
      <TextInput
        style={[styles.input, styles.multilineInput]}
        value={description}
        placeholder="Describe what the discount will be"
        placeholderTextColor="#fff"
        onChangeText={setDescription}
        multiline={true}
        textAlignVertical="top"
      />
    </LinearGradient>

    <LinearGradient colors={['#ff66c4', '#ffde59']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={[styles.inputWrapper, styles.multilineWrapper]}>
      <TextInput
        style={[styles.input, styles.multilineInput]}
        value={products}
        placeholder="List the products you want this discount to apply to"
        placeholderTextColor="#fff"
        onChangeText={setProducts}
        multiline={true}
        textAlignVertical="top"
      />
    </LinearGradient>


      <TouchableOpacity
        onPress={() => setShowDatePicker(true)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          {expires
            ? `Expires: ${expires.toDateString()}`
            : "Set Expiration Date"}
        </Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={expires || new Date()}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}

      <TouchableOpacity onPress={createDiscount} style={styles.button}>
        <Text style={styles.buttonText}>Create Your Discount</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/screens/appPartners/renewPortal")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Back to Portal</Text>
      </TouchableOpacity>

      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}

      {/* Hidden QR for capture */}
      {qrPayload && (
        <ViewShot ref={qrRef} options={{ format: "png", quality: 1 }}>
          <QRCode value={qrPayload} size={200} />
        </ViewShot>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#1f1f1f",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 25,
    textAlign: "center",
    fontFamily: "TT-Hoves-Regular",
  },
    inputWrapper: {
      width: '90%',
      borderRadius: 15,
      padding: 2,
      marginVertical: 10,
    },

    multilineWrapper: {
      minHeight: 120,
    },

    input: {
      color: '#000000',
      padding: 14,
      borderRadius: 13,
      fontSize: 16,
    },

    multilineInput: {
      height: '100%',
      textAlignVertical: 'top',
    },
   button: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "TT-Hoves-Regular",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
    fontFamily: "TT-Hoves-Regular",
  },
});

export default PartnerDiscountUpdateForm;
