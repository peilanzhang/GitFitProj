import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '../Theme/themeContext';
import { useData } from '../DataContext'; // Import the useData hook from the DataContext
import WorkoutItem from './workoutItem';

export default function WorkoutPage({ navigation }) {

  const { data } = useData(); // Access the data from the context
  const handlePostWorkout = () => {
    navigation.navigate('PostWorkout');
  };

  const { isDarkMode } = useTheme();

  const [seconds, setSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  // Start the timer
  const startTimer = () => {
    setTimerActive(true);
  };

  // Stop the timer
  const stopTimer = () => {
    setTimerActive(false);
  };

  // Reset the timer
  const resetTimer = () => {
    setSeconds(0);
    setTimerActive(false);
  };

  // Effect for timer
  useEffect(() => {
    let interval;
    if (timerActive) {
      interval = setInterval(() => {
        setSeconds((secs) => secs + 1);
      }, 1000);
    } else if (!timerActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerActive, seconds]);

  // Format the timer
  const formatTime = (secs) => {
    let minutes = Math.floor(secs / 60);
    let seconds = secs % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#343541' : '#f7f7f7',
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
      alignSelf: 'center', // This will center the button in its parent container
      // width: 200, // Uncomment and adjust this as needed to set a specific width for the button
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
    timer: {
      fontSize: 24,
      color: isDarkMode ? '#fff' : '#000',
      marginVertical: 20,
    },
    timerButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginBottom: 20,
    },
    startButton: {
      backgroundColor: 'green',
    },
    stopButton: {
      backgroundColor: 'red',
    },
    resetButton: {
      backgroundColor: 'grey',
    },
  });

  return (
    <ScrollView >
            <Text style={styles.timer}>Rest Timer: {formatTime(seconds)}</Text>
            <View style={styles.timerButtonContainer}>
        <TouchableOpacity style={[styles.button, styles.startButton]} onPress={startTimer}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.stopButton]} onPress={stopTimer}>
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={resetTimer}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
      {data.map((exercise, index) => (
        <WorkoutItem
          key={index}
          name={exercise.name}
          muscle={exercise.muscle}
          link={exercise.link}
        />
      ))}

      <TouchableOpacity style={styles.button} onPress={handlePostWorkout}>
        <Text style={styles.buttonText}>Finish Workout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}