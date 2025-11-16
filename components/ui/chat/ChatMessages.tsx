import { ScrollView, StyleSheet, View } from "react-native";
import RumiBubble from "./RummiBubble";
import UserBubble from "./UserBubble";

export default function ChatMessages() {
  return (
    <View style={styles.wrapper}>
      {/* 스크롤 되는 채팅 영역 */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <RumiBubble
          time="7:20"
          text="루루 할머니, 지금 아들에게 전화를 걸까요?"
        />
        <UserBubble time="7:21" text="응. 지금 바로 걸어줘." />
        <RumiBubble time="7:21" text="[아들에게 전화 거는 중...]" />
        <UserBubble time="7:21" text="응. 지금 바로 걸어줘." />
        <RumiBubble time="7:21" text="[아들에게 전화 거는 중...]" />{" "}
        <UserBubble time="7:21" text="응. 지금 바로 걸어줘." />
        <RumiBubble time="7:21" text="[아들에게 전화 거는 중...]" />
        {/* 테스트용: 스크롤 확인 */}
        {/* <UserBubble time="7:22" text="테스트 메시지" /> */}
        {/* 여러 줄 복사해서 테스트해도 됨 */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
  },

  line: {
    width: 2,
    backgroundColor: "#E65B54",
    marginRight: 12,
    borderRadius: 999,
  },

  scroll: {
    flex: 1,
  },

  content: {
    paddingBottom: 40,
    gap: 26,
  },
});
