// React imports
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

// Components
import Navbar from '../../components/navbar';
import CheckRole from '../../components/roleComponents/checkRole';

// Get screen width for responsive design
const { width: screenWidth } = Dimensions.get('window');

const GoldCard = () => {

    const router = useRouter();

    const [fontsLoaded] = useFonts({
        'Lobster-Regular': require('@/assets/fonts/Lobster-Regular.ttf'),
        'TT-Hoves-Regular': require('@/assets/fonts/TT-Hoves-Regular.ttf'),
      });

      if (!fontsLoaded) {
          <AppLoading />
        }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <CheckRole />

      {/* Header Section */}
      <View style={styles.topHeader}>
        <View style={styles.textContainer}>
          <Text style={styles.topTextDefault}>Welcome back</Text>
          <Text style={styles.topTextName}>Alfredo Torres</Text>
          <View style={styles.memberContainer}>
            <Image
              source={require('@/assets/images/header_crown_icon.png')}
              style={styles.crownIcon}
            />
            <Text style={styles.topTextDefault}> GOLD MEMBER</Text>
          </View>
        </View>
        <Image
          source={require('@/assets/images/header_profile_photo.png')}
          style={styles.profileImage}
        />
      </View>

      {/* Gold Card Image */}
      <View style={styles.headerContainer}>
        <Image
          source={require('@/assets/images/GoldCard/goldcard.png')}
          style={styles.headerImg}
        />
      </View>

      {/* Main Gold Card Menu */}
      <View style={styles.menuContainer}>
        <View style={styles.menuItem}>
          <Image
            source={require('@/assets/images/GoldCard/crown.png')}
            style={styles.menuIcon}
          />
          <Link href="screens/goldCard/goldCardNew" style={styles.menuLink}>
            Gold Card News
          </Link>
        </View>
        <View style={styles.menuItem}>
          <Image
            source={require('@/assets/images/GoldCard/spade_holder.png')}
            style={styles.menuIconSpacer}
          />
        </View>
        <View style={styles.menuItem}>
          <Image
            source={require('@/assets/images/GoldCard/menu.png')}
            style={styles.menuIcon}
          />
          <Link href="screens/Vip" style={styles.menuLink}>
            Coming Soon!
          </Link>
        </View>
        <View style={styles.menuItem}>
          <Image
            source={require('@/assets/images/GoldCard/spade_holder.png')}
            style={styles.menuIconSpacer}
          />
        </View>
        <View style={styles.menuItem}>
          <Image
            source={require('@/assets/images/GoldCard/deals.png')}
            style={styles.menuIcon}
          />
          <Link href="screens/goldCard/goldCardDeal" style={styles.menuLink}>
            Gold Card Deals
          </Link>
        </View>
      </View>

      {/* VIP Program Section */}
      <View style={styles.middleSection}>
        <Text style={styles.textTitle}>Vip Program</Text>
        <Text style={styles.textEnd}>
          • Free Claw Machine Play — 2nd Monday each month{'\n\n'}
          • Free Spin Wheel — 1st Monday each month{'\n\n'}
          • 5% Off HUSH & VIP{'\n\n'}
          • Birthday Gift: 1g Pre-Roll or 3.5g KashMakena (3 days before/after){'\n\n'}
          • 30% Off KashMakena — Every Monday (non stackable){'\n\n'}
          • Private Event Access (Greenfield){'\n\n'}
          • Monthly raffle prize drawing
        </Text>
      </View>

      {/* Bottom Navbar */}
      <Navbar />
    </ScrollView>
  );
};

export default GoldCard;

// Styles
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingBottom: 100, // Keeps bottom content above navbar
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
    marginTop: 20,
  },
  textContainer: {
    flexDirection: 'column',
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
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  headerImg: {
    width: screenWidth * 0.8,
    height: screenWidth * 0.5,
    resizeMode: 'contain',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 15,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 30,
    marginTop: 25,
  },
  menuItem: {
    alignItems: 'center',
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
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
    textDecorationLine: 'none',
    fontFamily: 'TT-Hoves-Regular',
  },
  middleSection: {
    backgroundColor: '#ffbfd8',
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginBottom: 30,
    width: '85%',
    alignSelf: 'center',
  },
  textTitle: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    fontFamily: 'Lobster-Regular',
  },
  textEnd: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 22,
    fontFamily: 'TT-Hoves-Regular',
  },
});
