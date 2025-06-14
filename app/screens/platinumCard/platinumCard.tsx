// react imports
import { View, Text, StyleSheet, Button, Image, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import { Link } from 'expo-router';
import React, { useState } from "react";
import { useRouter } from 'expo-router';

//components
import Navbar from '../../components/navbar';
import CheckRole from '../../components/roleComponents/checkRole';

// Get screen width to make image fit
const { width } = Dimensions.get('window');
const screenWidth = Dimensions.get('window').width;

const platinumCard = () => {
    const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <CheckRole/>
        <View style={styles.topHeader}>
            <Image source={require('@/assets/images/top_screen_arrow.png')} style={styles.noticeIcon} />
            <Text style={styles.location} >Northampton, MA</Text>
            <Image source={require('@/assets/images/home_bell.png')} style={styles.arrowIcon} />
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
                <Image source={require('@/assets/images/GoldCard/login.png')} style={styles.menuIcon} />
                <Link href="screens/Home" style={styles.menuLink}>Shop</Link>
              </View>
              <View style={styles.menuItem}>
                <Image source={require('@/assets/images/GoldCard/spade_holder.png')} style={styles.menuIconSpacer} />
              </View>
              <View style={styles.menuItem}>
                <Image source={require('@/assets/images/GoldCard/menu.png')} style={styles.menuIcon} />
                <Link href="screens/Vip" style={styles.menuLink}>spacer</Link>
              </View>
              <View style={styles.menuItem}>
                <Image source={require('@/assets/images/GoldCard/spade_holder.png')} style={styles.menuIconSpacer} />
              </View>
              <View style={styles.menuItem}>
                <Image source={require('@/assets/images/GoldCard/deals.png')} style={styles.menuIcon} />
                <Link href="screens/Profile" style={styles.menuLink}>Profile</Link>
              </View>
            </View>

        <View style={styles.middleSection}>
            <Text style={styles.textTitle}>Vip Program</Text>
            <Text style={styles.textEnd}>

                                         One KashMakena Birthday 1/8 for $1 or One Pre-Roll   

                                         Special VIP deals exclusive to Gold Members only.

                                         Gold Member VIP Pricing

                                         10% Off Accessories

                                         20% Off Merchandise

                                         First Monday of every month 30% off regular priced items (not stackable on Flash Sale or Daily Deals or any other discounts)

                                         Thursday only 5% off the entire cart stackable on any discounts or sales.

                                         1 lottery entry at the end of month for a give away. Winner will be announced the 1st week of the month through email.

            </Text>
        </View>
        <Navbar/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    backgroundColor: "white",
  },
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#fff',
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
        textDecorationLine: 'none',
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
    topHeader: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: "white",
    },
    middleSection: {
      height: screenWidth * 0.9,
      width: screenWidth * 0.85,
      backgroundColor: "#ffbfd8",
      borderRadius: 10,
      position: 'relative',
      left: 30,
    },
  textTitle: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
      textAlign: 'center',
      marginTop: 10,
  },
  textEnd: {
      color: "white",
      fontSize: 14,
      fontWeight: "bold",
      textAlign: 'center',
      lineHeight: 30,
      marginTop: 15,
      marginBottom: 15,
  },

});

export default platinumCard;