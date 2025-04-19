import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const Countdown: React.FC = () => {
  const [daysRemaining, setDaysRemaining] = useState<number>(0);

  useEffect(() => {
    const calculateDays = () => {
      const today: Date = new Date();
      const year: number = today.getFullYear();
      let targetDate: Date = new Date(year, 5, 25); // June 25 (Months are 0-based)

      // If June 25 has already passed, set it for next year
      if (today > targetDate) {
        targetDate = new Date(year + 1, 5, 25);
      }

      const difference: number = Math.ceil((targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      setDaysRemaining(difference);
    };

    calculateDays();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Days until June 25th: {daysRemaining}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default Countdown;
