import React, { FC, ReactElement, useState, useRef, useContext } from "react";
import {
  Alert,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Link, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Parse from "./parseInit";
import QRCode from "react-native-qrcode-svg";
import ViewShot from "react-native-view-shot";
import { LinearGradient } from "expo-linear-gradient";
import { UserContext } from "./UserContext";

    export const UserRegistration: FC<{}> = (): ReactElement => {
      const [username, setUsername] = useState("");
      const [fullName, setFullName] = useState("");
      const [phoneNumber, setPhone] = useState("");
      const [password, setPassword] = useState("");
      const [email, setEmail] = useState("");
      const [age, setAge] = useState("");
      const [isAgreed, setIsAgreed] = useState(false);
      const [qrPayload, setQrPayload] = useState<string | null>(null);
      const qrRef = useRef<ViewShot>(null);
      const [errorMessage, setErrorMessage] = useState<string | null>(null);
      const [loading, setLoading] = useState(false);
      const router = useRouter();

      // ✅ Pull setUser from UserContext
      const { setUser } = useContext(UserContext);

      const doUserRegistration = async () => {
        setLoading(true);
        setErrorMessage(null);

        try {
          // ✅ Validation
          if (!username.trim() || username.length <= 2)
            throw new Error("Username must be at least 3 characters.");
          if (password.length <= 5)
            throw new Error("Password must be at least 6 characters.");
          if (!email.includes("@"))
            throw new Error("Please enter a valid email.");
          if (Number(age) < 21)
            throw new Error("You must be 21 or older to make an account.");
          if (!isAgreed)
            throw new Error("You must agree to the Terms and Privacy Policy.");

          const nameSplit = fullName.trim().split(" ");
          if (nameSplit.length < 2)
            throw new Error("Enter full first and last name.");

          // ✅ Create User
          const user = new Parse.User();
          user.set("username", username);
          user.set("password", password);
          user.set("email", email);
          user.set("age", Number(age));
          user.set("fname", nameSplit[0]);
          user.set("lname", nameSplit.slice(1).join(" "));
          user.set("phoneNumber", phoneNumber);
          user.set("role", "vip");

          const createdUser = await user.signUp();

          // ✅ Setup ACL for privacy
          const acl = new Parse.ACL(createdUser);
          acl.setPublicReadAccess(false);
          acl.setPublicWriteAccess(false);
          createdUser.setACL(acl);
          await createdUser.save();

          // ✅ Generate and save QR
          const payload = `USER-${createdUser.id}-${Date.now()}`;
          setQrPayload(payload);

          setTimeout(async () => {
            try {
              const uri = await qrRef.current?.capture?.();
              if (!uri) throw new Error("Failed to capture QR code.");

              const response = await fetch(uri);
              const blob = await response.blob();
              const qrFile = new Parse.File(`qr_${createdUser.id}.png`, blob);
              await qrFile.save();

              createdUser.set("qrCode", qrFile);
              createdUser.set("qrPayload", payload);
              await createdUser.save();

              // ✅ Save to User Context Cache
              await setUser({
                id: createdUser.id,
                username: createdUser.get("username"),
                email: createdUser.get("email"),
                fname: createdUser.get("fname"),
                lname: createdUser.get("lname"),
                phoneNumber: createdUser.get("phoneNumber"),
                age: createdUser.get("age"),
                role: createdUser.get("role"),
                qrPayload: payload,
                qrCode: qrFile.url(), // ✅ Store as URL string
              });

              Alert.alert("✅ Success", "Account created successfully!");
              router.push("accountCreated");
            } catch (qrError) {
              console.error("QR error:", qrError);
              Alert.alert("QR Error", "User created but QR code failed to save.");
            } finally {
              setLoading(false);
            }
          }, 800);

        } catch (error: any) {
          setErrorMessage(error.message);
          setLoading(false);
        }
      };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Account</Text>
      <Link href="/" style={styles.secondTitle}>Already Registered? Log in here.</Link>

      {/* Form Fields */}
      {["Username", "Password", "Full Name", "Phone Number", "Email", "Current Age"].map((placeholder, index) => (
        <LinearGradient key={index} colors={["#ff66c4", "#ffde59"]} style={styles.inputGradient}>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={
              placeholder === "Username" ? username :
              placeholder === "Password" ? password :
              placeholder === "Full Name" ? fullName :
              placeholder === "Phone Number" ? phoneNumber :
              placeholder === "Email" ? email :
              age
            }
            onChangeText={
              placeholder === "Username" ? setUsername :
              placeholder === "Password" ? setPassword :
              placeholder === "Full Name" ? setFullName :
              placeholder === "Phone Number" ? setPhone :
              placeholder === "Email" ? setEmail :
              setAge
            }
            secureTextEntry={placeholder === "Password"}
            keyboardType={placeholder === "Current Age" ? "numeric" : "default"}
          />
        </LinearGradient>
      ))}

      {/* Checkbox */}
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          onPress={() => setIsAgreed(!isAgreed)}
          style={[styles.checkboxBase, isAgreed && styles.checkboxChecked]}
        >
          {isAgreed && <Text style={styles.checkmark}>✓</Text>}
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>
          I agree to the{" "}
          <Text style={styles.linkText}>Terms of Service</Text> and{" "}
          <Text style={styles.linkText}>Privacy Policy</Text>
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={doUserRegistration} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? "Creating..." : "Sign Up"}</Text>
      </TouchableOpacity>

      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}

      {/* Hidden QR Code */}
      {qrPayload && (
        <View style={{ position: "absolute", left: -9999 }}>
          <ViewShot ref={qrRef} options={{ format: "png", quality: 1 }}>
            <QRCode value={qrPayload} size={200} />
          </ViewShot>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#000000",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 2,
    textAlign: "center",
  },
  secondTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 2,
    marginBottom: 35,
    textAlign: "center",
  },
  /* Text box styling */
  button: {
    backgroundColor: "#ffe497",
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
  },
  /* privacy policy checkbox */
  checkboxBase: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  checkboxContainer: {
    marginBottom: 25,
    marginTop: 25,
  },
  checkboxChecked: {
    backgroundColor: "#ffffff",
  },
  checkmark: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  linkText: {
    color: "#ffffff",
    textDecorationLine: "underline",
  },
  checkboxLabel: {
    color: "#ffffff",
  },
  /* gradient styles */
    inputGradient: {
      borderRadius: 8,
      padding: 2,
      marginBottom: 15,
    },
    input: {
      borderRadius: 8,
      padding: 12,
      fontSize: 16,
      color: '#000',
    },
});

export default UserRegistration;
