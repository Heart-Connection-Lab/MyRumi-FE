import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import HomeIcon from "@/assets/images/home_pressed.svg";
import Reload from "@/assets/images/reload.svg";
import { router } from "expo-router";

import MicDefault from "@/assets/images/mic_default.svg";
import MicPressed from "@/assets/images/mic_pressed.svg";
import IconStars from "@/assets/images/stars.svg";
import ChatIntro from "@/components/ui/chat/ChatIntro";
import ChatMessages from "@/components/ui/chat/ChatMessages";

export default function ChatScreen() {
  const [micOn, setMicOn] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);
  const backendIp = process.env.EXPO_PUBLIC_BACKEND_IP;
  const backendPort = process.env.EXPO_PUBLIC_BACKEND_PORT;

  useEffect(() => {
    if (isStarted) {
      const ws = new WebSocket(`ws://${backendIp}:${backendPort}/ws/connect`);
      wsRef.current = ws;

      ws.onopen = () => {
        console.log("🔌 WebSocket 연결됨");
        ws.send("hello from RN");
      };

      ws.onmessage = (e) => {
        console.log("📩 서버 응답:", e.data);
      };

      ws.onerror = (err) => {
        console.log("❌ WebSocket Error:", err);
      };

      ws.onclose = () => {
        console.log("🔌 WebSocket closed");
      };

      return () => {
        ws.close();
      };
    }
  }, [isStarted]);
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

        {/* ---------- 날짜 ---------- */}
        <Text style={styles.dateText}>2025년 4월 12일 토요일</Text>

        {/* ---------- 중앙 영역 (Intro ↔ ChatMessages) ---------- */}
        <View style={styles.centerArea}>
          {isStarted ? (
            <ChatMessages />
          ) : (
            <ChatIntro onStart={() => setIsStarted(true)} />
          )}
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
            onPress={() => {
              setMicOn(!micOn);
              setIsStarted(true);
            }}
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

/* -------------------- Styles -------------------- */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F8F8" },
  inner: { flex: 1, paddingHorizontal: 20 },

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
    shadowColor: "rgba(0,0,0,0.22)",
    shadowOpacity: 1,
    shadowRadius: 12,
    shadowOffset: { width: 8, height: 5 },
    elevation: 20,
  },

  tagText: { fontSize: 13, fontWeight: "600" },

  dateText: {
    marginTop: 20,
    textAlign: "center",
    color: "#AAA",
    fontSize: 14,
    fontWeight: "600",
  },

  centerArea: {
    flex: 1,
    marginTop: 20,
  },

  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 18,
    paddingRight: 8,
    paddingVertical: 14,
    borderRadius: 9999,
    backgroundColor: "#fff",
    marginBottom: 6,
    shadowColor: "rgba(0,0,0,0.22)",
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 7,
  },

  leftBox: { flexDirection: "row", gap: 6, alignItems: "center" },

  placeholderText: { color: "#E65B54", fontSize: 16, fontWeight: "700" },

  micBtn: {
    width: 52,
    height: 52,
    borderRadius: 9999,
    backgroundColor: "#E65B54",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0,0,0,0.22)",
    shadowOpacity: 1,
    shadowRadius: 12,
    shadowOffset: { width: 8, height: 5 },
    elevation: 20,
  },
});
