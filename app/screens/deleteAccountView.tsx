import { View, Text, StyleSheet } from 'react-native';
import Navbar from '../components/navbar';
import { DeleteAccount } from "../components/resetComponents/deleteAccount";

export default function deleteAccountView() {
  return (
    <View style={{ flex: 1 }}>
        <DeleteAccount/>
          <View style={styles.navContainer}>
                <Navbar/>
          </View>
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