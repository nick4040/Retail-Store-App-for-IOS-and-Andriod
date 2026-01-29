import React, { FC, useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import Parse from "../parseInit";

type Discount = {
  id: string;
  title: string;
  description: string;
  products: string;
  qrPayload: string; // string inside QR
  qrCode: string; // picture of the QR code
  companyId: string;
};

type DiscountListProps = {
  companyId?: string;
};

const DiscountList: FC<DiscountListProps> = ({ companyId = "renew" }) => {
  const [discounts, setDiscounts] = useState<Discount[]>([]);

  useEffect(() => {
    const fetchDiscounts = async () => {
      try {
        // fetch all discounts for this company
        const Discount = Parse.Object.extend("Discounts");
        const query = new Parse.Query(Discount);
        query.equalTo("companyId", companyId);
        query.equalTo("isActive", true)
        const results = await query.find();



        const parsed = results.map((d) => ({
          id: d.id,
          title: d.get("title"),
          description: d.get("Description"),
          products: d.get("products"),
          qrPayload: d.get("qrPayload"), // string value
          qrCodeUrl: d.get("qrCode")?.url() || "", // file stored in Parse
          companyId: d.get("companyId"),
        }));

        // fetch discount history for current user
        const DiscountHistory = Parse.Object.extend("DiscountHistory");
        const historyQuery = new Parse.Query(DiscountHistory);
        historyQuery.equalTo("discountUser", Parse.User.current());
        const historyResults = await historyQuery.find();

        // grab qrCodes already used
        const usedCodes = historyResults.map((h) => h.get("qrCode"));

        // filter out any discount where qrPayload is already in history
        const available = parsed.filter((d) => !usedCodes.includes(d.qrPayload));

        setDiscounts(available);
      } catch (err) {
        console.error("Error fetching discounts:", err);
      }
    };

    fetchDiscounts();
  }, [companyId]);

  const renderItem = ({ item }: { item: Discount }) => {

    return (
      <View style={styles.card}>
        {/* show the stored QR code image */}
        {item.qrCodeUrl ? (
          <Image
            source={{ uri: item.qrCodeUrl }}
            style={styles.qrImage}
            resizeMode="contain"
          />
        ) : (
          <Text>No QR Code Image</Text>
        )}
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.description}>{item.products}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={discounts}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
      scrollEnabled={false}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  card: {
    backgroundColor: "#ff66a2",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  qrImage: {
    width: 150,
    height: 150,
  },
  title: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    fontFamily: "TT-Hoves-Regular",
  },
  description: {
    marginTop: 6,
    fontSize: 16,
    color: "white",
    textAlign: "center",
    fontFamily: "TT-Hoves-Regular",
  },
});

export default DiscountList;
