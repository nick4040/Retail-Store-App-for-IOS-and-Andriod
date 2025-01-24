import { View, Text, StyleSheet } from 'react-native';
import Navbar from '../components/navbar';

export default function HomeFunction() {
  return (
    <View style={{ flex: 1 }}>
        <Text>Profile</Text>
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