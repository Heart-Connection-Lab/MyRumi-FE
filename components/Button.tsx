import { colors } from "@/styles/colors";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  title: string;
  onClick?: () => void;
  type?: "main" | "sub"; // main = 회원가입, sub = 로그인
};

export default function Button({ title, onClick, type = "main" }: ButtonProps) {
  const isMain = type === "main";

  return (
    <TouchableOpacity
      onPress={onClick}
      style={[styles.button, isMain ? styles.mainButton : styles.subButton]}
    >
      <Text style={[styles.text, isMain ? styles.mainText : styles.subText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 21,
  },

  text: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
  },

  // 메인 버튼 스타일
  mainButton: {
    backgroundColor: colors.brandDefault,
  },
  mainText: {
    color: colors.gray100,
    fontSize: 18,
    fontWeight: "700",
  },

  // 서브 버튼 스타일
  subButton: {
    backgroundColor: colors.gray100,
    borderWidth: 1,
    borderColor: colors.gray300,
  },
  subText: {
    color: colors.gray900,
    fontSize: 18,
    fontWeight: "700",
  },
});
