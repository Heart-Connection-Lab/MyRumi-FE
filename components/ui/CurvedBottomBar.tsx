import { useRouter, useSegments } from "expo-router";
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";

// 아이콘
import Mic from "@/assets/images/mic_default.svg";
import MicPressed from "@/assets/images/mic_pressed.svg";

import Home from "@/assets/images/home.svg";
import HomePressed from "@/assets/images/home_pressed.svg";

import Analysis from "@/assets/images/analysis.svg";
import AnalysisPressed from "@/assets/images/analysis_pressed.svg";

import Chat from "@/assets/images/chat.svg";
import ChatPressed from "@/assets/images/chat_pressed.svg";

import My from "@/assets/images/my.svg";
import MyPressed from "@/assets/images/my_pressed.svg";
import { useState } from "react";

export default function CurvedBottomBar() {
  const router = useRouter();
  const segments = useSegments();
  const current = segments[segments.length - 1]; // index | analysis | chat | my
  const [isMicActive, setIsMicActive] = useState(false);

  const tabs = [
    {
      name: "index",
      label: "홈",
      route: "/(tabs)",
      activeIcon: HomePressed,
      inactiveIcon: Home,
    },
    {
      name: "analysis",
      label: "분석",
      route: "/(tabs)/analysis",
      activeIcon: AnalysisPressed,
      inactiveIcon: Analysis,
    },
    {
      name: "chat",
      label: "대화",
      route: "/(tabs)/chat",
      activeIcon: ChatPressed,
      inactiveIcon: Chat,
    },
    {
      name: "my",
      label: "마이",
      route: "/(tabs)/my",
      activeIcon: MyPressed,
      inactiveIcon: My,
    },
  ];

  return (
    <View style={styles.container}>
      {/* 곡선 Background */}
      <View style={styles.svgBackground}>
        <Svg
          width="100%"
          height="90"
          viewBox="0 0 393 90"
          preserveAspectRatio="none"
        >
          <Path
            d="M367 0C381.359 0 393 11.6406 393 26V64C393 78.3594 381.359 90 367 90H26C11.6406 90 0 78.3594 0 64V26C0 11.6406 11.6406 0 26 0H110.101C130.374 0 150.156 10.3498 162.146 29.9978C166.114 36.497 171.291 41.7794 177.258 45.4197C183.225 49.06 189.816 50.9565 196.5 50.9565C203.184 50.9565 209.775 49.06 215.742 45.4197C221.709 41.7794 226.886 36.497 230.854 29.9978C242.844 10.3485 262.625 0 282.899 0H367Z"
            fill="white"
          />
        </Svg>
      </View>

      <Pressable
        style={styles.micButton}
        onPress={() => setIsMicActive(!isMicActive)}
      >
        {isMicActive ? (
          <MicPressed width={90} height={90} />
        ) : (
          <Mic width={90} height={90} />
        )}
      </Pressable>

      {/* 탭 아이콘들 */}
      <View style={styles.tabRow}>
        {/* LEFT GROUP */}
        <View style={styles.leftGroup}>
          {tabs.slice(0, 2).map((tab) => {
            const ActiveIcon = tab.activeIcon;
            const InactiveIcon = tab.inactiveIcon;

            // 🔥 Home(index) 활성화 조건 따로 처리!
            const isActive =
              tab.name === "index"
                ? current === "(tabs)" // 홈인 경우
                : current === tab.name; // 일반 탭

            return (
              <TouchableOpacity
                key={tab.name}
                style={styles.tabItem}
                onPress={() => router.replace(tab.route)}
                activeOpacity={0.8}
              >
                {isActive ? (
                  <ActiveIcon width={22} height={22} />
                ) : (
                  <InactiveIcon width={22} height={22} />
                )}
                <Text
                  style={{
                    marginTop: 4,
                    fontSize: 12,
                    fontWeight: isActive ? "700" : "500",
                    color: isActive ? "#000" : "#C0C0C0",
                  }}
                >
                  {tab.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* RIGHT GROUP */}
        <View style={styles.rightGroup}>
          {tabs.slice(2, 4).map((tab) => {
            const ActiveIcon = tab.activeIcon;
            const InactiveIcon = tab.inactiveIcon;

            const isActive =
              tab.name === "index"
                ? current === "(tabs)"
                : current === tab.name;
            return (
              <TouchableOpacity
                key={tab.name}
                style={styles.tabItem}
                onPress={() => router.replace(tab.route)}
                activeOpacity={0.8}
              >
                {isActive ? (
                  <ActiveIcon width={22} height={22} />
                ) : (
                  <InactiveIcon width={22} height={22} />
                )}
                <Text
                  style={{
                    marginTop: 4,
                    fontSize: 12,
                    fontWeight: isActive ? "700" : "500",
                    color: isActive ? "#000" : "#C0C0C0",
                  }}
                >
                  {tab.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}

// ---------------------- STYLE ------------------------

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
    paddingBottom: Platform.OS === "ios" ? 24 : 10,
  },
  svgBackground: {
    width: "100%",
    height: 90,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: -2 },
    elevation: 4,
  },
  micButton: {
    position: "absolute",
    top: -26,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#E64A45",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#E64A45",
    shadowOpacity: 0.45,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
  },
  tabRow: {
    position: "absolute",
    bottom: 18,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 36,
    paddingBottom: 20,
    paddingTop: 10,
    alignItems: "center",
  },

  leftGroup: {
    flexDirection: "row",
    gap: 20,
  },

  rightGroup: {
    flexDirection: "row",
    gap: 20,
  },

  tabItem: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 48,
  },
});
