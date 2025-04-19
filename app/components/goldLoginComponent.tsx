import React, { FC, ReactElement, useState } from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';
import Parse from 'parse/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const GoldCardLogin: FC = (): ReactElement => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const doUserLogIn = async (): Promise<boolean> => {
    console.log("Attempting login with:", username, password);

    try {
      // Check if GoldCardNumber exists
      const cardQuery = new Parse.Query("UserGoldCard");
      cardQuery.equalTo("UserNumber", username);
      const cardResults = await cardQuery.find();

      const isCardNumber = cardResults.length > 0;
      console.log("Card number exists:", isCardNumber);

      const passwordInt: number = parseInt(password, 10);

      // Check if UserPass matches
      const passQuery = new Parse.Query("UserGoldCard");
      passQuery.equalTo("UserPass", passwordInt);
      const passResults = await passQuery.find();

      const isPassCode = passResults.length > 0;
      console.log("Password matches:", isPassCode);

      if (isCardNumber && isPassCode) {
        Alert.alert("Success!", "You have successfully signed in!");
        console.log("Logged into GoldAccount");
        router.push("/screens/goldDashboard");
        return true;
      } else {
        Alert.alert("Failed!", "Invalid card number or password. Please try again.");
        console.log("Invalid login attempt");
        return false;
      }
    } catch (error) {
      console.error("There was an error confirming your account", error);
      Alert.alert("Error", "An error occurred. Please try again later.");
      return false;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gold Card Login</Text>
      <Link href="signUp" style={styles.signLink}>Please create a account here</Link>
      <View style={styles.form}>
        <Text style={styles.loginText}>Gold Card Number</Text>
        <TextInput
          style={styles.input}
          value={username}
          placeholder="GoldCard Number"
          onChangeText={(text) => setUsername(text)}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholderTextColor="#888"
        />
        <Text style={styles.loginText}>PassCode</Text>
        <TextInput
          style={styles.input}
          value={password}
          placeholder="PassCode"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          placeholderTextColor="#888"
        />
        <Link href="screens/resetProfile" style={styles.resetLink}>Reset Password</Link>
        <TouchableOpacity onPress={() => doUserLogIn()} style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    flex: 1,
    justifyContent: 'center',
  },
  form: {
    width: '100%',
  },
  input: {
    height: 50,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    flex: 1,
    justifyContent: 'left',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  signLink: {
    flex: 1,
    justifyContent: 'center',
    color: '#0055FF',
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
  },
  resetLink: {
      flex: 1,
      justifyContent: 'left',
      color: '#0055FF',
      fontSize: 16,
      fontWeight: "bold",
  },
  logo: {
      height: 150,
      width: 350,
      bottom: 0,
      left: 0,
      position: 'relative',
      resizeMode: 'contain',
      marginBottom: 20,
      marginTop: 20,
  },

});