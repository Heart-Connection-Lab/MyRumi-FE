import EmotionActive from "@/assets/images/emotion_active.svg";
import EmotionAnxious from "@/assets/images/emotion_anxious.svg";
import EmotionBright from "@/assets/images/emotion_bright.svg";
import EmotionCalm from "@/assets/images/emotion_calm.svg";
import EmotionTired from "@/assets/images/emotion_tired.svg";

import { StyleSheet, Text, View } from "react-native";

const EMOTIONS = ["즐거워", "좋아", "개운해", "행복해", "괜찮아"];

const EMOTION_ICONS = {
  bright: EmotionBright,
  calm: EmotionCalm,
  active: EmotionActive,
  anxious: EmotionAnxious,
  tired: EmotionTired,
};

// ✔ 요일 순서는 월~일 기준
const WEEK_EMOTIONS = [
  { day: "수", emotion: "bright" },
  { day: "목", emotion: "calm" },
  { day: "금", emotion: "active" },
  { day: "토", emotion: "anxious" },
  { day: "일", emotion: "tired" },
  { day: "월", emotion: "bright" },
  { day: "화", emotion: "calm" },
];

export default function WeeklyEmotion() {
  const today = "화";

  return (
    <View style={styles.card}>
      <Text style={styles.text}>
        루루 할머님의 이번 주는 밝았어요{"\n"}
        긍정을 말하는 표현이 자주 보였어요
      </Text>

      {/* 감정 태그 */}
      <View style={styles.tagRow}>
        {EMOTIONS.map((t) => (
          <View key={t} style={styles.tag}>
            <Text style={styles.tagText}>{t}</Text>
          </View>
        ))}
      </View>

      {/* ---------- 감정 요일 라인 ---------- */}
      <View style={styles.weekWrapper}>
        {/* 회색 박스 (전체) */}
        <View style={styles.weekGrayBox}>
          {WEEK_EMOTIONS.map(({ day, emotion }) => {
            const Icon = EMOTION_ICONS[emotion];

            return (
              <View key={day} style={styles.dayItem}>
                <Icon width={40} height={40} />
                <Text style={styles.dayLabel}>{day}</Text>
              </View>
            );
          })}
        </View>

        {/* 오늘 카드 (회색 박스 위에 올라오는 구조) */}
        <View style={styles.todayCard}>
          {(() => {
            const todayData = WEEK_EMOTIONS.find((x) => x.day === today);
            const TodayIcon = EMOTION_ICONS[todayData.emotion];

            return (
              <>
                <TodayIcon width={48} height={48} />
                <Text style={styles.todayLabel}>{today}</Text>
                <View style={styles.todayBadge}>
                  <Text style={styles.todayBadgeText}>오늘</Text>
                </View>
              </>
            );
          })()}
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
    marginTop: 16,
  },

  text: {
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.70)",
    marginBottom: 18,
    fontWeight: "700",
    lineHeight: 20,
  },

  /* 태그 영역 */
  tagRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 20,
  },
  tag: {
    backgroundColor: "#FDEAEA",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
  },
  tagText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#E65B54",
  },

  /* 감정 요일 전체 래퍼 */
  weekWrapper: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },

  /* 회색 박스: 오늘을 제외한 6개가 아니라 ‘전체’를 덮어야 한다 */
  weekGrayBox: {
    flexDirection: "row",
    backgroundColor: "#F6F6F6",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 24,
    flex: 1,
    justifyContent: "space-between",
  },

  dayItem: {
    alignItems: "center",
  },
  dayLabel: {
    marginTop: 4,
    fontSize: 12,
    color: "#777",
  },

  /* 오늘 카드 - 회색 박스 위로 올라오는 형태 */
  todayCard: {
    position: "absolute",
    right: -12, // 오른쪽 살짝 튀어나오게
    backgroundColor: "#FFF",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#E5E5E5",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },

  todayLabel: {
    fontSize: 14,
    fontWeight: "700",
    marginTop: 6,
  },

  todayBadge: {
    marginTop: 6,
    backgroundColor: "#EEE",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  todayBadgeText: {
    fontSize: 11,
    color: "#444",
  },
});
