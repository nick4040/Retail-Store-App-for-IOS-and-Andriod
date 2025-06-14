import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { Link } from 'expo-router';
import Navbar from '../components/navbar';

// Get screen width to make image fit
const { width } = Dimensions.get('window');
const screenWidth = Dimensions.get('window').width;

export default function HomeFunction() {
  return (
    <View style={styles.container}>

        {/* Vip Header */}
        <View style={styles.topContainer}>
            <View style={styles.topSection}>
                <Text style={styles.topText}>Vip Program</Text>
                <Text style={styles.topTextMiddle}>Welcome to the Vip Program where
                       members get discount on numinous
                      products </Text>
            </View>
        </View>


        {/* Vip navbar */}
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
            </View>

        <Navbar/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
      },
    topContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 10,
      },
    topSection: {
        borderRadius: 10,
        width: screenWidth * .9,
        height: screenWidth * .6,
        backgroundColor: "#ffbfd8",
      },
    topText: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
        textAlign: 'center',
        marginTop: 20,
        lineHeight: 1.6,
      },
    topTextMiddle: {
        color: "white",
        fontSize: 18,
        textAlign: 'center',
        marginTop: 30,
        lineHeight: 30,
      },
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#fff',
        marginTop: 35,
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
    bottomContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 75,
      },
    bottomButton: {
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
        width: 300,
        height: 55,
        backgroundColor: "#ffbfd8",
      },
    bottomLink: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: 'center',
        marginTop: 15,
      },
});