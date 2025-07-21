import { View, Text, StyleSheet, Button, Image, ScrollView, Dimensions } from 'react-native';
import { Link } from 'expo-router';
import { useFonts } from 'expo-font';

import Navbar from '../components/navbar';
import Countdown from '../components/countDown';

import Swiper from 'react-native-swiper';
import AppLoading from 'expo-app-loading';


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

            <View style={styles.topHeader}>
              <Image source={require('@/assets/images/home_bell.png')} style={styles.noticeIcon} />

              <View style={styles.locationContainer}>
                <Text style={styles.location}>Northampton, MA</Text>
                <Image source={require('@/assets/images/top_screen_arrow.png')} style={styles.arrowIcon} />
              </View>
            </View>

            {/* header picture and text */}
            <View style={styles.headerContainer}>
              <Image
                source={require('@/assets/images/home_screen_background.png')}
                style={styles.headerImg}
              />
              <Text style={styles.headerTitle} >Your cannabis experience starts here</Text>
              <Text style={styles.headerText}>Where every craving is met with an array of delightful options.</Text>
            </View>

            {/* main home page menu */}
            <View style={styles.menuContainer}>
              <View style={styles.menuItem}>
                <Image source={require('@/assets/images/Home/partnersIcon.png')} style={styles.menuIcon} />
                <Link href="screens/Partners" style={styles.menuLink}>Partners{'\n'}<Text style={styles.menuPlaceHolder} >i</Text></Link>
              </View>
              <View style={styles.menuItem}>
                <Image source={require('@/assets/images/home_menu.png')} style={styles.menuIcon} />
                <Link href="screens/Vip" style={styles.menuLink}>Menu{'\n'}<Text style={styles.menuPlaceHolder} >i</Text></Link>
              </View>
              <View style={styles.menuItem}>
                <Image source={require('@/assets/images/home_goldicon.png')} style={styles.menuIcon} />
                <Link href="screens/roleCheck" style={styles.menuLink}>Gold {'\n'}
                Member</Link>
              </View>
              <View style={styles.menuItem}>
                <Image source={require('@/assets/images/home_platnium.png')} style={styles.menuIcon} />
                <Link href="screens/roleCheck" style={styles.menuLink}>Platinum {'\n'}
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
    paddingBottom: 75, // Keeps bottom content above navbar
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
      fontFamily: 'TT-Hoves-Regular',
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
      top: '80%',
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: 'TT-Hoves-Regular',
    },
    headerTitle: {
      position: 'absolute',
      top: '20%',
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: 'Lobster-Regular',
    },
    topHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 5,
        width: '100%',
      },
      noticeIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
      },
      locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6, // if not supported, use marginLeft in arrowIcon
      },
      location: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        fontFamily: 'TT-Hoves-Regular',
      },
      arrowIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
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
        fontSize: 14,
        color: '#333',
        textDecorationLine: 'none',
        textAlign: 'center',
        fontFamily: 'TT-Hoves-Regular',
      },
      menuPlaceHolder: {
        color: '#ffffff',
      },
});
export default HomeFunction;