import { Modal, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    tintColor: "black",
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
    borderColor: "lightgrey",
    backgroundColor: "#00000005"
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  deleteDateButton: {
    padding: 2,
    borderRadius: 4,
  },
  dateButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});

export default styles;
