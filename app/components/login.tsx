import React, { FC, ReactElement, useState, useContext } from "react";
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { Link, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "./UserContext";
import { PartnerContext } from "./partnerComponents/PartnerContext";
import Parse from "./parseInit";
import { LinearGradient } from 'expo-linear-gradient';

export const UserLogIn: FC<{}> = (): ReactElement => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const router = useRouter();
  const { setUser } = useContext(UserContext);
  const { refreshPartners } = useContext(PartnerContext); // ✅ get refreshPartners

  const doUserLogIn = async (): Promise<boolean> => {
    try {
      const loggedInUser: Parse.User = await Parse.User.logIn(username, password);
      Alert.alert("Success!", "You have successfully signed in!");

      // fetch latest profile
      await loggedInUser.fetch();

      // Build profile object for cache
      const userProfile = {
        id: loggedInUser.id,
        username: loggedInUser.get("username"),
        email: loggedInUser.get("email"),
        fname: loggedInUser.get("fname"),
        lname: loggedInUser.get("lname"),
        phoneNumber: loggedInUser.get("phoneNumber"),
        age: loggedInUser.get("age"),
        role: loggedInUser.get("role"),
      };

      // Save to AsyncStorage
      await AsyncStorage.setItem("userProfile", JSON.stringify(userProfile));

      // Update UserContext
      setUser(userProfile);

      // ✅ Refresh Partner cache immediately after login
      await refreshPartners();

      // Navigate to home
      router.push("screens/Home");
      return true;
    } catch (error: any) {
      Alert.alert("Error!", error.message || "Login failed");
      setErrorMessage("Try again, email or password is incorrect");
      return false;
    }
  };

  return (
    <LinearGradient
        colors={['#ff66c4', '#ffde59']} // Pink to yellow
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.overlay}
    >
      <Image
        source={require("@/assets/images/vip_girl_white.png")}
        style={styles.logoGirl}
      />
      <Text style={styles.title}>Welcome to</Text>
      <Image source={require("@/assets/images/kash_logo.png")} />
      <Text style={styles.secondTitle}>
        The Most Innovative Cannabis App.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={username}
          placeholder="Username"
          onChangeText={setUsername}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          value={password}
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
          placeholderTextColor="#888"
        />

        {errorMessage && (
          <Text style={styles.errorText}>{errorMessage}</Text>
        )}

        <Link href="defaultPasswordReset" style={styles.resetLink}>
          Forgot Password?
        </Link>

        <TouchableOpacity onPress={doUserLogIn} style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <Link href="signUp" style={styles.signLink}>
          Don’t Have an Account? Sign Up Now
        </Link>

        <View style={styles.policySection}>
          <Link href="termsOfService" style={styles.policyLink}>
            Terms Of Service
          </Link>
          <Text style={styles.separator}> | </Text>
          <Link href="privacyPolicy" style={styles.policyLink}>
            Privacy Policy
          </Link>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  logoGirl: {
    textAlign: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  secondTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  signLink: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 200,
    textAlign: "center",
  },
  policySection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    gap: 12,
  },
  policyLink: {
    fontSize: 14,
    color: "#000000",
    textDecorationLine: "underline",
    marginHorizontal: 8,
  },
  separator: {
    color: "#999",
    fontSize: 14,
    marginHorizontal: 4,
  },
  form: {
    width: "100%",
    maxWidth: 400,
    borderRadius: 10,
    padding: 20,
  },
  loginText: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  input: {
    borderColor: "#000000",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#faf6f3",
    color: "#000",
  },
  resetLink: {
    color: "#000000",
    textAlign: "right",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#faf6f3",
    paddingVertical: 12,
    borderRadius: 5,
    borderColor: "#000000",
    borderWidth: 1,
    alignItems: "center",
  },
  buttonText: {
    color: "#ff66a2",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default UserLogIn;
