import React, { FC, ReactElement, useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import { useRouter } from "expo-router";
import Parse from "parse/react-native";

export const UserRegistration: FC<{}> = (): ReactElement => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const router = useRouter();

  const doUserRegistration = async function (): Promise<boolean> {
    const usernameValue: string = username;
    const passwordValue: string = password;
    const emailValue: string = email;
    const ageValue: number = Number(age); // Ensure age is a number

    console.log("Age:", ageValue);

    // Check if the age is below 21 before proceeding with sign-up
    if (ageValue < 21) {
      Alert.alert("Error!", "Must be 21 or older to create an account.");
      console.log("User error: not the right age");
      return false;
    }

    try {
      const createdUser = await Parse.User.signUp(usernameValue, passwordValue, {
        email: emailValue,
        age: ageValue,
      });

      Alert.alert(
        "Success!",
        `User ${createdUser.get("username")} was successfully created!`
      );
      console.log("User has been created");

      router.push("accountCreated");
      return true;
    } catch (error: any) {
      Alert.alert("Error!", error.message);
      console.log("User error, please try again");
      return false;
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={username}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        value={email}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={age}
        placeholder="Current Age"
        keyboardType="numeric"
        onChangeText={(text) => setAge(text)}
      />
      <Button title="Sign Up" onPress={() => doUserRegistration()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default UserRegistration;
