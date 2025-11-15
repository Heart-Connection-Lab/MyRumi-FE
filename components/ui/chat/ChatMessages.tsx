import { StyleSheet, View } from "react-native";
import RumiBubble from "./RummiBubble";
import UserBubble from "./UserBubble";

export default function ChatMessages() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <RumiBubble
          time="7:20"
          text="루루 할머니, 지금 아들에게 전화를 걸까요?"
        />

        <UserBubble time="7:21" text="응. 지금 바로 걸어줘." />

        <RumiBubble time="7:21" text="[아들에게 전화 거는 중...]" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, marginTop: 20, flexDirection: "row" },

  line: {
    width: 2,
    backgroundColor: "#E65B54",
    marginRight: 12,
    borderRadius: 999,
  },

  content: {
    flex: 1,
    gap: 22,
  },
});
