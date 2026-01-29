import { View, StyleSheet, Text } from "react-native";
import UserLogIn from "./components/UserLogIn";
import { LinearGradient } from "expo-linear-gradient";

const LogIn = () => {
  return (
    <LinearGradient
      colors={["#ff66c4", "#ffde59"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <UserLogIn />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    width: "100%",
  },
});

export default LogIn;
