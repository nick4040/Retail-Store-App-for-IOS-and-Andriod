import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NeedHelpScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Need Help</Text>
      <Text style={styles.subtitle}>
        please write a detailed description{'\n'}
        of what you need help with and we{'\n'}
        will be with you shortly.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Contact us</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NeedHelpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 20,
  },
  button: {
    width: 250,
    backgroundColor: '#ff66a2',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#ffffff',
  },
});
