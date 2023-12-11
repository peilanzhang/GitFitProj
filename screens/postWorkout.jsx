import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '../Theme/themeContext';

export default function PostWorkout({ navigation }) {
  const { isDarkMode } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#121212' : '#f0f0f0',
      alignItems: 'center',
      paddingTop: 50,
      paddingHorizontal: 20, 
      justifyContent: 'space-between',
    },
    title: {
      color: isDarkMode ? '#fff' : '#000',
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    message: {
      color: isDarkMode ? '#ddd' : '#555', 
      fontSize: 20, 
      textAlign: 'center',
      paddingHorizontal: 10, 
    },
    button: {
      backgroundColor: '#4D9DFF', 
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 30,
      marginBottom: 30, 
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
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nice Work!</Text>
      <Text style={styles.message}>
        Any workout is a goal achieved. {'\n'}
        Don't forget to create your next workout and continue thriving!
      </Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('HomePage')}
      >
        <Text style={styles.buttonText}>Create Next Workout</Text>
      </TouchableOpacity>
    </View>
  );
}
