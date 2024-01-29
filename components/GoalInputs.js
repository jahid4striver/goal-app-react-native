import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';


const GoalInputs = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    function handleTextInput(enteredText) {
        setEnteredGoal(enteredText);

    }
    const handleGoalsText = () => {
        props.onAddGoal(enteredGoal)
        setEnteredGoal('')
    }



    return (
        <Modal visible={props.showModal} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require("../assets/images/goal.png")} />
                <TextInput style={styles.textInput} placeholder='Your Course Goal!' value={enteredGoal} onChangeText={handleTextInput} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={handleGoalsText} color="#b180f0" />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.notShowModal} color="#f31282" />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInputs;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'

    },
    textInput: {
        borderWidth: 2,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16,

    },
    buttonContainer: {
        flexDirection: "row",
        marginHorizontal: 8,
    },
    button: {
        width: '30%',
        margin: 8,

    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
});


