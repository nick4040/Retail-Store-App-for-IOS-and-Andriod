
import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="renewPortal"/>
      <Stack.Screen name="renewPage"/>
      <Stack.Screen name="turningLeafPage"/>
      <Stack.Screen name="turningLeafPortal"/>
      <Stack.Screen name="partnerProfileEdit"/>
      <Stack.Screen name="partnerDiscountCreation"/>
      <Stack.Screen name="partnerDiscountEdit"/>
      <Stack.Screen name="partnerDemoStore"/>
      <Stack.Screen name="stressTest"/>
    </Stack>
  );
}