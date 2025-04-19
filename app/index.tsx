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
      <View style={styles.defaultBackground}>
          <UserLogIn />
      </View>
  );
}
const styles = StyleSheet.create({
  defaultBackground: {
      backgroundColor: '#FFFFFF',
  },

});

export default logIn;
