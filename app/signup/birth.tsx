import SignUpStepLayout from "@/components/ui/signup/SignUpStepLayout";
import { BirthDatePickerModal } from "@/modal/BirthDatePickerModal";
import { GenderSelectModal } from "@/modal/GenderSelectModal";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function BirthStep() {
  const router = useRouter();

  // 생일 & 성별 & 모달 상태
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [birthModalVisible, setBirthModalVisible] = useState(false);
  const [genderModalVisible, setGenderModalVisible] = useState(false);

  return (
    <>
      <SignUpStepLayout
        firstFieldTitle="생년월일을 알려주세요"
        firstFieldPlaceholder="생년월일"
        firstFieldType="modal"
        firstFieldValue={birthday}
        onPressFirstField={() => setBirthModalVisible(true)}
        secondFieldTitle="성별을 알려주세요"
        secondFieldPlaceholder="남/여"
        secondFieldType="modal"
        secondFieldValue={gender}
        onPressSecondField={() => setGenderModalVisible(true)}
        onNext={() => router.push("/signup/phone")}
      />

      {/* 성별 모달 */}
      <GenderSelectModal
        visible={genderModalVisible}
        onClose={() => setGenderModalVisible(false)}
        onSelect={(value) => {
          setGender(value === "male" ? "남성" : "여성");
          setGenderModalVisible(false);
        }}
      />
      {/* 생년월일 모달 */}
      <BirthDatePickerModal
        visible={birthModalVisible}
        onClose={() => setBirthModalVisible(false)}
        onSelect={({ year, month, day }) => {
          setBirthday(`${year}-${month}-${day}`);
        }}
      />
    </>
  );
}
