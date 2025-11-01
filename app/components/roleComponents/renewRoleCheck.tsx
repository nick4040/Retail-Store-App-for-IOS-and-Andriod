import React, { FC, ReactElement, useEffect, useContext, useRef } from "react";
import { Alert } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "../UserContext";

type RenewRoleCheckProps = {
  vipRoute?: string;
  errorRoute?: string;
};

const RenewRoleCheck: FC<RenewRoleCheckProps> = ({
  vipRoute = "/screens/Vip",
  errorRoute = "/errorSignOut",
}): ReactElement => {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);
  const hasChecked = useRef(false); // Prevents re-runs

  useEffect(() => {
    const checkUserRole = async (): Promise<void> => {
      if (hasChecked.current) return;
      hasChecked.current = true;

      try {
        // Get user from context or AsyncStorage
        let cachedUser = user ?? null;

        if (!cachedUser) {
          const stored = await AsyncStorage.getItem("userProfile");
          if (stored) {
            cachedUser = JSON.parse(stored);
          }
        }

        // If no user found, sign them out
        if (!cachedUser) {
          console.warn("No logged-in user found. Redirecting to sign-out...");
          router.replace(errorRoute);
          return;
        }

        let currentRole = cachedUser.role;

        // If no role, assign VIP and redirect
        if (!currentRole) {
          currentRole = "vip";
          const updatedUser = { ...cachedUser, role: currentRole };
          await AsyncStorage.setItem("userProfile", JSON.stringify(updatedUser));
          setUser(updatedUser);
          Alert.alert("Welcome!", "You are now a VIP member!");
          router.replace(vipRoute);
          return;
        }

        // Handle known roles
        if (currentRole === "vip") {
            router.replace(vipRoute);
        } else if (currentRole === "renew") {
            // Stay on current page — no redirect
            console.log("User is a renew member — staying on current page.");
        } else if (currentRole === "turningleaf") {
            // Stay on current page — no redirect
            console.log("User is a Turning Leaf — staying on current page.");
        } else {
            // Unknown role — redirect to error
            console.warn("Unknown role detected:", currentRole);
            router.replace(errorRoute);
        }
      } catch (error) {
        console.error("Error checking user role:", error);
        Alert.alert("Error", "An error occurred while checking your role.");
        router.replace(errorRoute);
      }
    };

    checkUserRole();
  }, []); // ✅ Only runs once

  return null;
};

export default RenewRoleCheck;
