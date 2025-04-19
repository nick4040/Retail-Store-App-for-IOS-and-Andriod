import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="platinumDashboard"/>
      <Stack.Screen name="platinumLogin"/>
      <Stack.Screen name="platinumMenu"/>
      <Stack.Screen name="platinumReset"/>
      <Stack.Screen name="platinumSignup"/>
    </Stack>
  );
}

