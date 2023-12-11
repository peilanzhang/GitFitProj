import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { useTheme } from '../Theme/themeContext';

const ExerciseList = () => {
  const {isDarkMode} = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#343541' : '#fff',
      paddingTop: 20,
      paddingHorizontal: 16,
    },
    categoryTitle: {
      color: isDarkMode ? '#fff' : '#000',
      fontWeight: 'bold',
      fontSize: 18,
      marginTop: 20,
      marginBottom: 10,
    },
    exerciseItem: {
      color: isDarkMode ? '#fff' : '#000',
      fontSize: 16,
      marginLeft: 10,
      marginTop: 5,
      marginBottom: 5,
    }
  });

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
