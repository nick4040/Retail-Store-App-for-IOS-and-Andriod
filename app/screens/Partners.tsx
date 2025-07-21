import { View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Navbar from '../components/navbar';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const screenWidth = Dimensions.get('window').width;

const partners = [
  { name: 'Turning Leaf', image: require('@/assets/images/partners/turningLeafLogo.png') },
  { name: 'Green Roots', image: require('@/assets/images/partners/turningLeafLogo.png') },
  { name: 'Bloom Collective', image: require('@/assets/images/partners/turningLeafLogo.png') },
  { name: 'Elevated', image: require('@/assets/images/partners/turningLeafLogo.png') },
  { name: 'Trippy Treats', image: require('@/assets/images/partners/turningLeafLogo.png') },
  { name: 'Leafy Lane', image: require('@/assets/images/partners/turningLeafLogo.png') },
  { name: 'Herbal Essence', image: require('@/assets/images/partners/turningLeafLogo.png') },
  { name: 'Pink Haze', image: require('@/assets/images/partners/turningLeafLogo.png') },
  { name: 'Sativa Sisters', image: require('@/assets/images/partners/turningLeafLogo.png') },
];

export default function PartnersPage() {

       const [fontsLoaded] = useFonts({
          'Lobster-Regular': require('@/assets/fonts/Lobster-Regular.ttf'),
          'TT-Hoves-Regular': require('@/assets/fonts/TT-Hoves-Regular.ttf'),
        });

        if (!fontsLoaded) {
            <AppLoading />
          }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Our Trusted Partners</Text>
          <Text style={styles.subtitle}>Explore brands we proudly collaborate with</Text>
        </View>

        <View style={styles.grid}>
          {partners.map((partner, index) => (
            <TouchableOpacity key={index} style={styles.partnerTile}>
              <Image source={partner.image} style={styles.partnerImage} resizeMode="contain" />
              <Text style={styles.partnerName}>{partner.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.navbarContainer}>
        <Navbar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingBottom: 100, // Leave room for navbar
  },
  header: {
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ff80ab',
    fontFamily: 'Lobster-Regular',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginTop: 5,
    fontFamily: 'TT-Hoves-Regular',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 5,
  },
  partnerTile: {
    width: screenWidth * 0.28,
    height: screenWidth * 0.28 + 25,
    backgroundColor: '#ffbfd8',
    borderRadius: 12,
    marginVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  partnerImage: {
    width: 145,
    height: 145,
    marginTop: 65,
  },
  partnerName: {
    marginBottom: 100,
    fontSize: 13,
    color: '#333',
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: 'TT-Hoves-Regular',
  },
  navbarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
