import { View, Text, StyleSheet, Button, Image, ScrollView, Dimensions } from 'react-native';
import { Link } from 'expo-router';
import Navbar from '../components/navbar';
import Countdown from '../components/countDown';

import Swiper from 'react-native-swiper';


// Get screen width to make image fit
const { width } = Dimensions.get('window');
const screenWidth = Dimensions.get('window').width;

const imagesDeals = [
  require('@/assets/images/flyers/flyer1.png'),
  require('@/assets/images/flyers/flyer2.jpg'),
  require('@/assets/images/flyers/flyer2.jpg'),
  require('@/assets/images/flyers/flyer2.jpg'),
  require('@/assets/images/flyers/flyer2.jpg'),
];

const imagesFlyers = [
  require('@/assets/images/flyers/flyer1.png'),
  require('@/assets/images/flyers/flyer2.jpg'),
  require('@/assets/images/flyers/flyer2.jpg'),
  require('@/assets/images/flyers/flyer2.jpg'),
  require('@/assets/images/flyers/flyer2.jpg'),
  require('@/assets/images/flyers/flyer2.jpg'),
];

const HomeFunction = () => {

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>

            <View style={styles.topHeader}>
                <Image source={require('@/assets/images/top_screen_arrow.png')} style={styles.noticeIcon} />
                <Text style={styles.location} >Northampton, MA</Text>
                <Image source={require('@/assets/images/home_bell.png')} style={styles.arrowIcon} />
            </View>

            {/* header picture and text */}
            <View style={styles.headerContainer}>
              <Image
                source={require('@/assets/images/home_screen_background.png')}
                style={styles.headerImg}
              />
              <Text style={styles.headerText}>Your cannabis experience starts here Where every craving is met with an array of delightful options.</Text>
            </View>

            {/* main home page menu */}
            <View style={styles.menuContainer}>
              <View style={styles.menuItem}>
                <Image source={require('@/assets/images/home_shop.png')} style={styles.menuIcon} />
                <Link href="screens/Home" style={styles.menuLink}>Shop</Link>
              </View>
              <View style={styles.menuItem}>
                <Image source={require('@/assets/images/home_menu.png')} style={styles.menuIcon} />
                <Link href="screens/Vip" style={styles.menuLink}>Menu</Link>
              </View>
              <View style={styles.menuItem}>
                <Image source={require('@/assets/images/home_goldicon.png')} style={styles.menuIcon} />
                <Link href="screens/GoldCard" style={styles.menuLink}>Gold {'\n'}
                Member</Link>
              </View>
              <View style={styles.menuItem}>
                <Image source={require('@/assets/images/home_platnium.png')} style={styles.menuIcon} />
                <Link href="screens/platinumCard/platinumCard" style={styles.menuLink}>Platinum {'\n'}
                Member</Link>
              </View>
            </View>

            {/* slide show for deals */}
              <Text style={styles.slideText} >Deals and Discounts</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageScroll}>
              {imagesFlyers.map((image, index) => (
                <Image key={index} source={image} style={styles.thumbnailImage} />
              ))}
            </ScrollView>

            {/* slide show for flyers */}
              <Text style={styles.slideText} >Explore Upcoming Events</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageScroll}>
              {imagesDeals.map((image, index) => (
                <Image key={index} source={image} style={styles.thumbnailImage} />
              ))}
            </ScrollView>

        <Navbar/>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between'
  },
    imageScroll: {
      marginHorizontal: 10,
      marginBottom: 2,
    },
    slideText: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
      marginLeft: 10,
    },
    thumbnailImage: {
      width: 150,
      height: 150,
      resizeMode: 'cover',
      borderRadius: 10,
      marginRight: 10,
    },
    headerImg: {
      width: screenWidth,
      height: screenWidth * 0.5,
      resizeMode: 'cover',
    },
    headerContainer: {
      position: 'relative',
      width: screenWidth,
      height: screenWidth * 0.4,
      marginBottom: 20,
      marginTop: 7.5,
    },
    headerText: {
      position: 'absolute',
      top: '25%',
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    topHeader: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    location: {
        marginRight: 0,
        position: 'relative',
        right: 80,
    },
    noticeIcon: {
        marginRight: 0,
    },
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#fff',
        marginBottom: 10,
        marginTop: 20,
      },
      menuItem: {
        alignItems: 'center',
        marginHorizontal: 10,
      },
      menuIcon: {
        width: 60,
        height: 60,
        marginBottom: 4,
      },
      menuLink: {
        fontSize: 12,
        color: '#333',
        textDecorationLine: 'none',
        textAlign: 'center',
      },
});
export default HomeFunction;