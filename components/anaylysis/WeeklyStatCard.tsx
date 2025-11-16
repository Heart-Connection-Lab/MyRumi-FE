import { StyleSheet, Text, View } from "react-native";

export default function WeeklyStatCard({
  icon: Icon,
  value,
  diff,
  diffType,
  title,
  description,
}) {
  return (
    <View style={styles.card}>
      {/* top: icon + value + (지난 주 대비 + diff) */}
      <View style={styles.topRow}>
        <View style={styles.leftRow}>
          {Icon && <Icon width={18} height={18} style={styles.icon} />}
          <Text style={styles.value}>{value}</Text>
        </View>

        <View style={styles.rightRow}>
          <Text style={styles.small}>지난 주 대비</Text>
          <Text
            style={[
              styles.diff,
              diffType === "up" ? styles.diffUp : styles.diffDown,
            ]}
          >
            {diff}
          </Text>
        </View>
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 16,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 6,
  },

  leftRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  rightRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  icon: {
    marginBottom: 2,
  },

  value: {
    fontSize: 24,
    fontWeight: "700",
    color: "#E65B54",
  },

  small: {
    color: "#999",
    fontSize: 11,
  },

  diff: {
    fontSize: 12,
    fontWeight: "600",
  },

  diffUp: {
    color: "#E65B54",
  },

  diffDown: {
    color: "#4A90E2",
  },

  title: {
    fontSize: 14,
    fontWeight: "700",
    marginTop: 4,
    marginBottom: 2,
    color: "#000",
  },

  desc: {
    fontSize: 12,
    color: "#777",
  },
});
