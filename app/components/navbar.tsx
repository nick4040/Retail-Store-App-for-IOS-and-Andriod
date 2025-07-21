import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

/** Base height of the bar (icons + label area, before safe‑area) */
const TAB_BAR_HEIGHT = 64;

const Navbar: React.FC = () => {

   const [fontsLoaded] = useFonts({
       'Lobster-Regular': require('@/assets/fonts/Lobster-Regular.ttf'),
       'TT-Hoves-Regular': require('@/assets/fonts/TT-Hoves-Regular.ttf'),
     });

     if (!fontsLoaded) {
         <AppLoading />
       }

  const insets = useSafeAreaInsets();           // handles iPhone 15 “Dynamic Island”, etc.
  const bottomPad = insets.bottom;              // usually 0 on Android, >0 on iOS with notch

  return (
    <View style={[styles.navBar, { paddingBottom: bottomPad }]}>
      <NavItem icon={require('@/assets/images/home_home_icon.png')} href="screens/Home" label="Home" />
      <NavItem icon={require('@/assets/images/home_vip.png')}  href="screens/Vip"  label="Vip"  />
      <NavItem icon={require('@/assets/images/shop_nav.png')}  href="https://kashmakena.squarespace.com/merch" label="Shop" />
      <NavItem icon={require('@/assets/images/profile_nav.png')} href="screens/Profile" label="Profile" />
    </View>
  );
};

/* ------------------------------------------------------------------ *
 *  Reusable nav item
 * ------------------------------------------------------------------ */
interface NavItemProps {
  icon: any;          // local image require(...)
  href: string;
  label: string;
}
const NavItem: React.FC<NavItemProps> = ({ icon, href, label }) => (
  <View style={styles.navItem}>
    <Image source={icon} style={styles.icon} resizeMode="contain" />
    <Link href={href} style={styles.link}>
      {label}
    </Link>
  </View>
);

export default Navbar;

/* ------------------------------------------------------------------ *
 *  Styles
 * ------------------------------------------------------------------ */
const styles = StyleSheet.create({
  /* Fixed bar that overlays the bottom of the window */
  navBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,

    height: TAB_BAR_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
    zIndex: 100,                     // ensures it sits above page content
  },

  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    width: 40,
    height: 40,
    marginBottom: 4,
  },

  link: {
    fontSize: 12,
    color: '#666',
    textDecorationLine: 'none',
    fontWeight: '600',
    fontFamily: 'TT-Hoves-Regular',
  },
});

