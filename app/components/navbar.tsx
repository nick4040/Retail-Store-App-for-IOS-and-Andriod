import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';

const Navbar = () => {
  return (
    <View style={styles.container}>
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
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },

  navContainer: {
    backgroundColor: '#000000',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: '#D9B908',
    borderRadius: 15,
    borderWidth: 3,
    position: 'absolute',
    bottom: 0,

  },
  link: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textDecorationLine: 'underline',
    marginRight:20,
    marginLeft:20,
  },
});

export default Navbar;