import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Flash_menu"/>
      <Stack.Screen name="Hush_Menu"/>
      <Stack.Screen name="Monthly_Menu"/>
      <Stack.Screen name="Stomi_Menu"/>
      <Stack.Screen name="Vip_Menu"/>
    </Stack>
  );
}