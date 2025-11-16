import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import WelfareCarousel from "@/components/anaylysis/WelfareCarousel";
import DailyAnalysis from "./DailtyAnalysis";
import WeeklyAnalysis from "./WeeklyAnalysis";

export default function AnalysisPage() {
  const [tab, setTab] = useState<"daily" | "weekly">("daily");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
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
        <View style={styles.contentArea}>
          {tab === "daily" ? <DailyAnalysis /> : <WeeklyAnalysis />}
        </View>
      </View>
    </SafeAreaView>
  );
}

/* -------------------- Styles -------------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },

  inner: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  section: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
    marginBottom: 20,
  },

  /* 탭 */
  tabRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 20,
  },

  tabBtn: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#EAEAEA",
  },

  activeTabText: {
    color: "#fff",
  },

  /* 콘텐츠 영역 */
  contentArea: {
    flex: 1,
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

  /* 탭 버튼 (기본 — 투명) */
  tabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 16,
  },

  /* 선택된 탭 */
  activeTabItem: {
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(0,0,0,0.08)",
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },

  /* 탭 텍스트 */
  tabText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#888",
  },

  /* 선택된 탭 텍스트 */
  activeTabText: {
    color: "#000",
    fontWeight: "700",
  },
});
