import React, { FC, ReactElement, useEffect, useContext } from "react";
import { Alert } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "../UserContext";

export const CheckRole: FC<{}> = (): ReactElement => {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const doCheckRole = async (): Promise<void> => {
      try {
        // Try cache first
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

        let currentRole = cachedUser.role;

        // If no role, assign "Vip" locally
        if (!currentRole) {
          currentRole = "vip";
          const updatedUser = { ...cachedUser, role: currentRole };

          setUser(updatedUser);
          await AsyncStorage.setItem("userProfile", JSON.stringify(updatedUser));

          Alert.alert("Success", "You are now a Vip member!");
        }

        // Navigate based on cached role
        if (currentRole === "vip") {
          router.push("screens/Vip");
        } else if (currentRole === "platinum") {
          router.push("screens/platinumCard/platinumCard");
        } else if (currentRole === "gold") {
          router.push("screens/goldCard/GoldCard");
        } else if (currentRole === "renew") {
            router.push("screens/Vip");
        } else {
          console.error("Error", "Invalid role found.");
          setTimeout(() => {
            router.replace("/errorSignOut");
          }, 0);
        }
      } catch (error) {
        console.error("Error checking user role:", error);
        Alert.alert("Error", "An error occurred while checking the user role.");
        setTimeout(() => {
          router.replace("/errorSignOut");
        }, 0);
      }
    };

    doCheckRole();
  }, []);

  return <></>; // Empty component since navigation happens immediately
};

export default CheckRole;

