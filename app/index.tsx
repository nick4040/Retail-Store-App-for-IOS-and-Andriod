import { View, Text, StyleSheet, Button, SafeAreaView, ImageBackground } from 'react-native';
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
    <ImageBackground
      source={require('@/assets/images/login_Background.jpg')} // Replace with your image path
      style={styles.container}
      resizeMode="cover"
    >
      <View>
          <UserLogIn />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  defaultBackground: {
      backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});

export default logIn;
