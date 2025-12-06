import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#007BFF",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 60,
          paddingBottom: 8,
        },
      }}
    >
      {/* 1. Home (with icon) */}
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={28} color={color} />
          ),
        }}
      />

      {/* 2. My Bookings */}
      <Tabs.Screen
        name="myBookings"
       options={{
          title: "My Bookings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={28} color={color} />
          ),
        }}
      />

      {/* 3. Saved Packages */}
      <Tabs.Screen
        name="savedPackages"
         options={{
          title: "Saved",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={28} color={color} />
          ),
        }}
      />

      {/* 4. Account */}
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
