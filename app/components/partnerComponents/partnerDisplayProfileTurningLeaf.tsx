import React, { FC, ReactElement, useContext, useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { PartnerContext } from "./PartnerContext";

const TurningLeafPartnerDisplay: FC = (): ReactElement => {
  const { partners } = useContext(PartnerContext);

  // Find newest partner where companyName = "turningLeaf"
  const newestRenewPartner = useMemo(() => {
    const turningLeafPartners = partners.filter(
      (p) => p.companyName?.toLowerCase() === "turningleaf"
    );
    if (turningLeafPartners.length === 0) return null;

    // sort by createdAt (newest first)
    return turningLeafPartners.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )[0];
  }, [partners]);

  if (!newestRenewPartner) {
    return (
      <View style={styles.container}>
        <Text style={styles.placeholder}>
          No Partner profile found with companyName = turningLeaf.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{newestRenewPartner.name}</Text>
      <Text style={styles.description}>{newestRenewPartner.description}</Text>
    </View>
  );
};

export default TurningLeafPartnerDisplay;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: "#ff66a2",
    margin: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 8,
    color: "black",
    textAlign: "center",
    fontFamily: 'Lobster-Regular',
  },
  description: {
    fontSize: 20,
    color: "black",
    textAlign: "center", 
    fontFamily: 'TT-Hoves-Regular',
  },
  placeholder: {
    fontSize: 16,
    color: "black",
    fontStyle: "italic",
    textAlign: "center", 
    fontFamily: 'TT-Hoves-Regular',
  },
});
