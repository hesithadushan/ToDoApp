import { StyleSheet, View, Text, Pressable } from "react-native";


function ReminderItem(props){
    return (
      <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
        <View  style={styles.reminderItem}>
          <Text style={styles.reminderText}>{props.text}</Text>
          </View>
      </Pressable>
    );
}

export default ReminderItem;

const styles = StyleSheet.create({
    reminderItem:{
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#218c74',
      },
      reminderText:{
        fontSize:20,
        color: '#f7f1e3'
      }
});