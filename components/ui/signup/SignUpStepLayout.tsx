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

type SignUpStepLayoutProps = {
  firstFieldTitle: string;
  firstFieldPlaceholder: string;
  secondFieldTitle?: string;
  secondFieldPlaceholder?: string;
  isSecondFieldPassword?: boolean;
  onNext?: () => void;
};

export default function SignUpStepLayout({
  firstFieldTitle,
  firstFieldPlaceholder,
  secondFieldTitle,
  secondFieldPlaceholder,
  isSecondFieldPassword = false,
  onNext,
}: SignUpStepLayoutProps) {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const router = useRouter();

  const isNextEnabled =
    firstValue.trim() !== "" &&
    (!secondFieldTitle || secondValue.trim() !== "");

  const handleNext = () => {
    if (!isNextEnabled) return;
    onNext?.();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "space-between",
      }}
    >
      <View style={{ padding: 24, flex: 1 }}>
        <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 24 }}>
          {firstFieldTitle}
        </Text>

        {/* 첫 번째 입력 필드 */}
        <TextInput
          placeholder={firstFieldPlaceholder}
          value={firstValue}
          onChangeText={setFirstValue}
          style={{
            borderBottomWidth: 1.5,
            borderColor: firstValue ? "#FF5A5F" : "#E0E0E0",
            fontSize: 16,
            paddingVertical: 12,
            marginBottom: secondFieldTitle ? 40 : 0,
          }}
        />

        {/* 두 번째 입력(선택) 필드 */}
        {secondFieldTitle && (
          <View>
            <Text style={{ fontSize: 16, fontWeight: "500", marginBottom: 12 }}>
              {secondFieldTitle}
            </Text>
            <TextInput
              placeholder={secondFieldPlaceholder}
              value={secondValue}
              onChangeText={setSecondValue}
              secureTextEntry={isSecondFieldPassword}
              style={{
                borderBottomWidth: 1.5,
                borderColor: secondValue ? "#FF5A5F" : "#E0E0E0",
                fontSize: 16,
                paddingVertical: 12,
              }}
            />
          </View>
        )}
      </View>

      {/* 하단 버튼 */}
      <TouchableOpacity
        onPress={handleNext}
        activeOpacity={0.8}
        style={{
          backgroundColor: isNextEnabled ? "#FF5A5F" : "#F1F1F1",
          paddingVertical: 20,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
          다음
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
