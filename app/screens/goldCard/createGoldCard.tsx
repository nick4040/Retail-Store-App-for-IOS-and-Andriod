import { View, Text, StyleSheet, Button, Image, SafeAreaView  } from 'react-native';
import React, { useState } from "react";
import Navbar from '../../components/navbar';
import GoldLogin from '../../components/goldCardInfo';
import { useRouter } from 'expo-router';

const CreateGoldCard = () => {
    const router = useRouter();

  return (
      <SafeAreaView style={styles.container}>
        <>
            <GoldLogin/>
        </>
        <View>

        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#1f1f1f",
      alignItems: "center",
      justifyContent: "center",
    },
});

export default CreateGoldCard;