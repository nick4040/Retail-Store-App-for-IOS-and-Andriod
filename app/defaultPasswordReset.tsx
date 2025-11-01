import { View, Text, StyleSheet } from 'react-native';
import { UserResetPassword } from "./components/resetComponents/defaultPasswordReset";
import Parse from 'parse/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const signUp = () => {
  return (
    <View style={{ flex: 1 }}>
        <UserResetPassword/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    navContainer: {
      marginTop: 10,
  },
});
export default signUp;