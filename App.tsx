import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

type CourseGoals = { text: string; id: string };

export default function App() {
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

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
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
