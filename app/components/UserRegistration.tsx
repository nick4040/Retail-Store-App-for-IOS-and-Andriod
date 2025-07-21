import React, { FC, ReactElement, useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View, Text, TouchableOpacity} from "react-native";
import { Link } from 'expo-router';
import { useRouter } from "expo-router";
import Parse from "parse/react-native";

export const UserRegistration: FC<{}> = (): ReactElement => {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const doUserRegistration = async (): Promise<boolean> => {
    const usernameValue = username.trim();
    const passwordValue = password;
    const emailValue = email.trim();
    const phoneValue = phoneNumber.trim();
    const ageValue = Number(age);
    const fullNameValue = fullName.trim();

    // Basic validation
    if (ageValue < 21) {
      setErrorMessage("You must be 21 or older to make an account.");
      return false;
    }
    if (usernameValue.length <= 2) {
      setErrorMessage("Your username is too short.");
      return false;
    }
    if (passwordValue.length <= 5) {
      setErrorMessage("Your password is too short; min length is 6 characters.");
      return false;
    }
    if (!emailValue.includes("@")) {
      setErrorMessage("Invalid email.");
      return false;
    }
    if (fullNameValue.split(/\s+/).length < 2) {
      setErrorMessage("Please enter both first and last name.");
      return false;
    }

    // Split full name into first and last names
    const nameParts = fullNameValue.split(/\s+/);
    const fnameValue = nameParts[0];
    const lnameValue = nameParts.slice(1).join(" ");

    try {
      const createdUser = await Parse.User.signUp(usernameValue, passwordValue, {
        email: emailValue,
        age: ageValue,
        fname: fnameValue,
        lname: lnameValue,
        phoneNumber: phoneValue,
      });

      Alert.alert("Success!", `User ${createdUser.get("username")} was successfully created!`);
      router.push("accountCreated");
      return true;
    } catch (error) {
      setErrorMessage("There was an error creating your account. Please try again.");
      return false;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Account</Text>
      <Link href="/" style={styles.secondTitle}>
        Already Registered? Log in here.
      </Link>
      <TextInput
        style={styles.input}
        value={username}
        placeholder="Username"
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        value={fullName}
        placeholder="Full Name"
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        value={phoneNumber}
        placeholder="Phone Number"
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        value={email}
        placeholder="Email"
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={age}
        placeholder="Current Age"
        keyboardType="numeric"
        onChangeText={setAge}
      />
      <TouchableOpacity onPress={doUserRegistration} style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ffffff",
  },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#000000',
      marginBottom: 2,
      textAlign: 'center',
    },
  secondTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00000',
    marginTop: 2,
    marginBottom: 35,
    textAlign: 'center',
  },
  input: {
    height: 60,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#ffe497",
    paddingHorizontal: 10,
    borderRadius: 20,
  },
    button: {
      backgroundColor: '#ffe497',
      paddingVertical: 12,
      borderRadius: 20,
      alignItems: 'center',
      marginTop: 10,
    },
     buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
      },
});

export default UserRegistration;
