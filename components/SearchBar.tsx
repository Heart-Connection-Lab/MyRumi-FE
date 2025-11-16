import SearchIcon from "@/assets/images/search.svg";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar() {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        placeholder="복지관이나 프로그램을 검색해보세요"
        placeholderTextColor="#999"
        style={styles.input}
      />
      <SearchIcon width={20} height={20} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 5,
    shadowColor: "rgba(0,0,0,0.05)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 3,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 15,
    color: "#000",
  },
});
