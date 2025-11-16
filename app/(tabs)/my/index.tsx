import Profile from "@/assets/images/profile.svg";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MyPageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        {/* 프로필 박스 */}
        <View style={styles.profileWrapper}>
          {/* 원형 프로필 */}
          <View style={styles.profileCircle}>
            <Profile width={100} height={100} />
          </View>

          {/* 카드 박스 */}
          <View style={styles.profileCard}>
            <Text style={styles.name}>김루루 할머님</Text>
            <Text style={styles.info}>74세 · 1949.02.14</Text>
          </View>
        </View>

        {/* 메뉴 리스트 */}
        <View style={styles.menuBox}>
          <MenuItem
            text="프로필 설정"
            onPress={() => router.push("/(tabs)/my/profile")}
          />
          <MenuItem
            text="보호자 정보"
            onPress={() => router.push("/(tabs)/my/guardian")}
          />
          <MenuItem
            text="알림 설정"
            onPress={() => router.push("/(tabs)/my/notifications")}
          />
          <MenuItem
            text="계정 설정"
            onPress={() => router.push("/(tabs)/my/account")}
            isLast
          />
        </View>

        {/* 로그아웃 */}
        <TouchableOpacity
          onPress={() => console.log("logout")}
          style={styles.logoutBtn}
        >
          <Text style={styles.logoutText}>로그아웃</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

/* ---------- 메뉴 아이템 컴포넌트 ---------- */
function MenuItem({
  text,
  onPress,
  isLast,
}: {
  text: string;
  onPress?: () => void;
  isLast?: boolean;
}) {
  return (
    <TouchableOpacity
      style={[
        styles.menuItem,
        isLast && { borderBottomWidth: 0 }, // 마지막 아이템 border 제거
      ]}
      onPress={onPress}
    >
      <Text style={styles.menuText}>{text}</Text>
    </TouchableOpacity>
  );
}

/* ---------- Styles ---------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },

  inner: {
    flex: 1,
    paddingHorizontal: 20,
  },

  /* 프로필 */
  profileWrapper: {
    marginTop: 40,
    alignItems: "center",
    position: "relative",
  },

  profileCircle: {
    width: 100,
    height: 100,
    borderRadius: 999,
    backgroundColor: "rgba(230, 91, 84, 0.35)",
    position: "absolute",
    top: -20,
    zIndex: 2,
  },

  profileCard: {
    width: "100%",
    backgroundColor: "#fff",
    paddingVertical: 35,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 40,

    shadowColor: "rgba(0,0,0,0.12)",
    shadowOpacity: 1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
  },

  name: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 20,
    color: "#000",
  },

  info: {
    marginTop: 6,
    fontSize: 14,
    color: "#777",
    fontWeight: "500",
  },

  /* 메뉴 박스 */
  menuBox: {
    marginTop: 30,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,

    shadowColor: "rgba(0,0,0,0.1)",
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { width: 5, height: 5 },
    elevation: 8,
  },

  menuItem: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E9E9E9",
    alignItems: "center",
  },

  menuText: {
    fontSize: 16,
    fontWeight: "600",
  },

  logoutBtn: {
    marginTop: 16,
    alignItems: "center",
  },

  logoutText: {
    color: "#999",
    fontSize: 16,
    fontWeight: "600",
  },
});
