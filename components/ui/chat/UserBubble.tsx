import { StyleSheet, Text, View } from "react-native";

export default function UserBubble({
  text,
  time,
}: {
  text: string;
  time: string;
}) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.bubble}>
        <Text style={styles.msg}>{text}</Text>
      </View>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "flex-end",
    gap: 4,
  },

  time: {
    marginLeft: 6,
    fontSize: 12,
    color: "#666",
  },

  bubble: {
    backgroundColor: "white",
    paddingTop: 16,
    paddingBottom: 32,
    paddingRight: 20,
    paddingLeft: 16,
    borderRadius: 16,
    maxWidth: "80%",

    shadowColor: "rgba(0,0,0,0.12)",
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { width: 3, height: 3 },
    elevation: 3,
  },

  msg: {
    color: "#000",
    fontSize: 15,
    lineHeight: 22,
    fontWeight: "600",
  },
});
