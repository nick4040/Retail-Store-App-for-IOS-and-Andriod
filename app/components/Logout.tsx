import React, { FC, ReactElement } from 'react';
import { Alert, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Parse from 'parse/react-native';
import { useRouter } from 'expo-router';

export const UserLogOut: FC<{}> = (): ReactElement => {
  const router = useRouter();

  const doUserLogOut = async function (): Promise<boolean> {
    return await Parse.User.logOut()
      .then(async () => {
        const currentUser: Parse.User = await Parse.User.currentAsync();
        if (currentUser === null) {
          Alert.alert('Success!', 'No user is logged in anymore!', console.log('User has logged out'),);
        }
        // Navigate back to the login screen
        router.replace('/');
        return true;
      })
      .catch((error: object) => {
        Alert.alert('Error!', error.message, console.log('User error please try again'),);
        return false;
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Are you sure you want to logout?</Text>
      <TouchableOpacity onPress={() => doUserLogOut()} style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ff3b30',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    minWidth: 120,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});