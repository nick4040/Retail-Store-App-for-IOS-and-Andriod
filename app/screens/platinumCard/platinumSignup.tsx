import Navbar from '../../components/navbar';
import PlatinumLogin from '../../components/platinumCardInfo';
import { useRouter } from 'expo-router';
import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Image, ScrollView  } from 'react-native';

const CreatePlatinumCard = () => {

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
            <PlatinumLogin/>
            <Navbar/>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between'
  },

});

export default CreatePlatinumCard;