import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import DailyAnalysis from "@/components/analysis/DailyAnalysis";
import WeeklyAnalysis from "@/components/analysis/WeeklyAnalysis";

export default function AnalysisPage() {
  const [tab, setTab] = useState<"daily" | "weekly">("daily");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        {/* ---------- 상단 타이틀 ---------- */}
        <Text style={styles.title}>이번 주 복지를 추천드려요</Text>

        {/* ---------- 탭 버튼 (일 / 주) ---------- */}
        <View style={styles.tabRow}>
          <TouchableOpacity
            style={[styles.tabBtn, tab === "daily" && styles.activeTab]}
            onPress={() => setTab("daily")}
          >
            <Text
              style={[styles.tabText, tab === "daily" && styles.activeTabText]}
            >
              일간
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabBtn, tab === "weekly" && styles.activeTab]}
            onPress={() => setTab("weekly")}
          >
            <Text
              style={[styles.tabText, tab === "weekly" && styles.activeTabText]}
            >
              주간
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

  activeTab: {
    backgroundColor: "#E65B54",
  },

  tabText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#555",
  },

  activeTabText: {
    color: "#fff",
  },

  /* 콘텐츠 영역 */
  contentArea: {
    flex: 1,
  },
});
