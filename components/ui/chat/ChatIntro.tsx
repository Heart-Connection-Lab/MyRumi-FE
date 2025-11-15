import IconMedicine from "@/assets/images/medicine.svg";
import IconMemo from "@/assets/images/memo.svg";
import IconPhone from "@/assets/images/phone.svg";
import IconWeather from "@/assets/images/weather.svg";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ChatIntro({ onStart }: { onStart: () => void }) {
  return (
    <View style={styles.wrapper}>
      {/* 헤딩 */}
      <View style={styles.headingBox}>
        <Text style={styles.heading}>루미와 이야기 해요</Text>
        <Text style={styles.subheading}>
          루미와 첫 대화를 나눠보세요.{"\n"}
          오늘 하루 어땠는지 말해볼까요?
        </Text>
      </View>

      {/* 추천 질문 */}
      <View style={styles.suggestionWrapper}>
        <View style={styles.row}>
          <SuggestionButton
            icon={<IconMedicine width={18} height={18} />}
            text={"약 먹을 시간\n언제야?"}
            onPress={onStart}
          />
          <SuggestionButton
            icon={<IconPhone width={18} height={18} />}
            text={"아들에게\n전화 걸어줘"}
            onPress={onStart}
          />
        </View>

        <View style={styles.row}>
          <SuggestionButton
            icon={<IconWeather width={18} height={18} />}
            text={"오늘 날씨\n어때?"}
            onPress={onStart}
          />
          <SuggestionButton
            icon={<IconMemo width={18} height={18} />}
            text={"오늘 장볼 것들\n메모해줘"}
            onPress={onStart}
          />
        </View>
      </View>
    </View>
  );
}

function SuggestionButton({
  text,
  icon,
  onPress,
}: {
  text: string;
  icon: React.ReactNode;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity style={styles.suggestionBtn} onPress={onPress}>
      {icon}
      <Text style={styles.suggestionText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, marginTop: 40 },

  headingBox: { marginTop: 280 },
  heading: {
    fontSize: 24,
    fontWeight: "800",
    fontFamily: "HancomMalangmalang",
  },
  subheading: {
    marginTop: 10,
    color: "#767676",
    lineHeight: 20,
    fontSize: 16,
    fontWeight: "600",
  },

  suggestionWrapper: { marginTop: 26 },
  row: { flexDirection: "row", gap: 12, marginBottom: 14 },

  suggestionBtn: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderRadius: 16,
    alignItems: "center",

    shadowColor: "rgba(0,0,0,0.22)",
    shadowOpacity: 1,
    shadowRadius: 12,
    shadowOffset: { width: 8, height: 5 },
    elevation: 8,
  },

  suggestionText: {
    fontSize: 15,
    fontWeight: "600",
    flexShrink: 1,
    flexWrap: "wrap",
    lineHeight: 22,
  },
});
