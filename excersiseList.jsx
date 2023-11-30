import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

const ExerciseList = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.categoryTitle}>Chest</Text>
      <Text style={styles.exerciseItem}>Bench press</Text>
      <Text style={styles.exerciseItem}>Dumbbell chest fly</Text>
      <Text style={styles.exerciseItem}>Pushups</Text>
      <Text style={styles.exerciseItem}>Incline bench press</Text>

      <Text style={styles.categoryTitle}>Back</Text>
      <Text style={styles.exerciseItem}>Barbell rows</Text>
      <Text style={styles.exerciseItem}>Lat pulldowns</Text>
      <Text style={styles.exerciseItem}>Seated rows</Text>
      <Text style={styles.exerciseItem}>Deadlift</Text>

      <Text style={styles.categoryTitle}>Legs</Text>
      <Text style={styles.exerciseItem}>Bulgarian split squat</Text>
      <Text style={styles.exerciseItem}>Leg press</Text>
      <Text style={styles.exerciseItem}>Front squat</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Set your desired background color
    padding: 10,
  },
  categoryTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  exerciseItem: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  }
});

export default ExerciseList;
