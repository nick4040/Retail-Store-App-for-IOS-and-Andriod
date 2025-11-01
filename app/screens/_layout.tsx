
import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="platinumCard"/>
      <Stack.Screen name="goldCard"/>
      <Stack.Screen name="appPartners"/>
      <Stack.Screen name="Home" />
      <Stack.Screen name="Profile" />
      <Stack.Screen name="Vip" />
      <Stack.Screen name="LogoutView"/>
      <Stack.Screen name="resetProfile"/>
      <Stack.Screen name="deleteAccountView"/>
      <Stack.Screen name="passwordReset"/>
      <Stack.Screen name="roleCheck"/>
      <Stack.Screen name="emailForm"/>
      <Stack.Screen name="privacyPolicyScreen"/>
      <Stack.Screen name="termsOfServiceScreen"/>
      <Stack.Screen name="menus"/>
    </Stack>
  );
}