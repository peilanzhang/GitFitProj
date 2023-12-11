import React from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../Theme/themeContext';

const ExerciseList = () => {
  const { isDarkMode } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#343541' : '#F7F7F7',
      paddingTop: 20,
      paddingHorizontal: 16,
    },
    categoryTitle: {
      color: isDarkMode ? '#FFFFFF' : '#000000',
      fontWeight: 'bold',
      fontSize: 22,
      marginTop: 30,
      marginBottom: 15,
    },
    exerciseTouchable: {
      backgroundColor: isDarkMode ? '#434857' : '#FFFFFF',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: isDarkMode ? '#555' : '#DDD',
      padding: 10,
      marginTop: 10,
      marginBottom: 5,
      shadowOpacity: 0.2,
      shadowRadius: 3,
      shadowOffset: { width: 1, height: 1 },
      elevation: 3, // Elevation for Android (shadow)
    },
    exerciseItem: {
      color: isDarkMode ? '#bdbfc6' : '#333',
      fontSize: 18,
    },
  });

  // Component for each exercise
  const Exercise = ({ children }) => (
    <TouchableOpacity style={styles.exerciseTouchable} activeOpacity={0.7}>
      <Text style={styles.exerciseItem}>{children}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.categoryTitle}>Chest</Text>
      <Exercise>Bench press</Exercise>
      <Exercise>Dumbbell chest fly</Exercise>
      <Exercise>Pushups</Exercise>
      <Exercise>Incline bench press</Exercise>

      <Text style={styles.categoryTitle}>Back</Text>
      <Exercise>Barbell rows</Exercise>
      <Exercise>Lat pulldowns</Exercise>
      <Exercise>Seated rows</Exercise>
      <Exercise>Deadlift</Exercise>

      <Text style={styles.categoryTitle}>Legs</Text>
      <Exercise>Bulgarian split squat</Exercise>
      <Exercise>Leg press</Exercise>
      <Exercise>Front squat</Exercise>
    </ScrollView>
  );
};

export default ExerciseList;
