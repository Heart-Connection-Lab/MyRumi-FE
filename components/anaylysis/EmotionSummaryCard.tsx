import { StyleSheet, Text, View } from "react-native";

// SVG imports
import EmotionActive from "@/assets/images/emotion_active.svg";
import EmotionAnxious from "@/assets/images/emotion_anxious.svg";
import EmotionBright from "@/assets/images/emotion_bright.svg";
import EmotionCalm from "@/assets/images/emotion_calm.svg";
import EmotionTired from "@/assets/images/emotion_tired.svg";

type EmotionType = "bright" | "calm" | "active" | "tired" | "anxious";

type Props = {
  type: EmotionType;
  tags: string[];
};

const EMOTION_MAP: Record<
  EmotionType,
  {
    Icon: React.FC<any>;
    text1: string;
    text2: string;
  }
> = {
  bright: {
    Icon: EmotionBright,
    text1: "오늘은 밝은 하루였어요",
    text2: "대화에서 긍정을 말하는 표현이 있었어요",
  },
  calm: {
    Icon: EmotionCalm,
    text1: "오늘은 차분한 하루였어요",
    text2: "대화에서 감정을 보이는 표현이 거의 없었어요",
  },
  active: {
    Icon: EmotionActive,
    text1: "오늘은 활발한 하루였어요",
    text2: "대화에서 의지를 보이는 표현이 있었어요",
  },
  tired: {
    Icon: EmotionTired,
    text1: "오늘은 조금 지친 하루였어요",
    text2: "대화에서 피로를 말하는 표현이 있었어요",
  },
  anxious: {
    Icon: EmotionAnxious,
    text1: "오늘은 걱정스러운 하루였어요",
    text2: "대화에서 불안을 드러내는 표현이 있었어요",
  },
};

export default function EmotionSummaryCard({ type, tags }: Props) {
  const { Icon, text1, text2 } = EMOTION_MAP[type];

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Icon width={42} height={42} />

        <View style={{ flex: 1 }}>
          <Text style={styles.text1}>{text1}</Text>
          <Text style={styles.text2}>{text2}</Text>
        </View>
      </View>

      <Text style={styles.tagTitle}>영향을 준 단어</Text>

      <View style={styles.tagRow}>
        {tags.map((t, i) => (
          <View key={i} style={styles.tag}>
            <Text style={styles.tagText}>{t}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 16,
    gap: 14,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  topRow: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },

  text1: {
    fontSize: 14,
    fontWeight: "700",
    color: "rgba(0, 0, 0, 0.70)",
  },

  text2: {
    fontSize: 14,
    fontWeight: "700",
    color: "rgba(0, 0, 0, 0.70)",
    marginTop: 3,
  },

  tagTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#828282",
  },

  tagRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  tag: {
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },

  tagText: {
    fontSize: 13,
    color: "#666",
    fontWeight: "600",
  },
});
