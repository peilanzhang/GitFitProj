import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UpperToolBar from '../toolbars/upperToolbar';
import { useTheme } from '../Theme/themeContext';



export default function WorkoutPage({ navigation}) {
  const handlePostWorkout = () => {
    navigation.navigate('PostWorkout');
  };

  const {isDarkMode} = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#343541' : '#fff',
      alignItems: 'center',
      paddingTop: 20,
      paddingHorizantal: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold', 
      color: isDarkMode ? '#bdbfc6' : 'black',
    },
    target: {
      fontSize: 16,
      color: isDarkMode ? '#bdbfc6' : 'black',
    },
    button: {
      marginTop: 20,
      padding: 10,
      backgroundColor: isDarkMode ? '#566263' : 'blue',
      borderRadius: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
    workoutContent: {
      marginTop: 20,
      color: isDarkMode ? '#fff' : '#fff',
    },
    text:{
      color: isDarkMode ? '#fff' : '#000',
    }
    });

  return (
    <View style={styles.container}>

      <Text style={styles.text}>THIS IS THE WORKOUT PAGE WOOOO</Text>

      <TouchableOpacity onPress={handlePostWorkout} style={styles.button}>
        <Text style={styles.buttonText}>Finish Workout</Text>
      </TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#566263',
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  workoutContent: {
    marginTop: 20,
  },
});