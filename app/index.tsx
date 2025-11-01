import { View, StyleSheet } from 'react-native';
import { UserLogIn } from "./components/login";
import { LinearGradient } from 'expo-linear-gradient';

const logIn = () => {
  return (
    <LinearGradient
      colors={['#ff66c4', '#ffde59']} // Pink to Yellow
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
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '100%',
  },
});

export default logIn;
