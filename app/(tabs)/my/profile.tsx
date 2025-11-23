import Button from "@/components/Button";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* 헤더 */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.replace("/(tabs)/my")}>
            <Ionicons name="chevron-back" size={24} color="#111" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>프로필 설정</Text>
        </View>

        {/* 입력 영역 */}
        <View style={styles.section}>
          <Text style={styles.label}>이름</Text>
          <TextInput style={styles.input} placeholder="김루루" />

          <Text style={styles.label}>생년월일</Text>
          <TextInput style={styles.input} placeholder="1949년 1월 1일" />

          <Text style={styles.label}>휴대폰 번호</Text>
          <TextInput style={styles.input} placeholder="010-0000-0000" />

          <Text style={styles.label}>성별</Text>
          <View style={styles.genderRow}>
            <TouchableOpacity style={[styles.genderBtn, styles.genderInactive]}>
              <Text style={styles.genderInactiveText}>남성</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.genderBtn, styles.genderActive]}>
              <Text style={styles.genderActiveText}>여성</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: 180 }} />
        {/* 하단 버튼 */}
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

  /* 입력 영역 */
  section: {
    marginTop: 8,
  },

  label: {
    marginTop: 20,
    marginBottom: 6,
    color: "#555",
    fontSize: 14,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    paddingVertical: 10,
    fontSize: 16,
    color: "#111",
  },

  /* 성별 버튼 */
  genderRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 10,
  },

  genderBtn: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 16,
  },

  genderActive: {
    backgroundColor: "#E65B54",
  },
  genderActiveText: {
    color: "#FFF",
    fontWeight: "600",
  },

  genderInactive: {
    backgroundColor: "#F1F1F1",
  },
  genderInactiveText: {
    color: "#555",
    fontWeight: "600",
  },
});
