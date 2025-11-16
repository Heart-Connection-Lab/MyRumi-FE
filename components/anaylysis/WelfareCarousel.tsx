import LocationIcon from "@/assets/images/location.svg";
import PhoneIcon from "@/assets/images/phone.svg";
import { ScrollView, StyleSheet, Text, View } from "react-native";

type WelfareItem = {
  id: string;
  title: string;
  sub: string;
};

const SAMPLE_DATA: WelfareItem[] = [
  { id: "1", title: "보람찬어르신센터", sub: "방문목욕 · 방문요양" },
  // { id: "2", title: "하늘빛 재가센터", sub: "방문요양" },
  // { id: "3", title: "노인복지관 프로그램", sub: "운동 · 취미" },
  // { id: "4", title: "인지 건강 프로그램", sub: "두뇌 활동" },
];

export default function WelfareList() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>이번 주 복지를 추천드려요</Text>

      <ScrollView
        style={{ marginTop: 14 }}
        showsVerticalScrollIndicator={false}
      >
        {SAMPLE_DATA.map((item) => (
          <View key={item.id} style={styles.card}>
            {/* 상단 제목 + 우측 아이콘들 */}
            <View style={styles.row}>
              <Text style={styles.cardTitle}>{item.title}</Text>

              <View style={styles.iconRow}>
                <View style={styles.iconItem}>
                  <PhoneIcon width={16} height={16} />
                  <Text style={styles.iconLabel}>전화</Text>
                </View>

                <View style={styles.iconItem}>
                  <LocationIcon width={16} height={16} />
                  <Text style={styles.iconLabel}>위치</Text>
                </View>
              </View>
            </View>

            {/* 하단 서브텍스트 */}
            <Text style={styles.sub}>{item.sub}</Text>
          </View>
        ))}

        {/* 마지막 여백 */}
        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
}

/* ---------------- Styles ---------------- */

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    marginBottom: 16,

    // shadow
    shadowColor: "rgba(0,0,0,0.12)",
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { width: 4, height: 4 },
    elevation: 6,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },

  iconRow: {
    flexDirection: "row",
    gap: 14,
  },

  iconItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  iconLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#555",
  },

  sub: {
    marginTop: 8,
    fontSize: 13,
    color: "#777",
  },
});
