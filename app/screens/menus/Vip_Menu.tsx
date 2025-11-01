import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Navbar from '../../components/navbar';

const FlashMenu = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/deals/VipSheet.jpg")} // change path to your image
        style={styles.image}
      />
      <Navbar />
    </View>
  );
};

export default FlashMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1f1f", // optional background
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 350,
    height: 500,
    resizeMode: "cover",
    borderRadius: 10, // optional rounded corners
  },
});
