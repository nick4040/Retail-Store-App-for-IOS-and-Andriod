import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import Navbar from '../components/navbar';
import Countdown from '../components/countDown';

const HomeFunction = () => {

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
            <Image source={require('@/assets/images/homeLogo.png')} style={styles.logo}/>
              {/* Top Section */}
              <View style={styles.topSection}>
                <Text style={styles.textTitle}>Count Down To the Next Gold Card</Text>
                <Countdown />
              </View>

              <View style={styles.middleSection}>
                <Text style={styles.textTitle}>Vip Program</Text>
                <Image source={require('@/assets/images/vipMainImg.png')} style={styles.assetImg}/>
                <Text style={styles.textEnd}>Click here to view more information</Text>
              </View>

              <View style={styles.middleSection}>
                <Text style={styles.textTitle}>Gold Program</Text>
                <Image source={require('@/assets/images/goldCardImg.png')} style={styles.assetImg}/>
                <Text style={styles.textEnd}>Click here to view more information</Text>
              </View>
              <Navbar/>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between'
  },
  topSection: {
    flex: 2,
    backgroundColor: "#B70A7B",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 30,
    marginRight: 10,
    marginLeft: 10,
  },
    middleSection: {
      flex: 2,
      backgroundColor: "#B70A7B",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      marginBottom: 30,
      marginRight: 40,
      marginLeft: 40,
    },
  textTitle: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
      top: 5,
      position: 'absolute',
  },
  textEnd: {
      color: "white",
      fontSize: 12,
      fontWeight: "bold",
      bottom: 5,
      position: 'absolute',
      textAlign: 'center'
  },
  logo: {
      height: 150,
      width: 350,
      bottom: 0,
      left: 0,
      position: 'relative',
      resizeMode: 'contain',
      marginBottom: 20,
      marginTop: 20,
  },
  assetImg: {
      height: 90,
      width: 100,
      bottom: 0,
      position: 'relative',
      resizeMode: 'resize',
      marginTop: 10,
  },
});
export default HomeFunction;