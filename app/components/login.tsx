import React, { FC, ReactElement, useState } from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import Parse from 'parse/react-native';
import { useRouter } from 'expo-router';

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
          `User ${loggedInUser.get('username')} has successfully signed in!`,
        );
        const currentUser: Parse.User = await Parse.User.currentAsync();
        console.log(loggedInUser === currentUser);
        router.push('screens/Home');
        return true;
      })
      .catch((error: object) => {
        Alert.alert('Error!', error.message);
        return false;
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
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
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
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
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

