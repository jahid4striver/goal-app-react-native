import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalInputs from './components/GoalInputs';
import GoalItems from './components/GoalItems';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isVisibleModal, setIsVisibleModal] = useState(false)

  const handleModalVisibility = () => {
    setIsVisibleModal(true)
  }
  const handleModalNotVisible = () => {
    setIsVisibleModal(false)
  }

  function handleGoalsText(enteredGoal) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoal, id: Math.random().toString() }
    ]);
    handleModalNotVisible();
  }

  const handleDeleteHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return filter = currentCourseGoals.filter((goal) => goal.id !== id)
    })
  }

  console.log("Hello");

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color="#b180f0" onPress={handleModalVisibility} />
      {isVisibleModal && <GoalInputs notShowModal={handleModalNotVisible} showModal={isVisibleModal} onAddGoal={handleGoalsText} />}
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={itemData => {
          return <GoalItems text={itemData.item.text} id={itemData.item.id} deleteHandler={handleDeleteHandler} />
        }}
          keyExtertor={(item, index) => {
            item.id
          }}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  }
});
