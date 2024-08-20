import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    width: "100%",
    gap: 20,
    padding: 20,
  },
  title: {
    fontSize: 16,
  },
  decription: {
    fontSize: 12,
  },
  date: {
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 20
  },
  addButton: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: 60,
    height: 60,
    bottom: 20,
    right: 20,
    backgroundColor: "#000000",
    borderRadius: 50,
  },
});

export default styles;
