// modal/BirthDatePickerModal.tsx
import { colors } from "@/styles/colors";
import { useState } from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import WheelPicker from "react-native-wheely";

export function BirthDatePickerModal({ visible, onClose, onSelect }) {
  // 선택값
  const [year, setYear] = useState(2024);
  const [month, setMonth] = useState(5);
  const [day, setDay] = useState(16);

  // 현재 연도
  const currentYear = new Date().getFullYear();

  // 최근 100년
  const years = Array.from({ length: 77 }, (_, i) => currentYear - i).reverse();
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      {/* 배경 */}
      <TouchableOpacity
        activeOpacity={1}
        onPress={onClose}
        style={{
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: "rgba(0,0,0,0.25)",
        }}
      >
        <TouchableWithoutFeedback>
          {/* 바텀시트 영역 */}
          <View
            style={{
              backgroundColor: "white",
              borderTopLeftRadius: 28,
              borderTopRightRadius: 28,
              paddingTop: 24,
              paddingBottom: 32,
              paddingHorizontal: 20,
            }}
          >
            {/* 상단 바 */}
            <View
              style={{
                width: 48,
                height: 4,
                backgroundColor: colors.gray300,
                borderRadius: 4,
                alignSelf: "center",
                marginBottom: 24,
              }}
            />

            {/* 타이틀 */}
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                color: colors.gray900,
                marginBottom: 32,
                textAlign: "center",
              }}
            >
              생년월일을 알려주세요
            </Text>

            {/* 3단 Wheel Picker */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginBottom: 32,
              }}
            >
              {/* Year Picker */}
              <WheelPicker
                selectedIndex={years.indexOf(year)}
                options={years.map((y) => `${y}년`)}
                onChange={(idx) => setYear(years[idx])}
                itemHeight={44}
                visibleItemCount={5}
              />

              {/* Month Picker */}
              <WheelPicker
                selectedIndex={months.indexOf(month)}
                options={months.map((m) => `${m}월`)}
                onChange={(idx) => setMonth(months[idx])}
                itemHeight={44}
                visibleItemCount={5}
              />

              {/* Day Picker */}
              <WheelPicker
                selectedIndex={days.indexOf(day)}
                options={days.map((d) => `${d}일`)}
                onChange={(idx) => setDay(days[idx])}
                itemHeight={44}
                visibleItemCount={5}
              />
            </View>

            {/* 선택 버튼 */}
            <TouchableOpacity
              onPress={() => {
                onSelect({ year, month, day });
                onClose();
              }}
              style={{
                backgroundColor: colors.brandDefault,
                paddingVertical: 18,
                borderRadius: 12,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  color: "white",
                }}
              >
                선택하기
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
}
