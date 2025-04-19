
import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="platinumCard"/>
      <Stack.Screen name="Home" />
      <Stack.Screen name="Profile" />
      <Stack.Screen name="GoldCard" />
      <Stack.Screen name="Vip" />
      <Stack.Screen name="LogoutView"/>
      <Stack.Screen name="resetProfile"/>
      <Stack.Screen name="deleteAccountView"/>
      <Stack.Screen name="createGoldCard"/>
      <Stack.Screen name="goldDashboard"/>
      <Stack.Screen name="goldmenu"/>
      <Stack.Screen name="passwordReset"/>
    </Stack>
  );
}