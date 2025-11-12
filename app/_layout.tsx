import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* 스플래시 화면 (앱 첫 진입점) */}
        <Stack.Screen name="entry" />
        <Stack.Screen name="splash" />

        {/* 로그인 / 회원가입 관련 */}
        <Stack.Screen name="(auth)/login" />

        {/* 메인 탭 (로그인 이후 진입) */}
        <Stack.Screen name="(tabs)" />

        {/* 기타 모달 */}
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
