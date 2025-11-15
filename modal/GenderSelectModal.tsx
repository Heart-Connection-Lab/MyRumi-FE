// components/GenderSelectModal.tsx
import { colors } from "@/styles/colors";
import { Modal, Text, TouchableOpacity, View } from "react-native";

export function GenderSelectModal({ visible, onClose, onSelect }) {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: "rgba(0,0,0,0.2)",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            paddingVertical: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: "600",
              marginTop: 18,
              marginBottom: 36,
              paddingHorizontal: 24,
            }}
          >
            성별을 알려주세요
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 40,
              marginHorizontal: 24,
              gap: 13,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                onSelect("male");
                onClose();
              }}
              style={{
                paddingVertical: 20,
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 12,
                borderWidth: 1,
                borderColor: colors.gray300,
                backgroundColor: colors.gray200,
              }}
            >
              <Text style={{ fontSize: 18 }}>남성</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                onSelect("female");
                onClose();
              }}
              style={{
                paddingVertical: 20,
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 12,
                borderWidth: 1,
                borderColor: colors.gray300,
                backgroundColor: colors.gray200,
              }}
            >
              <Text style={{ fontSize: 18 }}>여성</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
