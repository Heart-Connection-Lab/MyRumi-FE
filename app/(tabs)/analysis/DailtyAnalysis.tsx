import TodaySchedule from "@/components/anaylysis/TodaySchedule";
import TodayStatus from "@/components/anaylysis/TodayStatus";
import { View } from "react-native";

export default function DailyAnalysis() {
  return (
    <View>
      <TodayStatus />
      <TodaySchedule />
    </View>
  );
}
