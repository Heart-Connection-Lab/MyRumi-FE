import MyRumiImage from "@/assets/images/Myrumi_char.svg";
import Button from "@/components/Button";
import { colors } from "@/styles/colors";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthEntry() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* 중앙 로고 이미지 및 환영 문구 */}
        <View style={styles.centerContainer}>
          <MyRumiImage width={250} height={250} />
          <Text style={styles.title}>마이루미에 오신 걸 환영해요</Text>
        </View>

        {/* 버튼 영역 */}
        <View style={styles.buttonContainer}>
          <Button
            title="로그인"
            type="sub"
            onClick={() => router.push("/login")}
          />
          <Button
            title="회원가입"
            type="main"
            onClick={() => router.push("/signup/name")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.gray200,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  centerContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  title: {
    position: "absolute",
    bottom: 262,
    fontSize: 24,
    fontWeight: "600",
    color: colors.gray900,
  },
  buttonContainer: {
    width: "100%",
    position: "absolute",
    bottom: 32,
    flexDirection: "column",
    gap: 12,
  },
});
