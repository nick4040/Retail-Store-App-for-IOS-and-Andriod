import { View, Text, StyleSheet, Button, Image, ScrollView, TouchableOpacity  } from 'react-native';
import React, { useState } from "react";
import Navbar from '../components/navbar';
import { useRouter } from 'expo-router';

const GoldCard = () => {
    const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
            <Image source={require('@/assets/images/goldCardLogo.png')} style={styles.logo}/>
              <View style={styles.middleSection}>
                <Text style={styles.textTitle}>Gold Program</Text>
                  <TouchableOpacity onPress={() => router.push("screens/createGoldCard")}>
                    <Text>Create Your Gold Card Account</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => router.push("screens/goldLogin")}>
                    <Text>Login to your goldCard</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => router.push("screens/platinumCard/platinumSignup")}>
                    <Text>Create your Platinum Card</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => router.push("screens/platinumCard/platinumLogin")}>
                    <Text>Login to your Platinum Card</Text>
                  </TouchableOpacity>
                <Text style={styles.textEnd}>Click here to view more information</Text>
              </View>
              <View style={styles.middleSection}>
                <Text style={styles.textTitle}>Vip Program</Text>
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
      middleSection: {
        flex: 3,
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
        textAlign: 'center',
        top: 10,
        position: 'absolute',
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
});

export default GoldCard;