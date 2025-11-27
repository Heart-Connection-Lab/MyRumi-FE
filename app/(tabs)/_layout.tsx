import CurvedBottomBar from "@/components/ui/CurvedBottomBar";
import { AudioModule } from "expo-audio";
import { Tabs } from "expo-router";
import React, { useEffect } from "react";
import { Alert } from "react-native";

export default function TabLayout() {
  // ------------------------
  //  마이크 권한 요청
  // ------------------------
  const requestMicPermission = async () => {
    try {
      const permission = await AudioModule.getRecordingPermissionsAsync();

      // 이미 권한 있음
      if (permission.granted) return;

      // 권한 요청
      const newPermission =
        await AudioModule.requestRecordingPermissionsAsync();

      if (!newPermission.granted) {
        Alert.alert(
          "마이크 권한 필요",
          "루미와 음성 대화를 하시려면 마이크 접근 권한을 허용해주세요.",
          [{ text: "확인" }]
        );
      }
    } catch (err) {
      console.log("권한 요청 오류:", err);
    }
  };

  useEffect(() => {
    requestMicPermission();
  }, []);

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
