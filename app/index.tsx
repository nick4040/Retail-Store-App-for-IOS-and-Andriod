import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import { UserLogIn } from "./components/login";
import { config } from './constants/Keys';
import Parse from 'parse/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const logIn = () => {

    // Set AsyncStorage for Parse
    Parse.setAsyncStorage(AsyncStorage);

    // Initialize Parse
    Parse.initialize(config.applicationId, config.javascriptKey);
    Parse.serverURL = config.serverURL;

    //add a sign up button somewhere on here

  return (
      <SafeAreaView style={styles.container}>
        <>
          <Text style={styles.title}>React Native on Back4App</Text>
          <Text>User registration tutorial</Text>
          <UserLogIn />
          <Link href="signUp" style={styles.link}>Click here to sign up</Link>
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
    link: {
        color: '#00008B',
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 25,
        textDecorationLine: "underline",
    },
});
export default logIn;
