import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';

const Navbar = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.mainContent}>
        <View style={styles.mainContainer}>
        </View>
      </ScrollView>
      <View style={styles.navContainer}>
        <Link href="screens/Home" style={styles.link}>Home</Link>
        <Link href="screens/GoldCard" style={styles.link}>Gold Card</Link>
        <Link href="screens/Vip" style={styles.link}>Vip</Link>
        <Link href="screens/Profile" style={styles.link}>Profile</Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainContent: {
    flexGrow: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navContainer: {
    backgroundColor: '#473F3F',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ADD8E6',
    textDecorationLine: 'underline',
    marginRight:20,
    marginLeft:20,
  },
});

export default Navbar;