import React, { createContext, useState, useEffect, useCallback, FC, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Parse from "parse/react-native";

export type PartnerProfile = {
  objectId: string;
  updatedAt: string;
  createdAt: string;
  partnerId: string;
  name: string;
  description: string;
  companyName: string;
};

type PartnerContextType = {
  partners: PartnerProfile[];
  refreshPartners: () => Promise<void>;
  clearPartners: () => Promise<void>;
};

export const PartnerContext = createContext<PartnerContextType>({
  partners: [],
  refreshPartners: async () => {},
  clearPartners: async () => {},
});

export const PartnerProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [partners, setPartners] = useState<PartnerProfile[]>([]);

  // 🔹 Load cached partners on startup
  useEffect(() => {
    const loadCache = async () => {
      try {
        const cachedData = await AsyncStorage.getItem("partnersCache");
        if (cachedData) {
          setPartners(JSON.parse(cachedData));
        }
      } catch (error) {
        console.error("⚠️ Error loading partners cache:", error);
      }
    };
    loadCache();
  }, []);

  // 🔹 Refresh from Parse backend
  const refreshPartners = useCallback(async () => {
    try {
      const Partner = Parse.Object.extend("Partners");
      const query = new Parse.Query(Partner);
      const results = await query.find();

      const fetchedPartners: PartnerProfile[] = results.map((p) => ({
        objectId: p.id,
        updatedAt: p.updatedAt?.toISOString?.() ?? "",
        createdAt: p.createdAt?.toISOString?.() ?? "",
        partnerId: p.get("partnerId") ?? "",
        name: p.get("Name") ?? "",
        description: p.get("Description") ?? "",
        companyName: p.get("companyName") ?? "",
      }));

      setPartners(fetchedPartners);
      await AsyncStorage.setItem("partnersCache", JSON.stringify(fetchedPartners));
      console.log("✅ Partners refreshed and cached.");
    } catch (error) {
      console.error("⚠️ Error fetching partners:", error);
    }
  }, []);

  // 🔹 Clear partner cache and memory
  const clearPartners = useCallback(async () => {
    try {
      await AsyncStorage.removeItem("partnersCache");
      setPartners([]);
      console.log("🗑️ Partner cache cleared.");
    } catch (error) {
      console.error("⚠️ Error clearing partners cache:", error);
    }
  }, []);

  return (
    <PartnerContext.Provider value={{ partners, refreshPartners, clearPartners }}>
      {children}
    </PartnerContext.Provider>
  );
};

export default PartnerProvider;
