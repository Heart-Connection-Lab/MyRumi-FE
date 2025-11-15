import Alarm from "@/assets/images/alarm.svg";
import CalendarToday from "@/assets/images/calendar_today.svg";
import MyrumiChar from "@/assets/images/Myrumi_char.svg";
import SunIcon from "@/assets/images/sun.svg";
import SunGlow from "@/components/SunGlow";

import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        {/* ---------- 상단 오른쪽 아이콘 ---------- */}
        <View style={styles.topRightRow}>
          <View style={styles.circleIcon}>
            <CalendarToday width={20} height={20} />
          </View>
          <View style={styles.circleIcon}>
            <Alarm width={20} height={20} />
          </View>
        </View>

        {/* ---------- 날씨 (두 번째 줄) ---------- */}
        <View style={styles.weatherRow}>
          {/* 🌞 해 + Glow */}
          <View style={styles.sunContainer}>
            <SunGlow size={120} />

            {/* 해 아이콘 */}
            <SunIcon width={55} height={55} style={{ position: "absolute" }} />
          </View>
          <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
            <Text style={styles.temp}>24</Text>
            <Text style={styles.degree}>℃</Text>
          </View>
        </View>

        {/* ---------- 인사 ---------- */}
        <View style={styles.greetingBox}>
          <Text style={styles.greetingMain}>좋은 아침이에요</Text>
          <Text style={styles.greetingSub}>루루 할머님 😊</Text>
        </View>

        {/* ---------- 할 일 ---------- */}
        <View style={styles.taskCard}>
          <View style={styles.leftBorder} />
          <View style={{ paddingLeft: 10 }}>
            <Text style={styles.taskTitle}>은행에서 현금 인출하기</Text>
            <Text style={styles.taskMeta}>KB국민은행 삼성점 · 20분 소요</Text>
          </View>
        </View>

        {/* ---------- 캐릭터 ---------- */}
        <View style={styles.charWrapper}>
          <MyrumiChar width={280} height={280} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  inner: {
    flex: 1,
    paddingLeft: 24,
  },

  /* ------------------ 아이콘 1줄 ------------------ */
  topRightRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 12,
    paddingRight: 24,
    gap: 12,
  },
  circleIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },

  /* ------------------ 날씨 2줄 ------------------ */
  weatherRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
  },

  sunContainer: {
    width: 75,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
  },

  sunGlow: {
    position: "absolute",
    width: 95,
    height: 95,
    borderRadius: 60,
    opacity: 0.75,
  },

  temp: {
    fontSize: 32,
    fontWeight: "700",
    color: "#000",
    marginLeft: 6,
    flexDirection: "row",
  },

  degree: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginLeft: 2,
    position: "absolute",
    top: 5,
    right: -20,
  },

  /* ------------------ 인사말 ------------------ */
  greetingBox: {
    marginTop: 26,
  },
  greetingMain: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
  },
  greetingSub: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 4,
    color: "#000",
  },

  /* ------------------ 할 일 카드 ------------------ */
  taskCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 28,
    paddingVertical: 4,
  },
  leftBorder: {
    width: 2,
    height: "100%",
    backgroundColor: "#000",
  },
  taskTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#000",
  },
  taskMeta: {
    fontSize: 13,
    color: "#818181",
    fontWeight: "500",
    marginTop: 2,
  },

  /* ------------------ 캐릭터 ------------------ */
  charWrapper: {
    marginTop: 90,
    alignItems: "flex-end",
  },
});
