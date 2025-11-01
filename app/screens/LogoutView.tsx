import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import { UserLogOut } from "../components/Logout";

const logoutView = () => {

  return (
      <SafeAreaView style={styles.container}>
        <>
          <UserLogOut />
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
export default logoutView;