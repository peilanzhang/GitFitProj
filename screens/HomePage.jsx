import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '../Theme/themeContext';
import { useData,useAnother } from '../DataContext'; // Import the useData hook from the DataContext

export default function HomePage({ navigation }) {
  const { data } = useData(); // Access the data from the context
  const { anotherData } = useAnother(); // Access the data from the context
  const handleStartWorkout = () => {
    console.log('data from context:', data);
    navigation.navigate('WorkoutPage');

  };
  const handleGenerate = () => {
    navigation.navigate('GeneratorPage');

  };

  
  useEffect(() => {console.log(data)}, []);

  const { isDarkMode } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#343541' : '#F7F7F7',
      paddingTop: 20,
      paddingHorizontal: 16,
      alignContent: 'center',
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      color: isDarkMode ? '#FFFFFF' : '#000000',
      alignSelf: 'center',
      marginBottom: 10,
    },
    midtext: {
      fontSize: 20,
      color: isDarkMode ? '#FFFFFF' : '#000000',
      alignSelf: 'center',
      marginBottom: 10,
      alignContent: 'center',
    },
    target: {
      fontSize: 18,
      color: isDarkMode ? '#FFFFFF' : '#000000',
      alignSelf: 'center',
      marginBottom: 20,
      alignContent: 'center',
    },
    button: {
      backgroundColor: '#4D9DFF',
      paddingVertical: 12,
      paddingHorizontal: 25,
      borderRadius: 25,
      alignSelf: 'center',
      marginTop: 30,
      shadowOpacity: 0.3,
      shadowRadius: 4,
      shadowOffset: { height: 2, width: 0 },
      elevation: 6,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 20,
      fontWeight: '600',
    },
    workoutContent: {
      alignSelf: 'center',
    },
    workoutText: {
      fontSize: 16,
      color: isDarkMode ? '#bdbfc6' : '#333333',
      lineHeight: 24,
      fontWeight: '400',
      alignSelf: 'center',
    },
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Today's Workout:</Text>
      <Text style={styles.target}>{anotherData}</Text>
      <View style={styles.container}>
  {data ? (
    <>
      <Text style={styles.title}>Exercise Names:</Text>
      {data.map((exercise, index) => (
        <Text key={index} style={styles.workoutText}>
          {exercise.name}
        </Text>
      ))}
      <TouchableOpacity onPress={handleStartWorkout} style={styles.button}>
        <Text style={styles.buttonText}>Start Workout</Text>
      </TouchableOpacity>
    </>
  ) : (
    <View >
    <Text style={styles.midtext}>Generate a workout</Text>
    <TouchableOpacity onPress={handleGenerate} style={styles.button}>
        <Text style={styles.buttonText}>Generate Workout</Text>
      </TouchableOpacity>
    </View>
  )}
</View>

      
    </ScrollView>
  );
}
