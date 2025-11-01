// CheckPartnerRole.tsx
import React, { FC, ReactElement, useEffect, useContext, useState } from "react";
import { Alert, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "../UserContext";
import { useFonts } from "expo-font";

export const CheckPartnerRole: FC<{}> = (): ReactElement => {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);
  const [currentRole, setCurrentRole] = useState<string | null>(null);

  const [fontsLoaded] = useFonts({
    "Lobster-Regular": require("@/assets/fonts/Lobster-Regular.ttf"),
    "TT-Hoves-Regular": require("@/assets/fonts/TT-Hoves-Regular.ttf"),
  });

  useEffect(() => {
    const doCheckPartnerRole = async (): Promise<void> => {
      try {
        let cachedUser = user;

        if (!cachedUser) {
          const stored = await AsyncStorage.getItem("userProfile");
          if (stored) {
            cachedUser = JSON.parse(stored);
            setUser(cachedUser);
          }
        }

        if (!cachedUser) {
          console.error("Error", "No logged-in user found in cache.");
          setTimeout(() => {
            router.replace("/errorSignOut");
          }, 0);
          return;
        }

        setCurrentRole(cachedUser.role);
      } catch (error) {
        console.error("Error checking user role:", error);
        Alert.alert("Error", "An error occurred while checking the user role.");
        setTimeout(() => {
          router.replace("/errorSignOut");
        }, 0);
      }
    };

    doCheckPartnerRole();
  }, []);

  if (!fontsLoaded) {
    return <></>;
  }

  if (currentRole === "renew") {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={styles.pinkButton}
          onPress={() => router.push("screens/appPartners/renewPortal")}
        >
          <Text style={styles.buttonText}>Go to Renew Portal</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (currentRole === "turningleaf") {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={styles.pinkButton}
          onPress={() => router.push("screens/appPartners/turningLeafPortal")}
        >
          <Text style={styles.buttonText}>Go to Turning Leaf Portal</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return <></>;
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    alignItems: "center",
  },
  pinkButton: {
    backgroundColor: "#ff66a2",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    marginTop: 300,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "TT-Hoves-Regular",
  },
});

export default CheckPartnerRole;
