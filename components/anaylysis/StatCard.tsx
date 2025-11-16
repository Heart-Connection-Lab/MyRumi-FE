import ChatIcon from "@/assets/images/stat_chat.svg";
import FamilyIcon from "@/assets/images/stat_phone.svg";
import StepsIcon from "@/assets/images/stat_walk.svg";
import { StyleSheet, Text, View } from "react-native";

type StatCardProps = {
  icon: "steps" | "chat" | "family";
  value: string;
  label: string;
};

const iconMap = {
  steps: <StepsIcon width={20} height={20} />,
  chat: <ChatIcon width={20} height={20} />,
  family: <FamilyIcon width={20} height={20} />,
};

export default function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        {iconMap[icon]}
        <Text style={styles.value}>{value}</Text>
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    gap: 6,

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  value: {
    fontSize: 16,
    fontWeight: "700",
    color: "#E65B54",
  },

  label: {
    fontSize: 12,
    fontWeight: "600",
    color: "#777",
  },
});
