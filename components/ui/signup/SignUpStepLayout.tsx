import ChevronLeft from "@/assets/images/chevron-left.svg";
import { colors } from "@/styles/colors";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type FieldType = "text" | "modal";

type SignUpStepLayoutProps = {
  /* ----- 1번째 필드 ----- */
  firstFieldTitle: string;
  firstFieldPlaceholder: string;
  firstFieldType?: FieldType;
  firstFieldValue?: string;
  onPressFirstField?: () => void;

  /* ----- 2번째 필드 ----- */
  secondFieldTitle?: string;
  secondFieldPlaceholder?: string;
  secondFieldType?: FieldType;
  secondFieldValue?: string;
  isSecondFieldPassword?: boolean;
  onPressSecondField?: () => void;

  onNext?: () => void;
};

export default function SignUpStepLayout({
  firstFieldTitle,
  firstFieldPlaceholder,
  firstFieldType = "text",
  firstFieldValue,
  onPressFirstField,

  secondFieldTitle,
  secondFieldPlaceholder,
  secondFieldType = "text",
  secondFieldValue,
  isSecondFieldPassword = false,
  onPressSecondField,

  onNext,
}: SignUpStepLayoutProps) {
  /* 내부 입력값 */
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");

  const router = useRouter();

  /* 표시할 최종 값 (외부 value > 내부 value) */
  const firstDisplayedValue = firstFieldValue ?? firstValue;
  const secondDisplayedValue = secondFieldValue ?? secondValue;

  /* 버튼 활성화 조건 */
  const isNextEnabled =
    firstDisplayedValue.trim() !== "" &&
    (!secondFieldTitle || secondDisplayedValue.trim() !== "");

  const handleNext = () => {
    if (isNextEnabled) onNext?.();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.gray200 }}>
      {/* ---------------- 헤더 ---------------- */}
      <View
        style={{
          paddingTop: 20,
          paddingBottom: 57,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity onPress={() => router.back()} style={{ padding: 8 }}>
          <ChevronLeft />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.replace("/entry")}
          style={{ padding: 8 }}
        >
          <Text
            style={{
              fontSize: 16,
              color: colors.gray600,
              fontWeight: "600",
            }}
          >
            처음으로
          </Text>
        </TouchableOpacity>
      </View>

      {/* ---------------- 본문 ---------------- */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1, justifyContent: "space-between" }}
      >
        <View style={{ flex: 1, paddingHorizontal: 20 }}>
          {/* ---------- 1번째 필드 제목 ---------- */}
          <Text
            style={{
              fontSize: 22,
              fontWeight: "600",
              marginBottom: 56,
              color: colors.gray900,
            }}
          >
            {firstFieldTitle}
          </Text>

          {/* ---------- 1번째 입력 필드 ---------- */}
          {firstFieldType === "text" ? (
            <TextInput
              placeholder={firstFieldPlaceholder}
              placeholderTextColor={colors.gray500}
              value={firstDisplayedValue}
              onChangeText={setFirstValue}
              style={{
                borderBottomWidth: 2,
                borderColor: firstDisplayedValue
                  ? colors.brandDefault
                  : colors.gray300,
                fontSize: 20,
                color: colors.gray900,
                fontWeight: "600",
                paddingTop: 18,
                paddingBottom: 12,
                marginBottom: secondFieldTitle ? 36 : 0,
              }}
            />
          ) : (
            <TouchableOpacity
              onPress={onPressFirstField}
              style={{ marginBottom: secondFieldTitle ? 36 : 0 }}
            >
              <TextInput
                placeholder={firstFieldPlaceholder}
                placeholderTextColor={colors.gray500}
                value={firstDisplayedValue}
                editable={false}
                pointerEvents="none"
                style={{
                  borderBottomWidth: 2,
                  borderColor: firstDisplayedValue
                    ? colors.brandDefault
                    : colors.gray300,
                  fontSize: 20,
                  color: colors.gray900,
                  fontWeight: "600",
                  paddingTop: 18,
                  paddingBottom: 12,
                }}
              />
            </TouchableOpacity>
          )}

          {/* ---------- 2번째 필드 ---------- */}
          {secondFieldTitle && (
            <View style={{ marginTop: 40 }}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "600",
                  marginBottom: 56,
                  color: colors.gray900,
                }}
              >
                {secondFieldTitle}
              </Text>

              {secondFieldType === "text" ? (
                <TextInput
                  placeholder={secondFieldPlaceholder}
                  placeholderTextColor={colors.gray500}
                  value={secondDisplayedValue}
                  onChangeText={setSecondValue}
                  secureTextEntry={isSecondFieldPassword}
                  style={{
                    borderBottomWidth: 2,
                    borderColor: secondDisplayedValue
                      ? colors.brandDefault
                      : colors.gray300,
                    fontSize: 20,
                    color: colors.gray900,
                    fontWeight: "600",
                    paddingTop: 18,
                    paddingBottom: 12,
                  }}
                />
              ) : (
                <TouchableOpacity onPress={onPressSecondField}>
                  <TextInput
                    placeholder={secondFieldPlaceholder}
                    placeholderTextColor={colors.gray500}
                    value={secondDisplayedValue}
                    editable={false}
                    pointerEvents="none"
                    style={{
                      borderBottomWidth: 2,
                      borderColor: secondDisplayedValue
                        ? colors.brandDefault
                        : colors.gray300,
                      fontSize: 20,
                      color: colors.gray900,
                      fontWeight: "600",
                      paddingTop: 18,
                      paddingBottom: 12,
                    }}
                  />
                </TouchableOpacity>
              )}
            </View>
          )}
        </View>

        {/* ---------------- 하단 버튼 ---------------- */}
        <TouchableOpacity
          onPress={handleNext}
          activeOpacity={0.8}
          style={{
            backgroundColor: isNextEnabled
              ? colors.brandDefault
              : colors.gray300,
            paddingVertical: 20,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: isNextEnabled ? colors.gray100 : "#999",
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            다음
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
