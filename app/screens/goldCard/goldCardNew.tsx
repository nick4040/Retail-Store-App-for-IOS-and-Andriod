import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import Navbar from '../../components/navbar';

const NEWS_ITEMS = [
  '7/04/25: the start of the annual gold and platinum cards begin  the old cards expire 7/21/25',
  '7/04/25: the start of the annual gold and platinum cards begin  the old cards expire 7/21/25',
  '7/04/25: the start of the annual gold and platinum cards begin  the old cards expire 7/21/25',
  '7/04/25: the start of the annual gold and platinum cards begin  the old cards expire 7/21/25',
  '7/04/25: the start of the annual gold and platinum cards begin  the old cards expire 7/21/25',
];

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.85;

const GoldCardNews: React.FC = () => {

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
        {/* Header Box */}
        <View style={styles.headerCard}>
          <Text style={styles.headerTitle}>Gold Card News</Text>
          <Text style={styles.headerSubtitle}>
            Stay up to date on new deals and changes{'\n'}to your gold card
          </Text>
        </View>

        {/* News Items */}
        {NEWS_ITEMS.map((text, idx) => (
          <View key={idx} style={styles.newsCard}>
            <Text style={styles.newsText}>{text}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Reusing your existing navbar */}
      <Navbar />
    </View>
  );
};

export default GoldCardNews;

// Styles
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#1f1f1f',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 16,
    paddingBottom: 90, // Leave space for navbar
  },
  headerCard: {
    width: CARD_WIDTH,
    backgroundColor: '#ff66a2',
    borderRadius: 14,
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 6,
    fontFamily: 'Lobster-Regular',
  },
  headerSubtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#000',
    lineHeight: 20,
    fontFamily: 'TT-Hoves-Regular',
  },
  newsCard: {
    width: CARD_WIDTH,
    backgroundColor: '#ff66a2',
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  newsText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#000',
    lineHeight: 20,
    fontFamily: 'TT-Hoves-Regular',
  },
});
