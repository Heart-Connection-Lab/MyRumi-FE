import { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import RumiBubble from "./RummiBubble";
import UserBubble from "./UserBubble";

export default function ChatMessages() {
  const scrollRef = useRef<ScrollView>(null);

  const messages = [
    { type: "rumi", text: "안녕하세요 루루 할머님 ☀️" },
    { type: "user", text: "응, 안녕 루미야." },
    { type: "rumi", text: "오늘 기분은 어떠세요? 😊" },
  ];

  return (
    <View style={styles.wrapper}>
      <ScrollView
        ref={scrollRef}
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={() => {
          scrollRef.current?.scrollToEnd({ animated: true });
        }}
      >
        {messages.map((msg, i) =>
          msg.type === "rumi" ? (
            <RumiBubble key={i} text={msg.text} time="7:21" />
          ) : (
            <UserBubble key={i} text={msg.text} time="7:21" />
          )
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingBottom: 40,
    gap: 26,
  },
});
