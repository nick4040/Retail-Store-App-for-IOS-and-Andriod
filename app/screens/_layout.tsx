
import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Home" />
      <Stack.Screen name="Profile" />
      <Stack.Screen name="GoldCard" />
      <Stack.Screen name="Vip" />
      <Stack.Screen name="LogoutView"/>
    </Stack>
  );
}