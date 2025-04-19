import { View, Text, StyleSheet } from 'react-native';
import Navbar from '../components/navbar';
import { ProfilePage } from "../components/resetComponents/profileReset";

export default function resetProfile() {
  return (
    <View style={{ flex: 1 }}>
        <ProfilePage/>
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