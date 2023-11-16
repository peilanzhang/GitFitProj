import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HomePage() {
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

    </View>
    
  );
}

  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 20, // Add padding to the top to push the content down
      paddingHorizontal: 16, // Add horizontal padding for better readability
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    target: {
        fontSize: 16, 
    }
  });
