import SignUpStepLayout from "@/components/ui/signup/SignUpStepLayout";
import { useRouter } from "expo-router";

export default function NameStep() {
  const router = useRouter();
  return (
    <SignUpStepLayout
      firstFieldTitle="이름을 알려주세요"
      firstFieldPlaceholder="이름"
      onNext={() => router.push("/signup/birth")}
    />
  );
}
