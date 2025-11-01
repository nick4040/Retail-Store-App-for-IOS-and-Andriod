import React, { useState } from "react";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
import Parse from "parse/react-native";

export default function DiscountsStressTest() {
  const [logs, setLogs] = useState<string[]>([]);
  const [isTesting, setIsTesting] = useState(false);

  const addLog = (message: string) => {
    setLogs((prev) => [...prev, message]);
    console.log(message);
  };

  const runStressTest = async () => {
    setLogs([]);
    setIsTesting(true);
    addLog("🚀 Starting 60 sequential requests to Discounts class...");

    const Discount = Parse.Object.extend("Discounts");
    const query = new Parse.Query(Discount);

    for (let i = 1; i <= 60; i++) {
      try {
        addLog("🔹 Request ${i} started...");
        const results = await query.find();
        addLog("✅ Request ${i} success — got ${results.length} records");
      } catch (error: any) {
        addLog("❌ Request ${i} failed: ${error.message || error}");
      }

      // Small delay to avoid hammering too fast (optional)
      await new Promise((res) => setTimeout(res, 300));
    }

    addLog("🏁 Test complete!");
    setIsTesting(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Discounts Stress Test</Text>
      <Button
        title={isTesting ? "Testing..." : "Start 40 Requests"}
        onPress={runStressTest}
        disabled={isTesting}
      />

      <ScrollView style={styles.logBox}>
        {logs.map((line, index) => (
          <Text key={index} style={styles.logText}>
            {line}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  logBox: {
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    maxHeight: 600,
  },
  logText: {
    fontFamily: "monospace",
    fontSize: 12,
    marginVertical: 2,
  },
});
