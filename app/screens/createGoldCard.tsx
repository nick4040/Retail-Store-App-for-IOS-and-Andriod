import { View, Text, StyleSheet, Button, Image, ScrollView  } from 'react-native';
import React, { useState } from "react";
import Navbar from '../components/navbar';
import GoldLogin from '../components/goldCardInfo';
import { useRouter } from 'expo-router';

const CreateGoldCard = () => {
    const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
            <GoldLogin/>
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

});

export default CreateGoldCard;