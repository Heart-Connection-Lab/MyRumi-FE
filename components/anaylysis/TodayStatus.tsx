import EmotionSummaryCard from "@/components/anaylysis/EmotionSummaryCard";
import { StyleSheet, Text, View } from "react-native";
import StatCard from "./StatCard";

export default function TodayStatus() {
  return (
    <View style={styles.wrapper}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>오늘 상태 요약</Text>
        <Text style={styles.dateText}>2025.11.16 17:30 기준</Text>
      </View>

      {/* 회색 카드 전체 영역 */}
      <View style={styles.grayBox}>
        <View style={styles.statRow}>
          <StatCard icon="steps" value="2,450" label="걸음 수" />
          <StatCard icon="chat" value="12" label="대화 수" />
          <StatCard icon="family" value="3" label="가족 연결 수" />
        </View>

        <EmotionSummaryCard
          type="bright"
          tags={["고마워", "재밌었어", "행복해"]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    // paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 16,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },

  dateText: {
    fontSize: 12,
    color: "#999",
  },

  grayBox: {
    backgroundColor: "#F4F4F4",
    borderRadius: 20,
    padding: 10,
    gap: 16,
  },

  statRow: {
    flexDirection: "row",
    gap: 10,
  },
});
