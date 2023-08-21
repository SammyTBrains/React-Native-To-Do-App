import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

type CourseGoals = { text: string; id: string };

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState<CourseGoals[]>([]);

  const addGoalHandler = (enteredText: string) => {
    if (enteredText.length === 0) {
      return;
    }

    setCourseGoals((currentCourseGoals: CourseGoals[]) => [
      ...currentCourseGoals,
      { text: enteredText, id: Math.random().toString() },
    ]);
  };

  const deleteGoalHandler = (id: string) => {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => id !== goal.id)
    );
  };

  const modalToggleVisibilityHandler = () => {
    setModalIsVisible((prevState) => !prevState);
  };

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#170acc"
        onPress={modalToggleVisibilityHandler}
      />
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteHandler={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
});
