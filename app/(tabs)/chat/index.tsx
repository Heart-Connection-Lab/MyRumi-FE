import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import HomeIcon from "@/assets/images/home_pressed.svg";
import Reload from "@/assets/images/reload.svg";
import { router } from "expo-router";

// 아이콘 SVG
import IconMedicine from "@/assets/images/medicine.svg";
import IconMemo from "@/assets/images/memo.svg";
import IconPhone from "@/assets/images/phone.svg";
import IconStars from "@/assets/images/stars.svg";
import IconWeather from "@/assets/images/weather.svg";

import MicDefault from "@/assets/images/mic_default.svg";
import MicPressed from "@/assets/images/mic_pressed.svg";

export default function ChatScreen() {
  const [micOn, setMicOn] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        {/* ---------- 상단 ---------- */}
        <View style={styles.topRow}>
          <TouchableOpacity
            style={styles.circleIcon}
            onPress={() => router.replace("/(tabs)")}
          >
            <HomeIcon width={18} height={18} />
          </TouchableOpacity>

          <View style={styles.rightTag}>
            <Reload width={16} height={16} />
            <Text style={styles.tagText}>지난 대화</Text>
          </View>
        </View>

        {/* ---------- 콘텐츠 ---------- */}
        <View style={styles.contentArea}>
          <Text style={styles.dateText}>2025년 4월 12일 토요일</Text>

          <View style={styles.headingBox}>
            <Text style={styles.heading}>루미와 이야기 해요</Text>
            <Text style={styles.subheading}>
              루미와 첫 대화를 나눠보세요.{"\n"}
              오늘 하루 어땠는지 말해볼까요?
            </Text>
          </View>

          {/* ---------- 추천 질문 ---------- */}
          <View style={styles.suggestionWrapper}>
            <View style={styles.row}>
              <SuggestionButton
                icon={<IconMedicine width={18} height={18} />}
                text={"약 먹을 시간\n언제야?"}
              />
              <SuggestionButton
                icon={<IconPhone width={18} height={18} />}
                text={"아들에게\n전화 걸어줘"}
              />
            </View>

            <View style={styles.row}>
              <SuggestionButton
                icon={<IconWeather width={18} height={18} />}
                text={"오늘 날씨\n어때?"}
              />
              <SuggestionButton
                icon={<IconMemo width={18} height={18} />}
                text={"오늘 장볼 것들\n메모해줘"}
              />
            </View>
          </View>
        </View>

        {/* ---------- 입력창 ---------- */}
        <View style={styles.inputRow}>
          <View style={styles.leftBox}>
            <IconStars width={24} height={24} />
            <Text style={styles.placeholderText}>
              루미에게 말하거나 입력해보세요
            </Text>
          </View>

          <TouchableOpacity
            style={styles.micBtn}
            onPress={() => setMicOn(!micOn)}
          >
            {micOn ? (
              <MicPressed width={70} height={70} />
            ) : (
              <MicDefault width={70} height={70} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

/* ---------------- Suggestion Button ---------------- */

function SuggestionButton({
  text,
  icon,
}: {
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <View style={styles.suggestionBtn}>
      {icon}
      <Text style={styles.suggestionText}>{text}</Text>
    </View>
  );
}

/* -------------------- Styles -------------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  inner: {
    flex: 1,
    paddingHorizontal: 20,
  },

  contentArea: {
    flex: 1,
    marginTop: 20,
  },

  /* ---------------- 상단 ---------------- */
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
  },
  circleIcon: {
    width: 48,
    height: 48,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",

    /** 그림자  */
    shadowColor: "rgba(0,0,0,0.22)",
    shadowOpacity: 1,
    shadowRadius: 12,
    shadowOffset: { width: 8, height: 5 },
    elevation: 20,
  },
  rightTag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 16,
    gap: 6,

    /** 그림자  */
    shadowColor: "rgba(0,0,0,0.22)",
    shadowOpacity: 1,
    shadowRadius: 12,
    shadowOffset: { width: 8, height: 5 },
    elevation: 20,
  },
  tagText: {
    fontSize: 13,
    fontWeight: "600",
  },

  /* ---------------- 날짜 ---------------- */
  dateText: {
    marginTop: 20,
    textAlign: "center",
    color: "#AAA",
    fontSize: 14,
    fontWeight: "600",
  },

  /* ---------------- 헤딩 ---------------- */
  headingBox: {
    marginTop: 300,
  },
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

  /* ---------------- 추천 질문 ---------------- */
  suggestionWrapper: {
    marginTop: 26,
  },
  row: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 14,
  },

  suggestionBtn: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderRadius: 16,
    alignItems: "center",

    /** 그림자  */
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

  /* ---------------- 입력창 ---------------- */
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 18,
    paddingRight: 8,
    paddingVertical: 14,
    borderRadius: 30,
    backgroundColor: "#fff",
    marginBottom: 6,

    shadowColor: "rgba(0,0,0,0.22)",
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 7,
  },

  leftBox: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },

  placeholderText: {
    color: "#E65B54",
    fontSize: 16,
    fontWeight: "700",
  },

  micBtn: {
    width: 52,
    height: 52,
    borderRadius: 9999,
    backgroundColor: "#E65B54",
    justifyContent: "center",
    alignItems: "center",

    /** 그림자  */
    shadowColor: "rgba(0,0,0,0.22)",
    shadowOpacity: 1,
    shadowRadius: 12,
    shadowOffset: { width: 8, height: 5 },
    elevation: 20,
  },
});
