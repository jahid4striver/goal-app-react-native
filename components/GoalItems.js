import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const GoalItems = (props) => {
    return (
        <View style={styles.goalItem}>
            <Pressable
                style={({ pressed }) => pressed && styles.onPrssgoalItem}
                android_ripple={{ color: "#dddddd" }} onPress={props.deleteHandler.bind(this, props.id)}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>

    );
};

export default GoalItems;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    onPrssgoalItem: {
        color: "#dddddd",
    },
    goalText: {
        color: 'white',
        padding: 8,
    }
})