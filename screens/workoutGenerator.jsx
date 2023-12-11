import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../Theme/themeContext';
import { useData } from '../DataContext'; // Import the useData hook from the DataContext

function WorkoutForm() {
  const navigation = useNavigation();
 
  const [selectedWorkoutType, setSelectedWorkoutType] = useState('push');
  const [customExercise, setCustomExercise] = useState('');
  const [muscleGroup, setMuscleGroup] = useState(['Shoulders', 'Chest', 'Triceps']);
  const { setData } = useData(); 

  useEffect(() => {
    if (selectedWorkoutType=='push') {
      setMuscleGroup(['Shoulders', 'Chest', 'Triceps']);
    }
    else if (selectedWorkoutType=='pull') {

      setMuscleGroup(['Back','Back', 'Biceps']);
    }
    else if (selectedWorkoutType=='legs') {

      setMuscleGroup(['Legs','Legs']);
    }

  }, [selectedWorkoutType]);

  useEffect(() => {
    // Perform other actions based on muscleGroup here
  }, [muscleGroup]);

  const generateWorkout = () => {
    console.log('muscleGroup for fetch:', muscleGroup)
    fetch('http://192.168.1.126:3000/api/generateWorkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        muscles: muscleGroup,
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.exercises.length);
      setData(data.exercises);
    })
    .catch(error => {
      console.error(error);
      // Handle errors...
    });
    navigation.navigate('HomePage');

  };
  
  const {isDarkMode} = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: isDarkMode ? '#343541' : '#fff',
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'stretch',
    },
    label: {
      color: isDarkMode ? '#fff' : '#000',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    picker: {
      color: 'white',
      height: 75,
      width: '100%',
      marginBottom: 150,
    },
    customizationLabel: {
      color: isDarkMode ? '#fff' : '#000',
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    customizationSubLabel: {
      color: isDarkMode ? '#fff' : '#000',
      fontSize: 14,
      marginBottom: 10,
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
      backgroundColor: '#4D9DFF',
      paddingVertical: 12, 
      paddingHorizontal: 20,
      borderRadius: 25, 
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#6200EE',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
    },
    buttonText: {
      color: isDarkMode ? '#fff' : '#000',
      fontSize: 16,
    }
  });
  return (
    <View style={styles.container}>
  <Text style={styles.label}>Choose Workout Type</Text>
  <Picker
    selectedValue={selectedWorkoutType}
    style={styles.picker}
    onValueChange={(itemValue) => setSelectedWorkoutType(itemValue)}
    itemStyle={{ color: isDarkMode ? '#fff' : 'black' }} // This line should be inside the brackets
  >
    <Picker.Item label="Push (Shoulders, Chest, Triceps)" value={'push'} />
    <Picker.Item label="Pull (Back, Biceps)" value={'pull'} />
    <Picker.Item label="Legs (Leg muscles)" value={'legs'} />
    {/* Add more Picker.Item components as needed */}
  </Picker>


      {/* <Text style={styles.customizationLabel}>Customization</Text>
      <Text style={styles.customizationSubLabel}>Add specific additional exercises you want to do</Text>
      <TextInput
        style={styles.input}
        onChangeText={setCustomExercise}
        value={customExercise}
        placeholder="Add here"
      /> */}

      <TouchableOpacity style={styles.button} onPress={generateWorkout}>
        <Text style={styles.buttonText}>Generate Workout</Text>
      </TouchableOpacity>
    </View>
  );
}



export default WorkoutForm;
