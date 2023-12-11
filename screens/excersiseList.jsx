import React, { useState, useEffect } from 'react';
import { ScrollView, Text, StyleSheet, View, TouchableOpacity, Linking } from 'react-native';
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
      fontSize: 30,
      marginTop: 10,
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
      color: isDarkMode ? '#bdbfc6' : 'blue',
      fontSize: 18,
      
    },
    muscleText: {
      color: isDarkMode ? '#bdbfc6' : 'black',
      fontWeight: 'bold',
      fontSize: 24,
      fontStyle: 'italic',
    },
    nameText: {
      color: isDarkMode ? '#bdbfc6' : 'blue',
      fontSize: 18,
      textDecorationLine: 'underline',
    },
  });

  // Component for each exercise
  const Exercise = ({ children }) => (
    <TouchableOpacity style={styles.exerciseTouchable} activeOpacity={0.7}>
      <Text style={styles.exerciseItem}>{children}</Text>
    </TouchableOpacity>
  );

  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      fetch('http://192.168.1.126:3000/api/exersises')
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then(data => {
              setExercises(data);
              setIsLoading(false);
          })
          .catch(error => {
              console.error('Error fetching data:', error);
              setError(error.message);
              setIsLoading(false);
          });
  }, []);

 
  if (isLoading) {
    return <Text>Loading...</Text>;
}

if (error) {
    return <Text>Error: {error}</Text>;
}

const handlePress = (exercise) => {
  // Example URL - replace with your actual URL or a property from 'exercise'
  const url = exercise;

  Linking.openURL(url).catch(err => console.error('An error occurred', err));
};


  // return (
  //   <ScrollView style={styles.container}>
  //     <Text style={styles.categoryTitle}>Chest</Text>
  //     <Exercise>Bench press</Exercise>
  //     <Exercise>Dumbbell chest fly</Exercise>
  //     <Exercise>Pushups</Exercise>
  //     <Exercise>Incline bench press</Exercise>

  //     <Text style={styles.categoryTitle}>Back</Text>
  //     <Exercise>Barbell rows</Exercise>
  //     <Exercise>Lat pulldowns</Exercise>
  //     <Exercise>Seated rows</Exercise>
  //     <Exercise>Deadlift</Exercise>

  //     <Text style={styles.categoryTitle}>Legs</Text>
  //     <Exercise>Bulgarian split squat</Exercise>
  //     <Exercise>Leg press</Exercise>
  //     <Exercise>Front squat</Exercise>
  //   </ScrollView>
  //);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.categoryTitle}>Exercises</Text>
      {exercises.sort((a, b) => a.muscle.localeCompare(b.muscle)).map(exercise => (
        <TouchableOpacity key={exercise.name} onPress={() => handlePress(exercise.link)} style={styles.exerciseTouchable}>
<Text style={styles.exerciseItem}>
  <Text style={styles.muscleText}>{exercise.muscle}</Text> - <Text style={styles.nameText}>{exercise.name}</Text>
</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
  
};


export default ExerciseList;
