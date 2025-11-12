import SignUpStepLayout from "@/components/ui/signup/SignUpStepLayout";
import { useRouter } from "expo-router";

export default function PhoneStep() {
  const router = useRouter();
  return (
    <SignUpStepLayout
      firstFieldTitle="휴대폰 번호를 알려주세요"
      firstFieldPlaceholder="010-0000-0000"
      onNext={() => router.push("/signup/account")}
    />
  );
}
