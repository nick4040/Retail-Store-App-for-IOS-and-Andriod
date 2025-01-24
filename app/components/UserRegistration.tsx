import React, { FC, ReactElement, useState } from "react";
import { Alert, Button, StyleSheet, TextInput } from "react-native";
import { useRouter } from 'expo-router';
import Parse from "parse/react-native";

export const UserRegistration: FC<{}> = ({}): ReactElement => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const router = useRouter();

  const doUserRegistration = async function (): Promise<boolean> {
    // Note that these values come from state variables that we've declared before
    const usernameValue: string = username;
    const passwordValue: string = password;
    const emailValue: string = email;
    const ageValue: number = age;

    console.log('Age:', ageValue);
    // Since the signUp method returns a Promise, we need to call it using await
    return await Parse.User.signUp(usernameValue, passwordValue, {
        email: emailValue,
        age: ageValue,
        })
      .then((createdUser: Parse.User) => {
          Parse.User.set
        // Parse.User.signUp returns the already created ParseUser object if successful
        Alert.alert(
          "Success!",
          `User ${createdUser.get("username")} was successfully created!`
        );
        router.push('accountCreated');
        return true;
      })
      .catch((error: any) => {
        // signUp can fail if any parameter is blank or failed an uniqueness check on the server
        Alert.alert("Error!", error.message);
        return false;
      });
  };

  return (
    <>
      <TextInput
        style={styles.input}
        value={username}
        placeholder={"Username"}
        onChangeText={(text) => setUsername(text)}
        autoCapitalize={"none"}
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder={"Password"}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        value={email}
        placeholder={"Email"}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize={"none"}
      />
        <TextInput
          style={styles.input}
          value={age}
          placeholder={"Current Age"}
          keyboardType="numeric"
          onChangeText={(text) => setAge(Number(text))}
        />
      <Button title={"Sign Up"} onPress={() => doUserRegistration()} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
});
