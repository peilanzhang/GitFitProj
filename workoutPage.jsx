import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function WorkoutPage({ navigation}) {
  const handlePostWorkout = () => {
    navigation.navigate('PostWorkout');
  };

  return (
    <View style={styles.container}>
      <Text>THIS IS THE WORKOUT PAGE WOOOO</Text>

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