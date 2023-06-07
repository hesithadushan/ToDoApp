import { useState } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native"

function ReminderInput(props){
    const [enteredReminderText, setEnteredReminderText] = useState(''); 
    
    function reminderInputHandler(enteredText) {
        setEnteredReminderText(enteredText);
    }
    function addReminderHandler() {
        props.onAddReminder(enteredReminderText);
        setEnteredReminderText('');
    }

    return (
        <View style={styles.inputContainer}>
        <TextInput 
        style={styles.textInput} 
        placeholder="Enter Reminder.... "
        onChangeText={reminderInputHandler}
        value={enteredReminderText}
        />

        <Button 
        title="Add Reminder"
        onPress={addReminderHandler} color='#27ae60'
        
        />
      </View>
    );
};
 
export default ReminderInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 3,
        borderBottomColor: '#d35400'
      },
    
      textInput: {
        fontSize:18,
        color:"#f7f1e3",
        borderWidth: 2,
        borderColor: '#b33939',
        borderRadius: 6,
        width: '70%',
        marginRight: 8,
        padding: 8
      }
});


