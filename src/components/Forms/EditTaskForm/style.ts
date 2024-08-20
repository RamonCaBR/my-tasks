import { Modal, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "white",
    margin: 20,
    gap: 28,
    borderRadius: 8,
    padding: 18,
    borderWidth: 1,
    borderColor: "lightgrey",
  },
  deleteTaskButton: {
    alignSelf: "flex-end",
  },
  completeTaskButton: {
    alignSelf: "flex-end",
  },
  completeTaskText: {
    color: "#1b75d0",
  },
  input: {
    tintColor: "black",
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
    borderColor: "lightgrey",
    backgroundColor: "#00000005",
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
