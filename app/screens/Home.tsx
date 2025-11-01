import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, Modal, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Swiper from 'react-native-swiper';
import Navbar from '../components/navbar';
import GetName from '../components/roleComponents/getName';
import { Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const screenWidth = Dimensions.get('window').width;

const imagesEvents = [
  require('@/assets/images/flyers/flyer1.png'),
  require('@/assets/images/flyers/flyer9.png'),
  require('@/assets/images/flyers/flyer8.png'),
];

const imagesDeals = [
  require('@/assets/images/flyers/flyer7.png'),
  require('@/assets/images/flyers/flyer6.png'),
  require('@/assets/images/flyers/flyer5.png'),
  require('@/assets/images/flyers/flyer4.png'),
  require('@/assets/images/flyers/flyer2.jpg'),
];

const partners = [
  {
    name: "Renew Cannabis Company",
    image: require("@/assets/images/partners/renewPartner.png"),
    link: "screens/appPartners/renewPage"
  },
   {
    name: "Turning Leaf Cannabis Center",
    image: require("@/assets/images/partners/turningLeafLogo.png"),
    link: "screens/appPartners/turningLeafPage"
   },
];

const HomeFunction = () => {

  const [scale1, setScale1] = useState(new Animated.Value(1));
  const [scale2, setScale2] = useState(new Animated.Value(1));
  const [scale3, setScale3] = useState(new Animated.Value(1));
  const [scale4, setScale4] = useState(new Animated.Value(1));

  const [fontsLoaded] = useFonts({
    'Lobster-Regular': require('@/assets/fonts/Lobster-Regular.ttf'),
    'TT-Hoves-Regular': require('@/assets/fonts/TT-Hoves-Regular.ttf'),
  });

  const [selectedImages, setSelectedImages] = useState<any[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const openImage = (imagesArray: any[], index: number) => {
    setSelectedImages(imagesArray);
    setSelectedIndex(index);
    setModalVisible(true);
  };

  const closeImage = () => {
    setModalVisible(false);
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>

        {/* Header Section */}
        <View style={styles.topHeader}>
          <View>
            <Text style={styles.topTextDefault}>Welcome back</Text>
            <GetName />
          </View>
          <Image source={require('@/assets/images/header_profile_photo.png')} style={styles.profileImage} />
        </View>

        <LinearGradient
          colors={['#ff66c4', '#ffde59']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.headerContainer} // ✅ keeping same style tag
        >
          <Text style={styles.headerTitle}>Your cannabis experience starts here</Text>
          <Text style={styles.headerText}>
            Where every craving is met with delightful options.
          </Text>
        </LinearGradient>

        {/* Menu Section */}
        <View style={styles.menuContainer}>
          <Link href="screens/Partners" asChild>
            <TouchableOpacity
              style={styles.menuItem}
              activeOpacity={0.9}
              onPressIn={() => setScale1(0.95)}
              onPressOut={() => setScale1(1)}
            >
              <Animated.Image
                source={require('@/assets/images/Home/partnersIcon.png')}
                style={[styles.menuIcon, { transform: [{ scale: scale1 }] }]}
              />
              <Text style={styles.menuText}>Partners</Text>
            </TouchableOpacity>
          </Link>

          <Link href="screens/Vip" asChild>
            <TouchableOpacity
              style={styles.menuItem}
              activeOpacity={0.9}
              onPressIn={() => setScale2(0.95)}
              onPressOut={() => setScale2(1)}
            >
              <Animated.Image
                source={require('@/assets/images/home_menu.png')}
                style={[styles.menuIcon, { transform: [{ scale: scale2 }] }]}
              />
              <Text style={styles.menuText}>Menu</Text>
            </TouchableOpacity>
          </Link>

          <Link href="screens/roleCheck" asChild>
            <TouchableOpacity
              style={styles.menuItem}
              activeOpacity={0.9}
              onPressIn={() => setScale3(0.95)}
              onPressOut={() => setScale3(1)}
            >
              <Animated.Image
                source={require('@/assets/images/home_goldicon.png')}
                style={[styles.menuIcon, { transform: [{ scale: scale3 }] }]}
              />
              <Text style={styles.menuText}>Gold{"\n"}Member</Text>
            </TouchableOpacity>
          </Link>

          <Link href="screens/roleCheck" asChild>
            <TouchableOpacity
              style={styles.menuItem}
              activeOpacity={0.9}
              onPressIn={() => setScale4(0.95)}
              onPressOut={() => setScale4(1)}
            >
              <Animated.Image
                source={require('@/assets/images/home_platnium.png')}
                style={[styles.menuIcon, { transform: [{ scale: scale4 }] }]}
              />
              <Text style={styles.menuText}>Platinum{"\n"}Member</Text>
            </TouchableOpacity>
          </Link>
        </View>


        {/* Deals Section */}
        <Text style={styles.slideText}>Deals and Discounts</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageScroll}>
          {imagesDeals.map((image, index) => (
            <TouchableOpacity key={index} onPress={() => openImage(imagesDeals, index)}>
              <Image source={image} style={styles.thumbnailImage} />
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Events Section */}
        <Text style={styles.slideText}>Explore Upcoming Events</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageScroll}>
          {imagesEvents.map((image, index) => (
            <TouchableOpacity key={index} onPress={() => openImage(imagesEvents, index)}>
              <Image source={image} style={styles.thumbnailImage} />
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* --- Partners Section --- */}
        <Text style={styles.slideText}>Our Partners</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.partnerScroll}
          contentContainerStyle={{ paddingHorizontal: 10 }}
        >
          {partners.map((partner, index) => (
            <Link
              key={index}
              href={partner.link}
              style={{ textDecorationLine: "none" }}
            >
              <View style={styles.partnerCard}>
                <Image source={partner.image} style={styles.partnerImage} resizeMode="cover" />
                <Text style={styles.partnerText}>{partner.name}</Text>
              </View>
            </Link>
          ))}
        </ScrollView>

        {/* Fullscreen Image Viewer */}
        <Modal visible={modalVisible} transparent animationType="fade">
          <View style={styles.modalBackground}>
            <TouchableOpacity style={styles.closeButton} onPress={closeImage}>
              <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>
            <Swiper loop={false} index={selectedIndex} showsPagination={true}>
              {selectedImages.map((img, idx) => (
                <View key={idx} style={styles.fullscreenWrapper}>
                  <Image source={img} style={styles.fullscreenImage} resizeMode="contain" />
                </View>
              ))}
            </Swiper>
          </View>
        </Modal>

        <Navbar />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black", paddingBottom: 75 },
  scrollContainer: { flexGrow: 1 },
  topHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 20 },
  topTextDefault: { fontSize: 14, color: '#ff66a2' },
  profileImage: { width: 45, height: 45, borderRadius: 30 },

  /* HEADER STYLES */
  headerContainer: { width: screenWidth * 0.75, height: 350, borderRadius: 20, alignSelf: "center", justifyContent: "center", alignItems: "center", paddingHorizontal: 20, shadowColor: "#000", shadowOpacity: 0.15, shadowRadius: 8, shadowOffset: { width: 0, height: 4 }, elevation: 5 },
  headerTitle: { fontSize: 24, fontWeight: "bold", color: "#ffffff", textAlign: "center", marginBottom: 20, fontFamily: 'TT-Hoves-Regular' },
  headerText: { fontSize: 18, color: "#ffffff", textAlign: "center", lineHeight: 22, fontFamily: 'TT-Hoves-Regular' },

  /* MENU STYLES */
  menuContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, paddingHorizontal: 10 },
  menuItem: { width: '25%', backgroundColor: 'transparent', borderRadius: 10, alignItems: 'center', paddingVertical: 10, paddingHorizontal: 5 },
  menuIcon: { width: 75, height: 50, resizeMode: 'contain', marginBottom: 5 },
  menuText: { marginTop: 5, fontSize: 12, color: '#ff66a2', textAlign: 'center', width: '100%', lineHeight: 16, flexWrap: 'wrap', fontWeight: '600' },

  /* FLYER AND PARTNER STYLES */
  slideText: { marginTop: 30, marginLeft: 10, fontSize: 18, fontWeight: 'bold', color: '#ff66a2' },
  imageScroll: { marginHorizontal: 10, marginTop: 10 },
  thumbnailImage: { width: 150, height: 150, borderRadius: 10, marginRight: 10 },
  partnerScroll: { marginTop: 15, marginBottom: 10 },
  partnerCard: { backgroundColor: '#ff66a2', borderRadius: 16, width: 160, alignItems: 'center', paddingVertical: 25, paddingHorizontal: 15, marginRight: 15, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 6, shadowOffset: { width: 0, height: 3 }, elevation: 3 },
  partnerImage: { width: 75, height: 175 },
  partnerText: { fontSize: 14, fontWeight: '500', textAlign: 'center', color: 'black', fontFamily: 'TT-Hoves-Regular' },

  /* MODAL STYLES  */
  modalBackground: { flex: 1, backgroundColor: 'black' },
  closeButton: { position: 'absolute', top: 40, right: 20, zIndex: 10 },
  closeText: { fontSize: 28, color: 'white' },
  fullscreenWrapper: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  fullscreenImage: { width: '100%', height: '80%' },

  topHeaderGradient: { width: '100%', paddingVertical: 20, paddingHorizontal: 15, borderRadius: 10, marginBottom: 20 },
  topHeaderContent: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },

});


export default HomeFunction;
