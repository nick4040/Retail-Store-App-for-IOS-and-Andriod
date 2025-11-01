import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity, Linking } from 'react-native';
import Navbar from '../../components/navbar';
import GetName from '../../components/roleComponents/getName';
import TurningLeafPartnerDisplay from '../../components/partnerComponents/partnerDisplayProfileTurningLeaf';
import DiscountList from '../../components/partnerComponents/partnerDisplayDiscount';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const screenWidth = Dimensions.get('window').width;

export default function TurningLeafPage() {

  const [fontsLoaded] = useFonts({
    'Lobster-Regular': require('@/assets/fonts/Lobster-Regular.ttf'),
    'TT-Hoves-Regular': require('@/assets/fonts/TT-Hoves-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView style={styles.containerScroll} contentContainerStyle={styles.content}>
      <View style={styles.container}>
       {/* Header Section */}
      <View style={styles.topHeader}>
        <View style={styles.textContainer}>
          <Text style={styles.topTextDefault}>Welcome</Text>
          <GetName />
          <View style={styles.memberContainer}>
            <Text style={styles.topTextDefault}>To Turning Leaf</Text>
          </View>
        </View>
        <Image
          source={require('@/assets/images/header_profile_photo.png')}
          style={styles.profileImage}
          resizeMode="cover"
        />
      </View>

      {/* Turning Leaf Card */}
      <View style={styles.card}>
        <Image
          source={require('@/assets/images/partners/turningLeafLogo.png')}
          style={styles.cardLogo}
          resizeMode="cover"
        />
        <TurningLeafPartnerDisplay />
        <TouchableOpacity onPress={() => Linking.openURL('https://yourwebsite.com')}>
          <Text style={styles.cardLink}>Click here to check out our website</Text>
        </TouchableOpacity>
      </View>

        <DiscountList companyId="turningleaf" />

      <Navbar />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerScroll: {
    flex: 1,
    backgroundColor: '#1f1f1f',
  },
  container: {
    flex: 1,
    backgroundColor: "#1f1f1f",
    paddingBottom: 75,
  },
  content: {
    padding: 16,
  },
  // header styling
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    fontFamily: 'TT-Hoves-Regular',
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  topTextDefault: {
    fontSize: screenWidth < 360 ? 16 : 18,
    fontWeight: '600',
    flexWrap: 'wrap',
    fontFamily: 'TT-Hoves-Regular',
    color: 'white',
  },
  memberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    flexWrap: 'wrap',
  },
  crownIcon: {
    width: screenWidth < 360 ? 16 : 20,
    height: screenWidth < 360 ? 16 : 20,
    marginRight: 6,
  },
  profileImage: {
    width: screenWidth < 360 ? 50 : 60,
    height: screenWidth < 360 ? 50 : 60,
    borderRadius: 30,
    marginLeft: 10,
  },
  // Renew card styles
  card: {
    backgroundColor: '#ff66a2',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  cardLogo: {
    width: 350,
    height: 350,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#222',
  },
  cardSubtitle: {
    fontSize: 14,
    letterSpacing: 2,
    color: '#999',
    marginBottom: 12,
  },
  cardDescription: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
    marginBottom: 16,
  },
  cardLink: {
    fontSize: 14,
    color: 'white',
    textDecorationLine: 'underline',
  },
  // slide show styling
  imageScroll: {
    marginHorizontal: 10,
    marginBottom: 2,
  },
  slideText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 30,
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

});