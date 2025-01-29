import React, { FC, ReactElement, useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Parse from 'parse/react-native';
import Navbar from "./navbar"

export const ProfilePage: FC<{}> = (): ReactElement => {
  const [userData, setUserData] = useState({
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
      if (currentUser !== null) {
        setUserData({
          username: currentUser.getUsername(),
          email: currentUser.getEmail() || 'No email provided',
          age: currentUser.get('age') || 'Age not available',
          fname: currentUser.get('fname') || 'First name not available',
          lname: currentUser.get('lname') || 'Last name not available',
          phoneNumber: currentUser.get('phoneNumber') || 'Phone number not available',
        });
      }
    }
    getCurrentUser();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <Text style={styles.username}>{userData.username}</Text>

        <View style={styles.infoRow}>
          <Text style={styles.label}>First Name:</Text>
          <Text style={styles.value}>{userData.fname}</Text>
          <TouchableOpacity style={styles.button} onPress={() => console.log('Edit First Name')}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Last Name:</Text>
          <Text style={styles.value}>{userData.lname}</Text>
          <TouchableOpacity style={styles.button} onPress={() => console.log('Edit Last Name')}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{userData.email}</Text>
          <TouchableOpacity style={styles.button} onPress={() => console.log('Edit Email')}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Age:</Text>
          <Text style={styles.value}>{userData.age}</Text>
          <TouchableOpacity style={styles.button} onPress={() => console.log('Edit Age')}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{userData.phoneNumber}</Text>
          <TouchableOpacity style={styles.button} onPress={() => console.log('Edit Phone Number')}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
        </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button2} onPress={() => router.push("screens/LogoutView")}>
              <Text style={styles.buttonText2}>Sign Out</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.removeButton} onPress={() => console.log('Remove Account')}>
              <Text style={styles.buttonText2}>Remove Account</Text>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },

   profileCard: {
    width: '85%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    color: '#555',
  },
  value: {
    fontSize: 18,
    color: '#333',
    flex: 1,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
    buttonContainer: {
      width: '100%',
      marginTop: 20,
      alignItems: 'center',
    },
    button2: {
      width: '80%',
      backgroundColor: '#007bff',
      paddingVertical: 12,
      borderRadius: 8,
      alignItems: 'center',
      marginBottom: 10,
    },
    removeButton: {
      width: '80%',
      backgroundColor: '#dc3545',
      paddingVertical: 12,
      borderRadius: 8,
      alignItems: 'center',
    },
    buttonText2: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
});



