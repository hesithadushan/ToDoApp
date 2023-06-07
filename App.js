import { useState } from "react";
import { SafeAreaView, StyleSheet, View, FlatList, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import ReminderItem from "./components/ReminderItem";
import ReminderInput from "./components/ReminderInput";

export default function App() {
  const [reminders, setReminderList] = useState([]);

  function addReminderHandler(enteredReminderText) {
    setReminderList((currentReminders) => [
      ...currentReminders,
      { text: enteredReminderText, id: Math.random().toString() },
    ]);
  }

  function deleteReminderHandler(id) {
    setReminderList((currentReminders) => {
      return currentReminders.filter((reminder) => reminder.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.header}>
        <Text style={{ fontWeight: "bold", fontSize: 35, color: "#f53b57" }}>
          TODO APP
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Icon name="list" size={40} color="#2ecc71" />
          <Icon name="add" size={40} color="#2ecc71" />
        </View>
      </View>

      <ReminderInput onAddReminder={addReminderHandler} />

      <View style={styles.reminderContainer}>
        <FlatList
          data={reminders}
          renderItem={(itemData) => {
            return (
              <ReminderItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteReminderHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "#303952",
    flex: 1,
    padding: 8,
  },
  header: {
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  reminderContainer: {
    flex: 5,
  },
});
