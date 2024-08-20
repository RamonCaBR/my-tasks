import { Button, Modal, View } from "react-native";
import styles from "./style";
import CreateTaskForm from "../../Forms/CreateTaskForm";

type CreateTaskModalProps = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CreateTaskModal({
  modalVisible,
  setModalVisible,
}: CreateTaskModalProps) {
  return (
    <View style={styles.centeredView}>
      <Modal transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CreateTaskForm setModalVisible={setModalVisible} />
            <Button
              title="Cancelar"
              color={"black"}
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
