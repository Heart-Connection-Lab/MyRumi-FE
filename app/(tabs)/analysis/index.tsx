import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import WeeklyWalfare from "@/components/anaylysis/WeeklyWalfare";
import WelfareCarousel from "@/components/anaylysis/WelfareCarousel";
import DailyAnalysis from "./DailtyAnalysis";
import WeeklyAnalysis from "./WeeklyAnalysis";

export default function AnalysisPage() {
  const [tab, setTab] = useState<"daily" | "weekly">("daily");

  return (
    <SafeAreaView style={styles.container}>
      {/* 전체 스크롤 영역 */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ---------- 상단 타이틀 ---------- */}
        <View style={styles.section}>
          <WelfareCarousel />
        </View>

        {/* ---------- 탭 버튼 (일 / 주) ---------- */}
        <View style={styles.tabWrapper}>
          <TouchableOpacity
            style={[styles.tabItem, tab === "daily" && styles.activeTabItem]}
            onPress={() => setTab("daily")}
          >
            <Text
              style={[styles.tabText, tab === "daily" && styles.activeTabText]}
            >
              일
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabItem, tab === "weekly" && styles.activeTabItem]}
            onPress={() => setTab("weekly")}
          >
            <Text
              style={[styles.tabText, tab === "weekly" && styles.activeTabText]}
            >
              주
            </Text>
          </TouchableOpacity>
        </View>

        {/* ---------- 콘텐츠 ---------- */}
        <View style={{ paddingBottom: 40 }}>
          {tab === "daily" ? <DailyAnalysis /> : <WeeklyAnalysis />}
        </View>
        <WeeklyWalfare />
      </ScrollView>
    </SafeAreaView>
  );
}

/* -------------------- Styles -------------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },

  /* ScrollView 내부 패딩 */
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  section: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },

  /* 탭 외곽 컨테이너 (회색 배경) */
  tabWrapper: {
    flexDirection: "row",
    backgroundColor: "#EDEDED",
    borderRadius: 20,
    padding: 4,
    marginTop: 16,
    marginBottom: 20,
  },

  tabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 16,
  },

  activeTabItem: {
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(0,0,0,0.08)",
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },

  tabText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#888",
  },

  activeTabText: {
    color: "#000",
    fontWeight: "700",
  },
});
