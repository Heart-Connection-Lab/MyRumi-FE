import CurvedBottomBar from "@/components/ui/CurvedBottomBar";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: { display: "none" },
          tabBarButton: () => null,
        }}
      >
        <Tabs.Screen name="index" />
        <Tabs.Screen name="analysis" />
        <Tabs.Screen name="chat" />
        <Tabs.Screen name="my" />
      </Tabs>

      <CurvedBottomBar />
    </>
  );
}
