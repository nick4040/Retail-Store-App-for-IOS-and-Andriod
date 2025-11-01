import { View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Navbar from '../components/navbar';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import CheckPartnerRole from '../components/roleComponents/checkPartnerRole';
import { useRouter } from 'expo-router';

const screenWidth = Dimensions.get('window').width;

const partners = [
  { name: 'Turning Leaf', image: require('@/assets/images/partners/turningLeafLogo.png'), route: '/screens/appPartners/turningLeafPage' },
  { name: 'Renew Cannabis Co.', image: require('@/assets/images/partners/renewPartner.png'), route: '/screens/appPartners/renewPage' },
];

export default function PartnersPage() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    'Lobster-Regular': require('@/assets/fonts/Lobster-Regular.ttf'),
    'TT-Hoves-Regular': require('@/assets/fonts/TT-Hoves-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handlePress = (route: string) => {
    router.push(route);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Our Trusted Partners</Text>
          <Text style={styles.subtitle}>Explore brands we proudly collaborate with</Text>
        </View>

        <View style={styles.grid}>
          {partners.map((partner, index) => (
            <TouchableOpacity
              key={index}
              style={styles.partnerTile}
              onPress={() => handlePress(partner.route)}
            >
              <Image source={partner.image} style={styles.partnerImage} resizeMode="contain" />
              <Text style={styles.partnerName}>{partner.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <CheckPartnerRole />
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
    backgroundColor: 'black',
  },
  scrollContainer: {
    paddingBottom: 100,
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
    color: 'white',
    fontFamily: 'Lobster-Regular',
  },
  subtitle: {
    fontSize: 14,
    color: 'white',
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
    width: screenWidth * 0.35,
    height: screenWidth * 0.55,
    backgroundColor: '#ff66a2',
    borderRadius: 12,
    marginVertical: 12,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-between',
  },
  partnerImage: {
    width: screenWidth * 0.55,
    height: screenWidth * 0.40,
    resizeMode: 'contain',
  },
  partnerName: {
    fontSize: 13,
    color: 'white',
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
