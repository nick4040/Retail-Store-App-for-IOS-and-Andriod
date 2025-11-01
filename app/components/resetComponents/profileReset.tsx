import React, { FC, ReactElement, useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Parse from 'parse/react-native';

interface UserData {
  username: string;
  email: string;
  age: string;
  fname: string;
  lname: string;
  phoneNumber: string;
}

export const ProfilePage: FC = (): ReactElement => {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData>({
    username: '',
    email: '',
    age: '',
    fname: '',
    lname: '',
    phoneNumber: ''
  });

  useEffect(() => {
    async function getCurrentUser() {
      const currentUser = await Parse.User.currentAsync();
      if (currentUser) {
        setUserData({
          username: currentUser.getUsername(),
          email: currentUser.getEmail() || '',
          age: currentUser.get('age') || '',
          fname: currentUser.get('fname') || '',
          lname: currentUser.get('lname') || '',
          phoneNumber: currentUser.get('phoneNumber') || '',
        });
      }
    }
    getCurrentUser();
  }, []);

  const handleChange = (name: keyof UserData, value: string) => {
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const updateUserProfile = async () => {
    const currentUser = await Parse.User.currentAsync();
    if (currentUser) {
      currentUser.set('username', userData.username);
      currentUser.set('email', userData.email);
      currentUser.set('age', userData.age);
      currentUser.set('fname', userData.fname);
      currentUser.set('lname', userData.lname);
      currentUser.set('phoneNumber', userData.phoneNumber);

      try {
        await currentUser.save();
        Alert.alert('Success', 'Profile updated successfully');
        router.push("screens/Profile")
      } catch (error) {
        console.error('Error updating profile:', error);
        Alert.alert('Error', 'Failed to update profile');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Page</Text>
      <TextInput style={styles.input} placeholder="Username" value={userData.username} onChangeText={(text) => handleChange('username', text)} />
      <TextInput style={styles.input} placeholder="Email" value={userData.email} onChangeText={(text) => handleChange('email', text)} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Age" value={userData.age} onChangeText={(text) => handleChange('age', text)} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="First Name" value={userData.fname} onChangeText={(text) => handleChange('fname', text)} />
      <TextInput style={styles.input} placeholder="Last Name" value={userData.lname} onChangeText={(text) => handleChange('lname', text)} />
      <TextInput style={styles.input} placeholder="Phone Number" value={userData.phoneNumber} onChangeText={(text) => handleChange('phoneNumber', text)} keyboardType="phone-pad" />
      <Button title="Save Profile" onPress={updateUserProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});

export default ProfilePage;
