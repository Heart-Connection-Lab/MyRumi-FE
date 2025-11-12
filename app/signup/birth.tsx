import SignUpStepLayout from "@/components/ui/signup/SignUpStepLayout";
import { useRouter } from "expo-router";

export default function BirthStep() {
  const router = useRouter();
  return (
    <SignUpStepLayout
      firstFieldTitle="생년월일을 알려주세요"
      firstFieldPlaceholder="예: 2000년 5월 16일"
      secondFieldTitle="성별을 알려주세요"
      secondFieldPlaceholder="남 / 여"
      onNext={() => router.push("/signup/phone")}
    />
  );
}
