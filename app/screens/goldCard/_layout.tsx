import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="createGoldCard"/>
      <Stack.Screen name="GoldCard"/>
      <Stack.Screen name="goldDashboard"/>
      <Stack.Screen name="goldmenu"/>
      <Stack.Screen name="accountCreated"/>
      <Stack.Screen name="goldCardNew"/>
      <Stack.Screen name="goldCardDeal"/>
    </Stack>
  );
}