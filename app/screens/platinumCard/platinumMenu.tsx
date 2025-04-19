import { View, Text, StyleSheet, Button, Image, ScrollView  } from 'react-native';
import React, { useState } from "react";
import Navbar from '../../components/navbar';


const dashboardFunction = () => {
  return (
    <View style={{ flex: 1 }}>
        <Text>Vip</Text>
        <Navbar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default dashboardFunction;
