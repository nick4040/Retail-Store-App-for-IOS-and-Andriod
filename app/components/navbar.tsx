import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const Navbar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <View style={styles.navItem}>
          <Image source={require('@/assets/images/home_home_icon.png')} style={styles.icon} />
          <Link href="screens/Home" style={styles.link}>Home</Link>
        </View>
        <View style={styles.navItem}>
          <Image source={require('@/assets/images/home_vip.png')} style={styles.icon} />
          <Link href="screens/Vip" style={styles.link}>Vip</Link>
        </View>
        <View style={styles.navItem}>
          <Image source={require('@/assets/images/shop_nav.png')} style={styles.icon} />
          <Link href="screens/Store" style={styles.link}>Shop</Link>
        </View>
        <View style={styles.navItem}>
          <Image source={require('@/assets/images/profile_nav.png')} style={styles.icon} />
          <Link href="screens/Profile" style={styles.link}>Profile</Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  navContainer: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  navItem: {
    alignItems: 'center',
    marginHorizontal: 16,
  },
  icon: {
    width: 36, // Increased width
    height: 36, // Increased height
    marginBottom: 6,
  },
  link: {
    fontSize: 16, // Increased font size
    color: '#888888',
    textDecorationLine: 'none',
    fontWeight: '600',
  },
});

export default Navbar;
