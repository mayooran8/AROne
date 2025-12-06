import { Stack } from 'expo-router';

export default function ExploreLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="explore1" />
      <Stack.Screen name="explore2" />
    </Stack>
  );
}
