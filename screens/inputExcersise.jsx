import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useTheme } from '../Theme/themeContext';

function ExerciseForm() {
  const [exerciseName, setExerciseName] = useState('');
  const [muscleWorked, setMuscleWorked] = useState('');
  const [tutorialLink, setTutorialLink] = useState('');

  const handleSubmit = () => {
    // Process the data here or pass it to a parent component
    console.log(exerciseName, muscleWorked, tutorialLink);
  };

  const {isDarkMode} = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: isDarkMode ? '#343541' : '#fff',
      flex: 1,
      padding: 20,
      justifyContent: 'center',
    },
    label: {
      color: isDarkMode ? '#fff' : '#000',
      fontSize: 30,
    },
    input: {
      color: isDarkMode ? '#fff' : '#000',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      padding: 10,
      marginBottom: 20,
    },
    button: {
      color: isDarkMode ? '#fff' : '#000',
      backgroundColor: 'purple',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Exercise name</Text>
      <TextInput
        style={styles.input}
        onChangeText={setExerciseName}
        value={exerciseName}
        placeholder="Input here"
      />

      <Text style={styles.label}>Muscle worked</Text>
      <TextInput
        style={styles.input}
        onChangeText={setMuscleWorked}
        value={muscleWorked}
        placeholder="Input here"
      />

      <Text style={styles.label}>Link to exercise tutorial (optional)</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTutorialLink}
        value={tutorialLink}
        placeholder="Input here"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
    padding: 8,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  }
});

export default ExerciseForm;
