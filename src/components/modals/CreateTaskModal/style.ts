import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    gap: 28,
    width: "90%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 18,
    borderWidth: 1,
    borderColor: "lightgrey",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default styles;
