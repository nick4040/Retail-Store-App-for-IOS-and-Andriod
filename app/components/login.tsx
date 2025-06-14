import React, { FC, ReactElement, useState } from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View, StyleSheet, ImageBackground } from 'react-native';

import { Link } from 'expo-router';
import { useRouter } from 'expo-router';
import Parse from 'parse/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserLogIn: FC<{}> = (): ReactElement => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const doUserLogIn = async function (): Promise<boolean> {
    const usernameValue: string = username;
    const passwordValue: string = password;
    return await Parse.User.logIn(usernameValue, passwordValue)
      .then(async (loggedInUser: Parse.User) => {
        Alert.alert(
          'Success!',
          `you have successfully signed in!`,
           console.log('User have logged in'),
        );
        const currentUser: Parse.User = await Parse.User.currentAsync();
        console.log(loggedInUser === currentUser);
        router.push('screens/Home');
        return true;
      })
      .catch((error: object) => {
        Alert.alert(
            'Error!',
            error.message,
            console.log('User error please try again'),
        );
        return false;
      });
  };

  return (

      <View style={styles.overlay}>
      <Image source={require('@/assets/images/vip_girl_white.png')} style={styles.logoGirl}/>
        <Text style={styles.title}>Welcome to</Text>
        <Image source={require('@/assets/images/kash_logo.png')}/>
        <Text style={styles.secondTitle}>The Most Innovative Cannabis App.</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={username}
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholderTextColor="#888"
          />

          <TextInput
            style={styles.input}
            value={password}
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor="#888"
          />

          <Link href="screens/passwordReset" style={styles.resetLink}>
            Reset Password
          </Link>

          <TouchableOpacity onPress={() => doUserLogIn()} style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
            <Link href="signUp" style={styles.signLink}>
              Don’t Have an Account? Sign Up Now
            </Link>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
    logoGirl: {
        textAlign: 'center',
     },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  secondTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  signLink: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 55,
    textAlign: 'center',
  },
  form: {
    width: '100%',
    maxWidth: 400,
    borderRadius: 10,
    padding: 20,
  },
  loginText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
      borderColor: '#000000',  // Corrected with #
    borderWidth: 1,          // Added for 2px border
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#faf6f3',
    color: '#000',
  },
  resetLink: {
    color: '#007BFF',
    textAlign: 'right',
    marginBottom: 20,
  },
    button: {
      backgroundColor: '#faf6f3',
      paddingVertical: 12,
      borderRadius: 5,
      borderColor: '#000000',  // Corrected with #
      borderWidth: 1,          // Added for 2px border
      alignItems: 'center',
    },
     buttonText: {
        color: '#ff66a2',
        fontSize: 16,
        fontWeight: 'bold',
      },
});

export default UserLogIn;


