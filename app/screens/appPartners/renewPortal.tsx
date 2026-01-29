// app/screens/RenewPortal.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import Navbar from "../../components/navbar";
import GetName from "../../components/roleComponents/getName";
import RenewRoleCheck from '../../components/roleComponents/renewRoleCheck';

export default function RenewPortal() {
  const router = useRouter();

  return (
    <View style={styles.container}>
    <RenewRoleCheck/>
      {/* Header Section: Welcome + Logo */}
      <View style={styles.headerRow}>
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>
            Welcome back
          </Text>
          <GetName/>
          <Text style={styles.portalText}>To The Renew Portal</Text>
        </View>

        <Image
          source={require("@/assets/images/partners/renewPartner.png")}
          style={styles.logo}
          resizeMode="cover"
        />
      </View>

      {/* Grid Menu */}
      <View style={styles.grid}>
        <TouchableOpacity
          style={styles.tile}
          onPress={() => router.push("screens/appPartners/partnerDiscountCreation")}
        >
          <Image
            source={require("@/assets/images/partners/deals.png")}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.tileText}>Add a Discount</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tile}
          onPress={() => router.push("screens/appPartners/partnerDiscountEdit")}
        >
          <Image
            source={require("@/assets/images/partners/flyerIcon.png")}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.tileText}>Edit Discounts</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tile}
          onPress={() => router.push("screens/appPartners/partnerProfileEdit")}
        >
          <Image
            source={require("@/assets/images/partners/profile.png")}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.tileText}>Change Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tile}
          onPress={() => alert("New feature coming soon!")}
        >
          <Image
            source={require("@/assets/images/partners/feature.png")}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.tileText}>New Feature{"\n"}Coming Soon</Text>
        </TouchableOpacity>
      </View>

      {/* Reusable Navbar */}
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1f1f1f",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 50,
  },
  textContainer: {
    flexShrink: 1,
  },
  welcomeText: {
    fontSize: 14,
    color: "white",
  },
  nameText: {
    color: "#E75480",
    fontWeight: "600",
  },
  portalText: {
    fontSize: 14,
    color: "white",
    marginTop: 2,
  },
  logo: {
    width: 175,
    height: 80,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 40,
    marginBottom: 304,
  },
  tile: {
    alignItems: "center",
    marginVertical: 15,
  },
  icon: {
    width: 90, // bigger image
    height: 90, // bigger image
    marginBottom: 10,
  },
  tileText: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
});
