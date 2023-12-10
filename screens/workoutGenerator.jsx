import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker'

function WorkoutForm() {
  const [selectedWorkoutType, setSelectedWorkoutType] = useState("push");
  const [customExercise, setCustomExercise] = useState('');

  const generateWorkout = () => {
    // Logic to generate workout
    console.log(selectedWorkoutType, customExercise);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Choose Workout Type</Text>
      <Picker
        selectedValue={selectedWorkoutType}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedWorkoutType(itemValue)
        }>
        <Picker.Item label="Push (Shoulders, Chest, Triceps)" value="push" />
        <Picker.Item label="Pull (Back, Biceps)" value="pull" />
        <Picker.Item label="Legs (Quads, Hamstrings, Calves)" value="legs" />
        {/* Add more Picker.Item components as needed */}
      </Picker>

      <Text style={styles.customizationLabel}>Customization</Text>
      <Text style={styles.customizationSubLabel}>Add specific additional exercises you want to do</Text>
      <TextInput
        style={styles.input}
        onChangeText={setCustomExercise}
        value={customExercise}
        placeholder="Add here"
      />

      <TouchableOpacity style={styles.button} onPress={generateWorkout}>
        <Text style={styles.buttonText}>Generate Workout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  label: {
    fontSize: 30,
  },
  picker: {
    height: 75,
    width: '100%',
    marginBottom: 150,
  },
  customizationLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  customizationSubLabel: {
    fontSize: 14,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  }
});

export default WorkoutForm;
