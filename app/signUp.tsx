import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import UserRegistration from "./components/UserRegistration";
import { config } from './constants/Keys';
import Parse from 'parse/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const signUp = () => {

  return (
      <SafeAreaView style={styles.container}>
        <>
          <UserRegistration />
        </>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000000",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
    },
});
export default signUp;