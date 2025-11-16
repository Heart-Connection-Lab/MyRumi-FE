import Button from "@/components/Button";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AlarmSettingScreen() {
  const [push, setPush] = useState(false);
  const [kakao, setKakao] = useState(true);

  const [pill, setPill] = useState(true);
  const [schedule, setSchedule] = useState(false);
  const [danger, setDanger] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* 헤더 */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.replace("/(tabs)/my")}>
            <Ionicons name="chevron-back" size={24} color="#111" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>알림 설정</Text>
        </View>

        {/* 알림 리스트 */}
        <View style={styles.section}>
          {/* 토글 타입 */}
          <View style={styles.row}>
            <Text style={styles.label}>앱 푸시 알림</Text>
            <Switch
              value={push}
              onValueChange={setPush}
              trackColor={{ false: "#D9D9D9", true: "#E65B54" }}
              thumbColor="#FFF"
            />
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>카카오톡으로 복지 리포트 받기</Text>
            <Switch
              value={kakao}
              onValueChange={setKakao}
              trackColor={{ false: "#D9D9D9", true: "#E65B54" }}
              thumbColor="#FFF"
            />
          </View>

          {/* 체크박스 타입 */}
          {[
            { label: "복약 알림", value: pill, setter: setPill },
            { label: "일정 알림", value: schedule, setter: setSchedule },
            { label: "이상상황 감지 알림", value: danger, setter: setDanger },
          ].map((item) => (
            <View key={item.label} style={styles.row}>
              <Text style={styles.label}>{item.label}</Text>

              <TouchableOpacity
                onPress={() => item.setter(!item.value)}
                style={[styles.checkbox, item.value && styles.checkboxActive]}
              >
                {item.value && (
                  <Ionicons name="checkmark" size={14} color="#FFF" />
                )}
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* 공간 확보 */}
        <View style={{ height: 180 }} />

        {/* 저장 버튼 */}
        <Button title="정보 저장" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  /* 헤더 */
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 8,
    color: "#111",
  },

  /* 리스트 */
  section: {
    marginTop: 8,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
  },

  label: {
    fontSize: 15,
    color: "#222",
  },

  /* 체크박스 */
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: "#D2D2D2",
    alignItems: "center",
    justifyContent: "center",
  },

  checkboxActive: {
    backgroundColor: "#E65B54",
    borderColor: "#E65B54",
  },
});
