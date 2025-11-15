import RumiIcon from "@/assets/images/Myrumi_char.svg"; // 루미 얼굴 아이콘
import { StyleSheet, Text, View } from "react-native";

export default function RumiBubble({
  text,
  time,
}: {
  text: string;
  time: string;
}) {
  return (
    <View>
      <View style={styles.bubble}>
        <Text style={styles.msg}>{text}</Text>
      </View>
      <View style={styles.row}>
        <RumiIcon width={60} height={60} />
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    color: "#666",
  },

  bubble: {
    backgroundColor: "#E65B54",
    paddingTop: 16,
    paddingBottom: 32,
    paddingLeft: 20,
    paddingRight: 16,
    borderRadius: 16,
    maxWidth: "90%",

    shadowColor: "rgba(0,0,0,0.18)",
    shadowOpacity: 1,
    shadowRadius: 12,
    shadowOffset: { width: 4, height: 4 },
    elevation: 4,
  },
  msg: {
    color: "white",
    fontSize: 15,
    lineHeight: 22,
    fontWeight: "600",
  },
});
