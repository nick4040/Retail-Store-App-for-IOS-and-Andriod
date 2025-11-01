import { Stack } from "expo-router";
import { PartnerProvider } from "./components/partnerComponents/PartnerContext";
import { UserProvider } from "./components/UserContext"; // if you already have this

export default function RootLayout() {
  return (
    <UserProvider>
      <PartnerProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="screens" />
          <Stack.Screen name="signUp" />
          <Stack.Screen name="accountCreated" />
          <Stack.Screen name="privacyPolicy" />
          <Stack.Screen name="termsOfService" />
          <Stack.Screen name="defaultPasswordReset" />
        </Stack>
      </PartnerProvider>
    </UserProvider>
  );
}
