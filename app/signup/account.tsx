import SignUpStepLayout from "@/components/ui/signup/SignUpStepLayout";
import { useRouter } from "expo-router";

export default function AccountStep() {
  const router = useRouter();
  return (
    <SignUpStepLayout
      firstFieldTitle="아이디를 입력해주세요"
      firstFieldPlaceholder="아이디"
      secondFieldTitle="비밀번호를 입력해주세요"
      secondFieldPlaceholder="비밀번호"
      isSecondFieldPassword
      onNext={() => router.push("/(tabs)" as any)}
    />
  );
}
