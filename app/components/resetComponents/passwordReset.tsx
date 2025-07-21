import React, { FC, ReactElement } from 'react';
import { Alert, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Parse from 'parse/react-native';
import { useNavigation } from '@react-navigation/native';

export const UserResetPassword: FC<{}> = (): ReactElement => {
  const navigation = useNavigation();

  const doUserPasswordReset = async (): Promise<boolean> => {
    // Replace this with real email logic if needed
    const emailValue: string = 'your@email.com';
    return await Parse.User.requestPasswordReset(emailValue)
      .then(() => {
        Alert.alert('Success!', `Please check ${emailValue} to proceed with password reset.`);
        navigation.navigate('Login');
        return true;
      })
      .catch((error: any) => {
        Alert.alert('Error!', error.message);
        return false;
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change your{'\n'}password</Text>
      <Text style={styles.subtitle}>
        A email will be sent to you please{'\n'}go reset your password there and{'\n'}log back in
      </Text>

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
    marginBottom: 40,
    color: '#333',
  },
  button: {
    width: 250,
    backgroundColor: '#fde68a', // Soft yellow
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
});
