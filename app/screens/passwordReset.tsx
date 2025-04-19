import { View, Text, StyleSheet } from 'react-native';
import { UserResetPassword } from "../components/resetComponents/passwordReset";

export default function resetProfile() {
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