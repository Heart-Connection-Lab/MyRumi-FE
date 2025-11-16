import ChatIcon from "@/assets/images/stat_chat.svg";
import PhoneIcon from "@/assets/images/stat_phone.svg";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import WeeklyEmotion from "./WeeklyEmotion";
import WeeklyStatCard from "./WeeklyStatCard";
import WeeklyWalk from "./WeeklyWalk";

export default function WeeklyStatus() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>이번 주 상태 요약</Text>
        <Text style={styles.sub}>최근 7일간</Text>
      </View>

      {/* 걸음 수 그래프 */}
      <WeeklyWalk />

      {/* 두 개의 카드 */}
      <View style={styles.statRow}>
        <WeeklyStatCard
          icon={ChatIcon}
          value="40"
          diff="-0.5%"
          diffType="down"
          title="루미와 하루"
          description="평균 5.7회 대화해요"
        />

        <WeeklyStatCard
          icon={PhoneIcon}
          value="12"
          diff="+2.3%"
          diffType="up"
          title="가족과 하루"
          description="평균 1.7회 통화해요"
        />
      </View>

      {/* 감정 요약 */}
      <WeeklyEmotion />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },
  sub: {
    fontSize: 12,
    color: "#AAA",
  },
  statRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 10,
  },
});
