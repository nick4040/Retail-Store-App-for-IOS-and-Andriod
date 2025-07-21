import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import Navbar from '../components/navbar';
import { useFonts } from 'expo-font';

import AppLoading from 'expo-app-loading';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function HomeFunction() {

    const [fontsLoaded] = useFonts({
        'Lobster-Regular': require('@/assets/fonts/Lobster-Regular.ttf'),
        'TT-Hoves-Regular': require('@/assets/fonts/TT-Hoves-Regular.ttf'),
      });

      if (!fontsLoaded) {
          <AppLoading />
        }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>

        {/* Top Header */}
        <View style={styles.topHeader}>
          <View style={styles.textContainer}>
            <Text style={styles.topTextDefault}>Welcome back</Text>
            <Text style={styles.topTextName}>Alfredo Torres</Text>
            <View style={styles.memberContainer}>
              <Image
                source={require('@/assets/images/header_crown_icon.png')}
                style={styles.crownIcon}
              />
              <Text style={styles.topTextDefault}> VIP MEMBER</Text>
            </View>
          </View>
          <Image
            source={require('@/assets/images/header_profile_photo.png')}
            style={styles.profileImage}
          />
        </View>

        {/* Vip Header */}
        <View style={styles.topContainer}>
          <View style={styles.topSection}>
            <Text style={styles.topText}>Vip Program</Text>
            <Text style={styles.topTextMiddle}>
              Welcome to the Vip Program where members get discount on numinous products
            </Text>
          </View>
        </View>

        {/* Vip Navbar */}
        <View style={styles.menuContainer}>
          <View style={styles.menuItem}>
            <Image source={require('@/assets/images/GoldCard/login.png')} style={styles.menuIcon} />
            <Link href="screens/platinumCard/platinumSignup" style={styles.menuLink}>Platinum Sign Up</Link>
          </View>
          <View style={styles.menuItem}>
            <Image source={require('@/assets/images/GoldCard/spade_holder.png')} style={styles.menuIconSpacer} />
          </View>
          <View style={styles.menuItem}>
            <Image source={require('@/assets/images/GoldCard/menu.png')} style={styles.menuIcon} />
            <Link href="screens/Vip" style={styles.menuLink}>Vip Sign Up</Link>
          </View>
          <View style={styles.menuItem}>
            <Image source={require('@/assets/images/GoldCard/spade_holder.png')} style={styles.menuIconSpacer} />
          </View>
          <View style={styles.menuItem}>
            <Image source={require('@/assets/images/GoldCard/deals.png')} style={styles.menuIcon} />
            <Link href="screens/goldCard/createGoldCard" style={styles.menuLink}>Gold Sign Up</Link>
          </View>
        </View>

        {/* Bottom Buttons */}
        <View style={styles.bottomContainer}>
          <View style={styles.bottomButton}>
            <Link href="screens/Home" style={styles.bottomLink}>VIP MENU</Link>
          </View>
          <View style={styles.bottomButton}>
            <Link href="screens/Home" style={styles.bottomLink}>HUSH MENU</Link>
          </View>
          <View style={styles.bottomButton}>
            <Link href="screens/Home" style={styles.bottomLink}>STORMI MENU</Link>
          </View>
          <View style={styles.bottomButton}>
            <Link href="screens/Home" style={styles.bottomLink}>MONTHLY MENU</Link>
          </View>
          <View style={styles.bottomButton}>
            <Link href="screens/Home" style={styles.bottomLink}>FLASH MENU</Link>
          </View>
        </View>

        <Navbar />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: screenWidth * 0.06,
    marginTop: 20,
  },
  textContainer: {
    flex: 1,
  },
  topTextDefault: {
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
  },
  topTextName: {
    color: '#ffbfd8',
    fontSize: 20,
    fontWeight: 'bold',
  },
  memberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  crownIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  profileImage: {
    width: screenWidth * 0.18,
    height: screenWidth * 0.18,
    borderRadius: screenWidth * 0.09,
  },
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  topSection: {
    borderRadius: 12,
    width: screenWidth * 0.9,
    minHeight: screenWidth * 0.55,
    backgroundColor: "#ffbfd8",
    padding: 20,
  },
  topText: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: 'center',
    marginBottom: 25,
    fontFamily: 'Lobster-Regular',
  },
  topTextMiddle: {
    color: "white",
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 26,
    fontFamily: 'TT-Hoves-Regular',
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: 15,
  },
  menuItem: {
    alignItems: 'center',
    margin: 5,
    width: screenWidth * 0.15,
  },
  menuIcon: {
    width: 55,
    height: 55,
    marginBottom: 4,
  },
  menuIconSpacer: {
    width: 40,
    height: 40,
    marginBottom: 4,
  },
  menuLink: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    textDecorationLine: 'none',
    fontFamily: 'TT-Hoves-Regular',
  },
  bottomContainer: {
    alignItems: 'center',
    marginBottom: 80,
  },
  bottomButton: {
    borderRadius: 10,
    marginVertical: 10,
    width: screenWidth * 0.8,
    height: 55,
    backgroundColor: "#ffbfd8",
    justifyContent: 'center',
  },
  bottomLink: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'center',
    fontFamily: 'TT-Hoves-Regular',
  },
});
