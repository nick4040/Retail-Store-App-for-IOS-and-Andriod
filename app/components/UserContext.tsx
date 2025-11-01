import React, { createContext, useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Parse from "parse/react-native";

export type UserProfile = {
  id: string;
  username: string;
  email: string;
  fname?: string;
  lname?: string;
  phoneNumber?: string;
  age?: number;
  role?: string;
  qrPayload?: string | null;
  qrCode?: string | null;
};

type UserContextType = {
  user: UserProfile | null;
  setUser: (user: UserProfile | null) => Promise<void>;
  refreshUser: () => Promise<void>;
  clearUser: () => Promise<void>;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: async () => {},
  refreshUser: async () => {},
  clearUser: async () => {},
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUserState] = useState<UserProfile | null>(null);

  // Load cached user on startup
  useEffect(() => {
    const loadUser = async () => {
      try {
        const cached = await AsyncStorage.getItem("userProfile");
        if (cached) {
          setUserState(JSON.parse(cached));
        }
      } catch (err) {
        console.error("⚠️ Error loading cached user:", err);
      }
    };
    loadUser();
  }, []);

  /**
   * Save user to state + AsyncStorage
   */
  const setUser = useCallback(async (newUser: UserProfile | null) => {
    try {
      if (newUser) {
        await AsyncStorage.setItem("userProfile", JSON.stringify(newUser));
        console.log("✅ User saved to cache:", newUser);
      } else {
        await AsyncStorage.removeItem("userProfile");
      }
      setUserState(newUser);
    } catch (err) {
      console.error("⚠️ Error saving user:", err);
    }
  }, []);

  /**
   * Clears user data completely
   */
  const clearUser = useCallback(async () => {
    try {
      await AsyncStorage.removeItem("userProfile");
      setUserState(null);
    } catch (err) {
      console.error("⚠️ Error clearing user:", err);
    }
  }, []);

  /**
   * Refresh user from Parse backend (EXCLUDES qrCode & qrPayload since they never change)
   */
  const refreshUser = useCallback(async () => {
    try {
      const currentUser = Parse.User.current();
      if (!currentUser) return;

      await currentUser.fetch();

      const refreshedUser: UserProfile = {
        id: currentUser.id,
        username: currentUser.get("username"),
        email: currentUser.get("email"),
        fname: currentUser.get("fname"),
        lname: currentUser.get("lname"),
        phoneNumber: currentUser.get("phoneNumber"),
        age: currentUser.get("age"),
        role: currentUser.get("role"),
      };

      // ✅ Keep QR data from cache
      const cached = await AsyncStorage.getItem("userProfile");
      if (cached) {
        const parsed = JSON.parse(cached);
        refreshedUser.qrPayload = parsed.qrPayload;
        refreshedUser.qrCode = parsed.qrCode;
      }

      await setUser(refreshedUser);
    } catch (err) {
      console.error("⚠️ Error refreshing user:", err);
    }
  }, [setUser]);

  return (
    <UserContext.Provider value={{ user, setUser, refreshUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
