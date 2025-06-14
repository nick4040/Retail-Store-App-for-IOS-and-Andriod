import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import { UserRegistration } from "./components/UserRegistration";
import { config } from './constants/Keys';
import Parse from 'parse/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const signUp = () => {

    // Set AsyncStorage for Parse
    Parse.setAsyncStorage(AsyncStorage);

    // Initialize Parse
    Parse.initialize(config.applicationId, config.javascriptKey);
    Parse.serverURL = config.serverURL;

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
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
    },
});
export default signUp;