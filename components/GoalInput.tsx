import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

type Props = {
  onAddGoal: (enteredText: string) => void;
};

const GoalInput = (props: Props) => {
  const [enteredText, setEnteredText] = useState("");

  const goalInputHandler = (enteredText: string) => {
    setEnteredText(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredText);
    setEnteredText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goals!"
        onChangeText={goalInputHandler}
        value={enteredText}
      />
      <Button title="ADD GOAL" onPress={addGoalHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
