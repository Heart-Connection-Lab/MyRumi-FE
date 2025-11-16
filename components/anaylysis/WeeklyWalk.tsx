import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";

export default function WeeklyWalk() {
  const weekLabels = ["월", "화", "수", "목", "금", "토", "일"];
  const values = [40, 60, 90, 100, 90, 100, 70]; // dummy height

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.desc}>
          최근 7일동안 {"\n"}하루 평균{" "}
          <Text style={styles.highlight}>4,702걸음</Text> 걸었어요
        </Text>

        <View style={styles.avgBox}>
          <Text style={styles.avgText}>평균걸음</Text>
          <Text style={styles.avgNumber}>4,702</Text>
        </View>
      </View>

      {/* 그래프 + 점선 겹치는 영역 */}
      <View style={styles.graphWrapper}>
        {/* 점선 */}
        <View style={styles.dottedLine} />

        {/* 그래프 */}
        <View style={styles.graphRow}>
          {values.map((v, idx) => (
            <View key={idx} style={styles.graphItem}>
              <LinearGradient
                colors={["#F48A7C", "rgba(244,138,124,0.2)"]}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={[styles.bar, { height: v }]}
              />
              <Text style={styles.label}>{weekLabels[idx]}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  desc: {
    fontSize: 14,
    color: "#333",
    width: "70%",
  },

  highlight: {
    color: "#E65B54",
    fontWeight: "700",
  },

  graphWrapper: {
    height: 120,
    position: "relative",
    marginTop: 8,
  },

  dottedLine: {
    position: "absolute",
    top: 30, // 그래프 높이 120의 절반 → 중앙
    left: 0,
    right: 0,
    height: 1,
    borderWidth: 0.8,
    borderStyle: "dashed",
    borderColor: "#D0D0D0",
    zIndex: 1,
  },

  graphRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 4,
    zIndex: 2, // 그래프가 점선 위에 오도록
  },

  graphItem: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },

  bar: {
    width: 18,
    borderRadius: 10,
    marginBottom: 4,
  },

  label: {
    marginTop: 4,
    fontSize: 12,
    color: "#666",
  },

  avgBox: {
    backgroundColor: "#EFEFEF",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    alignSelf: "flex-start",
  },

  avgText: {
    fontSize: 10,
    color: "#555",
  },
  avgNumber: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000",
  },
});
