import { View, Text, StyleSheet, Button } from 'react-native';
import { Link } from 'expo-router';
import Navbar from '../components/navbar';

const HomeFunction = () => {

  return (
    <View style={{ flex: 1 }}>
        <Text>Home</Text>
        <Navbar/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomeFunction;