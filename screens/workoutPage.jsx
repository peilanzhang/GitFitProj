import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { useTheme } from '../Theme/themeContext';

export default function WorkoutPage({ navigation }) {
  const handlePostWorkout = () => {
    navigation.navigate('PostWorkout');
  };

  const { isDarkMode } = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#121212' : '#f0f0f0',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    title: {
      fontSize: 28, 
      fontWeight: 'bold',
      color: isDarkMode ? '#fff' : '#000000',
      marginBottom: 8, 
    },
    text: {
      fontSize: 20, 
      color: isDarkMode ? '#fff' : '#000000',
      textAlign: 'center',
      paddingHorizontal: 10,
      marginBottom: 16, 
    },
    button: {
      marginTop: 20,
      paddingVertical: 15,
      paddingHorizontal: 30,
      backgroundColor: '#4D9DFF',
      borderRadius: 25,
      shadowColor: '#4D9DFF',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '500', 
    },
    workoutContent: {
      marginTop: 20,
      color: isDarkMode ? '#fff' : '#000',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Workout Progress</Text>
      <Text style={styles.text}>You're doing great! Keep up the momentum and push through!</Text>
      <TouchableOpacity onPress={handlePostWorkout} style={styles.button}>
        <Text style={styles.buttonText}>Finish Workout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
