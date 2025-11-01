import React, { FC, useState } from 'react';
import { View, Text, Button, Alert, ActivityIndicator, StyleSheet } from 'react-native';
import Parse from 'parse/react-native';
import { useRouter } from 'expo-router';

export const DeleteAccount: FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDeleteAccount = async () => {

     try {

       const currentUser = await Parse.User.currentAsync();

       try {
         // Invokes the "destroy" method to delete the user
         let response: any = await currentUser.destroy();
         console.log('Deleted user', response);
         router.push("/")
       } catch (error: any) {
         console.error('Error while deleting user', error);
       }
     } catch (error: any) {
       console.error('Error while retrieving user', error);
     }

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delete Account</Text>
      {loading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <Button title="Delete Account" color="red" onPress={handleDeleteAccount} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1f1f1f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "white",
  },
});

export default DeleteAccount;