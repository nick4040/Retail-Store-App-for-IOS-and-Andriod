import React, { FC, ReactElement, useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import Parse from 'parse/react-native';
import { useNavigation } from '@react-navigation/native';

export const UserResetPassword: FC<{}> = (): ReactElement => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const doUserPasswordReset = async (): Promise<boolean> => {
    const emailValue: string = email;
    return await Parse.User.requestPasswordReset(emailValue)
      .then(() => {
        Alert.alert('Success!', `Please check ${email} to proceed with password reset.`);
        navigation.navigate('Login');
        return true;
      })
      .catch((error: any) => {
        Alert.alert('Error!', error.message);
        return false;
      });
  };

  return (
    <View style={styles.loginWrapper}>
      <View style={styles.form}>
        <Text style={styles.text}>Please enter your account email to reset your password:</Text>
        <TextInput
          style={styles.input}
          value={email}
          placeholder={'Your account email'}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
        <TouchableOpacity onPress={doUserPasswordReset} style={styles.buttonContainer}>
          <View style={styles.button}>
            <Text style={styles.buttonLabel}>Request password reset</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  form: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});