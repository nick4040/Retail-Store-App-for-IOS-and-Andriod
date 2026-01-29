import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Link } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

/** Base height of the bar (icons + label area, before safe-area) */
const TAB_BAR_HEIGHT = 64;

const Navbar: React.FC = () => {
  const insets = useSafeAreaInsets(); // ✅ Must stay above any early returns

  const [fontsLoaded] = useFonts({
    'Lobster-Regular': require('@/assets/fonts/Lobster-Regular.ttf'),
    'TT-Hoves-Regular': require('@/assets/fonts/TT-Hoves-Regular.ttf'),
  });

  // ✅ Safe fallback while fonts load
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="small" />
      </View>
    );
  }

  const bottomPad = insets.bottom; // usually 0 on Android, >0 on iOS

  return (
    <LinearGradient
      colors={['#ff66c4', '#ffde59']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.navBar, { paddingBottom: bottomPad }]}
    >
      <NavItem icon={require('@/assets/images/home_home_icon.png')} href="/screens/Home"  />
      <NavItem icon={require('@/assets/images/home_vip.png')} href="/screens/Vip"  />
      <NavItem icon={require('@/assets/images/shop_nav.png')} href="https://kashmakena.squarespace.com/merch"  />
      <NavItem icon={require('@/assets/images/profile_nav.png')} href="/screens/Profile"  />
    </LinearGradient>
  );
};

/* ------------------------------------------------------------------ *
 *  Nav Item Component
 * ------------------------------------------------------------------ */
interface NavItemProps {
  icon: any;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, href, label }) => (
  <Link href={href} style={styles.navItem} asChild>
    <TouchableOpacity activeOpacity={0.7} style={styles.touchable}>
      <Image source={icon} style={styles.icon} resizeMode="contain" />
    </TouchableOpacity>
  </Link>
);

export default Navbar;

/* ------------------------------------------------------------------ *
 *  Styles
 * ------------------------------------------------------------------ */
const styles = StyleSheet.create({
  navBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: TAB_BAR_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 100,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  icon: {
    width: 45,
    height: 45,
    marginTop: 0,
  },
  loadingContainer: {
    height: TAB_BAR_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
