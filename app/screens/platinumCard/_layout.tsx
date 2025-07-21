import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="platinumDashboard"/>
      <Stack.Screen name="platinumMenu"/>
      <Stack.Screen name="platinumSignup"/>
      <Stack.Screen name="platinumCard"/>
      <Stack.Screen name="accountCreated"/>
      <Stack.Screen name="platinumCardDeal"/>
      <Stack.Screen name="platinumCardNews"/>
    </Stack>
  );
}

