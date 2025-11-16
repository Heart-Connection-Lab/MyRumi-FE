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

export default function GuardianScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* 헤더 */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.replace("/(tabs)/my")}>
            <Ionicons name="chevron-back" size={24} color="#111" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>보호자 정보</Text>
        </View>

        {/* 입력 영역 */}
        <View style={styles.section}>
          <Text style={styles.label}>이름</Text>
          <TextInput style={styles.input} placeholder="김루미" />

          <Text style={styles.label}>휴대폰 번호</Text>
          <TextInput style={styles.input} placeholder="010-2241-1531" />

          <Text style={styles.label}>관계</Text>
          <View style={styles.tagRow}>
            <TouchableOpacity style={[styles.tagBtn, styles.tagInactive]}>
              <Text style={styles.tagInactiveText}>배우자</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.tagBtn, styles.tagActive]}>
              <Text style={styles.tagActiveText}>자녀</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.tagBtn, styles.tagInactive]}>
              <Text style={styles.tagInactiveText}>형제/자매</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.tagBtn, styles.tagInactive]}>
              <Text style={styles.tagInactiveText}>지인</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.tagBtn, styles.tagInactive]}>
              <Text style={styles.tagInactiveText}>복지사</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 공간 확보 */}
        <View style={{ height: 160 }} />

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

  /* 관계 태그 */
  tagRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 10,
  },

  tagBtn: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 16,
  },

  tagActive: {
    backgroundColor: "#E65B54",
  },
  tagActiveText: {
    color: "#FFF",
    fontWeight: "600",
  },

  tagInactive: {
    backgroundColor: "#F1F1F1",
  },
  tagInactiveText: {
    color: "#555",
    fontWeight: "600",
  },
});
