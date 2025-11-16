import { StyleSheet, Text, View } from "react-native";
import ScheduleCard from "./ScheduleCard";

export default function TodaySchedule() {
  return (
    <View style={styles.wrapper}>
      {/* 섹션 타이틀 */}
      <Text style={styles.title}>오늘의 일정</Text>

      <View style={styles.cardBox}>
        <ScheduleCard
          type="money"
          title="은행에서 현금 인출하기"
          subtitle="KB국민은행 삼성점 · 길찾기"
          rightLabel="20분 소요"
          rightSub="이동 시간"
        />

        <ScheduleCard
          type="pill"
          title="저녁 혈압약"
          subtitle="오후 6:00"
          rightLabel="5분 남음"
          rightSub="남은 시간"
        />

        <ScheduleCard
          type="pill"
          title="비타민 D"
          subtitle="오전 11:00"
          rightLabel="2알"
          rightSub="일 수"
        />

        <ScheduleCard
          type="class"
          title="복지관 치매 예방 교실"
          subtitle="오후 1:00 · 완료"
          rightLabel="2시간"
          rightSub="소요 시간"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
    gap: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },

  cardBox: {
    backgroundColor: "#FAFAFA",
    borderRadius: 20,
    padding: 10,
    gap: 0,
    marginTop: 8,
    shadowColor: "#878787",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
});
