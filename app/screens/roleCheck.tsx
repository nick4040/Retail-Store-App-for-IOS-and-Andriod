import { View, Text, StyleSheet } from 'react-native';
import CheckRole from '../components/roleComponents/checkRole';

export default function HomeFunction() {
  return (
    <View style={styles.container}>
    <CheckRole/>
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