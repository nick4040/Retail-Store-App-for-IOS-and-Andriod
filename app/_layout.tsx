import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="screens"/>
      <Stack.Screen name="signUp"/>
      <Stack.Screen name="accountCreated"/>
    </Stack>
  );
}

