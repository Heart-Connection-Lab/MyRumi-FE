import EyeSlash from "@/assets/images/eye-slash.svg";
import Button from "@/components/Button";
import { colors } from "@/styles/colors";
import { router } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          {/* 제목 */}
          <Text style={styles.title}>로그인</Text>

          {/* 입력 영역 */}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="아이디"
              placeholderTextColor={colors.gray500}
              style={styles.input}
            />
            <View style={styles.passwordContainer}>
              <TextInput
                placeholder="비밀번호"
                placeholderTextColor={colors.gray500}
                secureTextEntry={!showPassword}
                style={[styles.input, { flex: 1, borderBottomWidth: 0 }]}
              />
              <TouchableOpacity
                onPress={() => setShowPassword((prev) => !prev)}
                style={styles.eyeButton}
              >
                <EyeSlash
                  width={24}
                  height={24}
                  stroke={showPassword ? colors.gray500 : "transparent"}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.subText}>비밀번호를 잊으셨나요?</Text>
          </View>

          {/* 링크 텍스트 */}
          <View style={styles.linkContainer}>
            <Text style={styles.subText}>계정이 없으신가요?</Text>
            <Text style={styles.linkText}>가입하기</Text>
          </View>
        </View>

        {/* 로그인 버튼 */}
        <Button title="로그인" onClick={() => router.push("/(tabs)" as any)} />
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
    backgroundColor: colors.gray200,
    paddingHorizontal: 24,
    paddingTop: 90,
    gap: 24,
  },
  subContainer: {
    display: "flex",
    gap: 42,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: colors.gray900,
  },
  inputContainer: {
    display: "flex",
    gap: 30,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: colors.gray300,
    fontSize: 20,
    fontWeight: "600",
    color: colors.gray900,
    paddingTop: 18,
    paddingBottom: 12,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: colors.gray300,
  },
  eyeButton: {
    paddingHorizontal: 6,
  },
  linkContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    gap: 7,
  },
  subText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.gray700,
  },
  linkText: {
    color: colors.brandDeep,
    fontWeight: "600",
  },
});
