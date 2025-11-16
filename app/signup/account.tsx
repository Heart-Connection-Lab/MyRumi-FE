import SignUpStepLayout from "@/components/ui/signup/SignUpStepLayout";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";

export default function AccountStep() {
  const router = useRouter();

  const handleNext = () => {
    Toast.show({
      type: "success",
      text1: "회원가입이 완료되었습니다.",
      text2: "로그인해주세요.",
      position: "top",
    });

    setTimeout(() => {
      router.replace("/login");
    }, 1500);
  };

  return (
    <SignUpStepLayout
      firstFieldTitle="아이디를 입력해주세요"
      firstFieldPlaceholder="아이디"
      secondFieldTitle="비밀번호를 입력해주세요"
      secondFieldPlaceholder="비밀번호"
      isSecondFieldPassword
      onNext={handleNext}
    />
  );
}
