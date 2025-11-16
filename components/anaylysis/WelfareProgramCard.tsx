import LocationIcon from "@/assets/images/location.svg";
import PhoneIcon from "@/assets/images/phone.svg";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  title: string;
  subtitle: string;
};

export default function WelfareProgramCard({ title, subtitle }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>

      <View style={styles.bottomRow}>
        <TouchableOpacity style={styles.iconRow}>
          <PhoneIcon width={18} height={18} />
          <Text style={styles.iconText}>전화</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconRow}>
          <LocationIcon width={18} height={18} />
          <Text style={styles.iconText}>위치</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 180,
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginRight: 12,

    shadowColor: "rgba(0,0,0,0.12)",
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { width: 4, height: 4 },
    elevation: 6,
  },

  title: {
    fontSize: 15,
    fontWeight: "700",
    color: "#000",
  },

  subtitle: {
    fontSize: 13,
    color: "#777",
    marginTop: 6,
    marginBottom: 12,
  },

  bottomRow: {
    flexDirection: "row",
    gap: 20,
    marginTop: 8,
  },

  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  iconText: {
    color: "#555",
    fontSize: 13,
    fontWeight: "600",
  },
});
