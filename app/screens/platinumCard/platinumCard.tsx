// react imports
import { View, Text, StyleSheet, Button, Image, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import { Link } from 'expo-router';
import React, { useState } from "react";
import { useRouter } from 'expo-router';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

//components
import Navbar from '../../components/navbar';
import CheckRole from '../../components/roleComponents/checkRole';
import GetName from '../../components/roleComponents/getName';

// Get screen width to make image fit
const { width } = Dimensions.get('window');
const screenWidth = Dimensions.get('window').width;

const platinumCard = () => {
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
    <CheckRole/>

        <View style={styles.topHeader}>
          <View style={styles.textContainer}>
            <Text style={styles.topTextDefault}>Welcome back</Text>
            <GetName/>
            <View style={styles.memberContainer}>
              <Image
                source={require('@/assets/images/header_crown_icon.png')}
                style={styles.crownIcon}
              />
              <Text style={styles.topTextDefault}> PLATINUM MEMBER</Text>
            </View>
          </View>
          <Image
            source={require('@/assets/images/header_profile_photo.png')} // ✅ Replace with actual profile image source
            style={styles.profileImage}
          />
        </View>

        <View style={styles.headerContainer}>
            <Image
                source={require('@/assets/images/PlatniumCard/platnium_silverCard.png')}
                style={styles.headerImg}
            />
        </View>

            {/* main home page menu */}
            <View style={styles.menuContainer}>
              <View style={styles.menuItem}>
                <Image source={require('@/assets/images/GoldCard/crown.png')} style={styles.menuIcon} />
                <Link href="screens/platinumCard/platinumCardNews" style={styles.menuLink}>Platinum Card News</Link>
              </View>
              <View style={styles.menuItem}>
                <Image source={require('@/assets/images/GoldCard/spade_holder.png')} style={styles.menuIconSpacer} />
              </View>
              <View style={styles.menuItem}>
                <Image source={require('@/assets/images/GoldCard/events.png')} style={styles.menuIcon} />
                <Link href="screens/Vip" style={styles.menuLink}>Coming Soon!</Link>
              </View>
              <View style={styles.menuItem}>
                <Image source={require('@/assets/images/GoldCard/spade_holder.png')} style={styles.menuIconSpacer} />
              </View>
              <View style={styles.menuItem}>
                <Image source={require('@/assets/images/GoldCard/deals.png')} style={styles.menuIcon} />
                <Link href="screens/platinumCard/platinumCardDeal" style={styles.menuLink}>Platinum Card Deals</Link>
              </View>
            </View>

        <View style={styles.middleSection}>
            <Text style={styles.textTitle}>Platinum Program</Text>
            <Text style={styles.textEnd}>
              • Free Claw Machine Play — 2nd Monday each month{'\n\n'}
              • Free Spin Wheel — 1st Monday each month{'\n\n'}
              • 5% Off HUSH & VIP{'\n\n'}
              • Birthday Gift: 1g Pre-Roll or 3.5g KashMakena (3 days before/after){'\n\n'}
              • 30% Off KashMakena — Every Monday (non stackable){'\n\n'}
              • Private Event Access (Greenfield){'\n\n'}
              • Monthly raffle prize drawing{'\n\n'}
              • Lottery raffle for a 7 day vacation package{'\n\n'}
            </Text>
        </View>
        <Navbar/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#1f1f1f",
    paddingBottom: 100, // Keeps bottom content above navbar
  },
    topHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft: 30,
      marginRight: 30,
      marginTop: 20,
    },
    textContainer: {
      flexDirection: 'column',
    },
    topTextDefault: {
      color: 'white',
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
      width: 21,
      height: 17,
      marginRight: 4,
    },
    profileImage: {
      width: 70,
      height: 70,
      borderRadius: 35,
    },
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#1f1f1f',
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
        color: '#ff66a2',
        textDecorationLine: 'none',
        fontFamily: 'TT-Hoves-Regular',
      },
    headerImg: {
      width: screenWidth * 0.8,
      height: screenWidth * 0.5,
      resizeMode: 'contain',
    },
    headerContainer: {
      position: 'relative',
      left: 40,
      width: screenWidth * .85,
      height: screenWidth * 0.4,
      marginBottom: 20,
      marginTop: 15,
    },
    location: {
        marginRight: 0,
        position: 'relative',
        right: 80,
    },
    noticeIcon: {
        marginRight: 0,
    },
    middleSection: {
    backgroundColor: '#ff66a2',
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginBottom: 30,
    width: '85%',
    alignSelf: 'center',
    },
  textTitle: {
      color: "white",
      fontSize: 26,
      fontWeight: "bold",
      textAlign: 'center',
      marginTop: 10,
      fontFamily: 'Lobster-Regular',
      marginBottom: 15,
  },
  textEnd: {
      color: "white",
      fontSize: 14,
      textAlign: 'center',
      lineHeight: 22,
      fontWeight: '500',
      fontFamily: 'TT-Hoves-Regular',
  },

});

export default platinumCard;