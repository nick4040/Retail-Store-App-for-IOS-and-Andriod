import React, { FC, ReactElement, useState, useContext } from "react";
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Platform,
} from "react-native";
import { UserContext } from "./UserContext";
import { PartnerContext } from "./partnerComponents/PartnerContext";
import Parse from "./parseInit";
import { Link, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Test = () => {
  return (
      <View style={styles.innerContainer}>
        <Text>This is a test</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    width: "100%",
  },
});

export default Test;
