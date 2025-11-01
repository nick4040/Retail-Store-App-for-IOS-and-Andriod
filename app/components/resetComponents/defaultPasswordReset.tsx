import React, { FC, ReactElement, useState } from 'react';
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import Parse from 'parse/react-native';
import { useNavigation } from '@react-navigation/native';

export const UserResetPassword: FC<{}> = (): ReactElement => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const doUserPasswordReset = async (): Promise<boolean> => {
    if (!email.trim()) {
      Alert.alert('Error!', 'Please enter your email address.');
      setErrorMessage("Please enter an email.");
      return false;
    }

    const emailValue: string = email;

    return await Parse.User.requestPasswordReset(emailValue)
      .then(() => {
        Alert.alert(
          'Success!',
          `Please check ${emailValue} to proceed with password reset.`,
        );
        setErrorMessage("Please check your email to proceed with password reset.");
        navigation.navigate('Login');
        return true;
      })
      .catch((error: any) => {
        Alert.alert('Error!', error.message);
        setErrorMessage("No account found with this email or try again later.");
        return false;
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change your{'\n'}password</Text>
      <Text style={styles.subtitle}>
        Enter your email below and we’ll send you instructions{'\n'}to reset your password.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setEmail}
        value={email}
      />

      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}

      <TouchableOpacity style={styles.button} onPress={doUserPasswordReset}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    width: 250,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
    color: '#000',
  },
  button: {
    width: 250,
    backgroundColor: '#fde68a',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
});

export default UserResetPassword;
