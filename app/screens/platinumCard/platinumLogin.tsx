import { View, Text, StyleSheet } from 'react-native';
import Navbar from '../../components/navbar';
import { PlatinumCardLogin } from '../../components/platinumLoginComponent';


const dashboardFunction = () => {
  return (
    <View style={{ flex: 1 }}>
        <PlatinumCardLogin/>
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