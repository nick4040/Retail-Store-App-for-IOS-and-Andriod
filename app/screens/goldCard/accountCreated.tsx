import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import Parse from "parse/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext, UserProfile } from "../../components/UserContext";

export default function GoldAccountCreated() {
  const router = useRouter();
  const { setUser } = useContext(UserContext); // updates global user
  const [loading, setLoading] = useState(false);

  const handleGoHome = async () => {
    setLoading(true);
    try {
      const currentUser = Parse.User.current();
      if (!currentUser) {
        console.warn("No logged-in user found.");
        return;
      }

      // Fetch latest user data
      await currentUser.fetch();

      // Build user profile
      const userProfile: UserProfile = {
        id: currentUser.id,
        username: currentUser.get("username"),
        email: currentUser.get("email"),
        fname: currentUser.get("fname"),
        lname: currentUser.get("lname"),
        phoneNumber: currentUser.get("phoneNumber"),
        age: currentUser.get("age"),
        role: currentUser.get("role"),
      };

      // Update global state + AsyncStorage
      setUser(userProfile);
      await AsyncStorage.setItem("userProfile", JSON.stringify(userProfile));

      console.log("Global user cache updated:", userProfile);
    } catch (err) {
      console.error("Error updating global user cache:", err);
    } finally {
      setLoading(false);
      router.push("screens/Home");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>Your Gold account has been created.</Text>
      <TouchableOpacity style={styles.button} onPress={handleGoHome} disabled={loading}>
        {loading ? <ActivityIndicator color="#000" /> : <Text style={styles.buttonText}>Go to Home Page</Text>}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#1f1f1f",
  },
  message: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
    color: "white",
  },
  button: {
    backgroundColor: "#ff66a2", // gold color
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
