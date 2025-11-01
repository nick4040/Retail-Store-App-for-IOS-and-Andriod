import React, { FC, ReactElement, useContext } from 'react';
import { Alert, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Parse from "./parseInit";
import { useRouter } from 'expo-router';
import { UserContext } from "./UserContext";
import { PartnerContext } from "./partnerComponents/PartnerContext";

export const UserLogOut: FC<{}> = (): ReactElement => {
  const router = useRouter();
  const { clearUser } = useContext(UserContext);
  const { clearPartners } = useContext(PartnerContext);

  const doUserLogOut = async function (): Promise<boolean> {
    return await Parse.User.logOut()
      .then(async () => {
        const currentUser: Parse.User = await Parse.User.currentAsync();
        if (currentUser === null) {
          Alert.alert('Success!', 'No user is logged in anymore!', console.log('User has logged out'),);
        }
        // Clear Catche on logout
        await clearUser();
        await clearPartners();

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
    backgroundColor: '#1f1f1f',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ff66a2',
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

export default UserLogOut;