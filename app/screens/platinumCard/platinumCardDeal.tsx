import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import Navbar from '../../components/navbar';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.85;

const PlatinumCardDiscounts: React.FC = () => {

    const [fontsLoaded] = useFonts({
        'Lobster-Regular': require('@/assets/fonts/Lobster-Regular.ttf'),
        'TT-Hoves-Regular': require('@/assets/fonts/TT-Hoves-Regular.ttf'),
    });

    if (!fontsLoaded) {
        <AppLoading />
    }

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Main Discount Header */}
        <View style={styles.headerCard}>
          <Text style={styles.headerTitle}>Platinum Card Discounts</Text>
          <Text style={styles.headerSubtitle}>
            This page will serve as the place to see all available discounts.
          </Text>
        </View>

        {/* Discount List */}
        <View style={styles.discountCard}>
          <Text style={styles.discountText}>
            • Free Claw Machine Play — 2nd Monday each month{'\n\n'}
            • Free Spin Wheel — 1st Monday each month{'\n\n'}
            • 5% Off HUSH & VIP{'\n\n'}
            • Birthday Gift: 1g Pre-Roll or 3.5g KashMakena (3 days before/after){'\n\n'}
            • 30% Off KashMakena — Every Monday (non stackable){'\n\n'}
            • Private Event Access (Greenfield){'\n\n'}
            • Monthly raffle prize drawing
          </Text>
        </View>

        {/* Additional Deals Section */}
        <View style={styles.additionalCard}>
          <Text style={styles.additionalTitle}>Additional Deals</Text>
          <Text href="https://members.club-newport.com/membership/signup?invite=567f7dca-e01a-4021-a4e9-c4f2f41ae95f&referraltype=3" style={styles.additionalText}>
            Click Here to Check out our vacation rental program discounts for card members{'\n\n'}
          </Text>
          <Text style={styles.additionalText}>
            More details on the Greenfield event space coming soon.
          </Text>
        </View>
      </ScrollView>

      {/* Reuse your app's existing navbar */}
      <Navbar />
    </View>
  );
};

export default PlatinumCardDiscounts;

// Styles
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 16,
    paddingBottom: 90, // leaves space for navbar
  },
  headerCard: {
    width: CARD_WIDTH,
    backgroundColor: '#FFC6DB',
    borderRadius: 14,
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
    fontFamily: 'Lobster-Regular',
  },
  headerSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
    lineHeight: 20,
    fontFamily: 'TT-Hoves-Regular',
  },
  discountCard: {
    width: CARD_WIDTH,
    backgroundColor: '#FFC6DB',
    borderRadius: 14,
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  discountText: {
    fontSize: 16,
    lineHeight: 20,
    color: '#000',
    fontFamily: 'TT-Hoves-Regular',
  },
  additionalCard: {
    width: CARD_WIDTH,
    backgroundColor: '#FFC6DB',
    borderRadius: 14,
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  additionalTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'Lobster-Regular',
  },
  additionalText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    lineHeight: 20,
    fontFamily: 'TT-Hoves-Regular',
  },
});
