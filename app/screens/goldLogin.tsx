import { View, Text, StyleSheet } from 'react-native';
import Navbar from '../components/navbar';
import { GoldCardLogin } from '../components/goldLoginComponent';


const dashboardFunction = () => {
  return (
    <View style={{ flex: 1 }}>
        <GoldCardLogin/>
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

export default dashboardFunction;