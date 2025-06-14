import React, { FC, ReactElement, useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View, Text, TouchableOpacity} from "react-native";
import { Link } from 'expo-router';
import { useRouter } from "expo-router";
import Parse from "parse/react-native";

export const UserRegistration: FC<{}> = (): ReactElement => {
  const [username, setUsername] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const router = useRouter();

  const doUserRegistration = async function (): Promise<boolean> {
    const usernameValue: string = username;
    const fnameValue : string = fname;
    const lnameValue : string = lname;
    const phoneValue : string = phoneNumber;
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
        fname: fnameValue,
        lname: lnameValue,
        phoneNumber: phoneValue,
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
        <Text style={styles.title}>Create New Account</Text>
        <Link href="/" style={styles.secondTitle}>
            Already Registered? Log in here.
        </Link>
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
        value={fname}
        placeholder="First Name"
        onChangeText={(text) => setFname(text)}
      />
      <TextInput
        style={styles.input}
        value={lname}
        placeholder="Last Name"
        onChangeText={(text) => setLname(text)}
      />
      <TextInput
        style={styles.input}
        value={phoneNumber}
        placeholder="Phone Number"
        onChangeText={(text) => setPhone(text)}
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
      <TouchableOpacity onPress={() => doUserRegistration()} style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
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
      marginBottom: 25,
      textAlign: 'center',
    },
  secondTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00000',
    marginTop: 10,
    marginBottom: 10,
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
