import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useTheme } from '../Theme/themeContext';

function ExerciseForm() {
  const [exerciseName, setExerciseName] = useState('');
  const [muscleWorked, setMuscleWorked] = useState('');
  const [tutorialLink, setTutorialLink] = useState('');

  const handleSubmit = () => {
    console.log(exerciseName, muscleWorked, tutorialLink);
  };

  const { isDarkMode } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: isDarkMode ? '#343541' : '#fff',
      flex: 1,
      padding: 20,
    },
    label: {
      color: isDarkMode ? '#D7DADC' : '#000',
      fontSize: 18,
      marginBottom: 8,
    },
    input: {
      color: isDarkMode ? '#D7DADC' : '#000',
      height: 50,
      backgroundColor: isDarkMode ? '#2D2F36' : '#F0F0F0',
      borderColor: isDarkMode ? '#3A3C41' : '#CCC',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 15,
      paddingHorizontal: 10,
      fontSize: 16,
    },
    button: {
      backgroundColor: '#4D9DFF',
      paddingVertical: 12,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 10,
      shadowOpacity: 0.2,
      shadowRadius: 3,
      shadowOffset: { width: 1, height: 1 },
      elevation: 3,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: '600',
    }
  });

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex: 1}}
    >
      <ScrollView style={styles.container}>
        <Text style={styles.label}>Exercise Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={setExerciseName}
          value={exerciseName}
          placeholder="Enter exercise name"
          placeholderTextColor={isDarkMode ? '#6C6F76' : '#888'}
        />

        <Text style={styles.label}>Muscle Worked</Text>
        <TextInput
          style={styles.input}
          onChangeText={setMuscleWorked}
          value={muscleWorked}
          placeholder="Enter muscle group"
          placeholderTextColor={isDarkMode ? '#6C6F76' : '#888'}
        />

        <Text style={styles.label}>Link to Exercise Tutorial (optional)</Text>
        <TextInput
          style={styles.input}
          onChangeText={setTutorialLink}
          value={tutorialLink}
          placeholder="Enter URL"
          placeholderTextColor={isDarkMode ? '#6C6F76' : '#888'}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default ExerciseForm;
