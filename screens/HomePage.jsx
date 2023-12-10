import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UpperToolBar from '../toolbars/upperToolbar';

const Stack = createStackNavigator()

export default function HomePage({ navigation }) {
  const handleStartWorkout = () => {
    navigation.navigate('WorkoutPage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Workout: {'\n'}</Text>
      <Text style={styles.target}>Push{'\n'}</Text>
      <View style={styles.workoutContent}>
        <Text>Workout 1{'\n'}</Text>
        <Text>Workout 2{'\n'}</Text>
        <Text>Workout 3{'\n'}</Text>
        <Text>Workout 4{'\n'}</Text>
      </View>

      <TouchableOpacity onPress={handleStartWorkout} style={styles.button}>
        <Text style={styles.buttonText}>Start Workout</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  target: {
    fontSize: 16,
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
