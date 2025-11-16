import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../SearchBar";
import WelfareProgramCard from "./WelfareProgramCard";
import WelfareSection from "./WelfareSection";

export default function WeeklyWalfare() {
  return (
    <View style={styles.wrapper}>
      {/* Title */}
      <Text style={styles.pageTitle}>이번 주 추천 복지 프로그램</Text>

      {/* Search bar */}
      <SearchBar />

      {/* ==== 회색카드 전체 영역 ==== */}
      <View style={styles.cardBox}>
        {/* Section 1 */}
        <WelfareSection title="가까운 복지관이 있어요">
          <WelfareProgramCard
            title="하늘빛재가복지센터"
            subtitle="주야간보호 · 방문요양"
          />
          <WelfareProgramCard
            title="보람찬어르신센터"
            subtitle="방문목욕 · 방문요양"
          />
        </WelfareSection>

        {/* Section 2 */}
        <WelfareSection title="노인 교실은 어떠세요?">
          <WelfareProgramCard
            title="평강교회 노인교실"
            subtitle="노래교실 · 체조 · 레크레이션"
          />
          <WelfareProgramCard
            title="성실교회 노인교실"
            subtitle="한국무용 · 한문 · 탁구"
          />
        </WelfareSection>
      </View>

      <View style={{ height: 20 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  pageTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
    marginBottom: 16,
  },

  /* 회색 박스 카드 */
  cardBox: {
    backgroundColor: "#FAFAFA",
    borderRadius: 16,
    marginTop: 10,
    paddingHorizontal: 15,
    gap: 16,
    shadowColor: "#474747",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
});
