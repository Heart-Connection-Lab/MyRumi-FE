import { StyleSheet, Text, View } from "react-native";

import IconMoney from "@/assets/images/schedule_money.svg";
import IconPill from "@/assets/images/schedule_pill.svg";
import IconSmile from "@/assets/images/schedule_smile.svg";

type ScheduleType = "money" | "pill" | "class";

type Props = {
  type: ScheduleType;
  title: string;
  subtitle: string;
  rightLabel: string; // e.g. “20분 소요”, “5분 남음”, “완료”
  rightSub?: string; // e.g. “이동 시간”
};

const ICON_MAP = {
  money: IconMoney,
  pill: IconPill,
  class: IconSmile,
};

export default function ScheduleCard({
  type,
  title,
  subtitle,
  rightLabel,
  rightSub,
}: Props) {
  const Icon = ICON_MAP[type];

  return (
    <View style={styles.card}>
      {/* Left Icon */}
      <View style={styles.iconCircle}>
        <Icon width={24} height={24} />
      </View>

      {/* Center Text */}
      <View style={styles.center}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      {/* Right Info */}
      <View style={styles.right}>
        <Text style={styles.rightLabel}>{rightLabel}</Text>
        {rightSub && <Text style={styles.rightSub}>{rightSub}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 14,
    alignItems: "center",
    gap: 14,
    marginBottom: 12,

    shadowColor: "#878787",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  iconCircle: {
    width: 42,
    height: 42,
    borderRadius: 999,
    backgroundColor: "#F1F7EE",
    alignItems: "center",
    justifyContent: "center",
  },

  center: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },

  subtitle: {
    fontSize: 13,
    fontWeight: "500",
    color: "#777",
    marginTop: 4,
  },

  right: {
    alignItems: "flex-end",
    justifyContent: "center",
  },

  rightLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#494949",
  },

  rightSub: {
    fontSize: 11,
    fontWeight: "500",
    color: "#999",
    marginTop: 2,
  },
});
