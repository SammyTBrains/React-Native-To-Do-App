import { View, Text, StyleSheet } from "react-native";

type Props = { text: string };

const GoalItem = (props: Props) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#170acc",
  },
  goalText: {
    color: "white",
  },
});
