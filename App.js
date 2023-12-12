import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from './Theme/themeContext';
import HomePage from './screens/HomePage'; 
import WorkoutPage from './screens/workoutPage';
import PostWorkout from './screens/postWorkout';
import LowerToolbar from './toolbars/lowerToolbar';
import InputPage from './screens/inputExcersise';
import GeneratorPage from './screens/workoutGenerator';
import ExerciseList from './screens/excersiseList';
import UpperToolbar from './toolbars/upperToolbar';
import Settings from './screens/AppSettings'
import WorkoutHistory from './screens/workoutHistory';
import { DataProvider,AnotherProvider } from './DataContext'; // Import the DataProvider


const Stack = createStackNavigator();

  export default function App() {
    return (
      <ThemeProvider>
        <DataProvider>
          <AnotherProvider>
        <NavigationContainer>
          <UpperToolbar/>
          <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Welcome' }}
          />  
          <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ title: 'Settings' }}
        />

          <Stack.Screen name="HomePage" 
          component={HomePage}
          options={{ title: 'Home' }} 
          />
          <Stack.Screen name="WorkoutPage" 
          component={WorkoutPage}
          options={{ title: 'Workout' }} 
          />
          <Stack.Screen name="PostWorkout"
          component={PostWorkout}
          options={{title: 'Congrats'}} 
          />
          <Stack.Screen name="InputPage"
          component={InputPage}
          options={{title: 'Input'}}
          />
          <Stack.Screen name="GeneratorPage"
          component={GeneratorPage}
          options={{title: 'Generator'}}
          />
          <Stack.Screen name="ExerciseList"
          component={ExerciseList}
          options={{title: 'Exercise List'}}
          />
          <Stack.Screen name="WorkoutHistory"
          component={WorkoutHistory}
          options={{title: 'Workout History'}}
          />

        </Stack.Navigator>
        <LowerToolbar />
      </NavigationContainer>
      </AnotherProvider>
      </DataProvider>
    </ThemeProvider>
  );
}

function HomeScreen({ navigation }) {
  const handleClicktoStart = () => {
    navigation.navigate('HomePage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GitFit</Text>
      <TouchableOpacity onPress={handleClicktoStart} style={styles.button}>
        <Text style={styles.buttonText}>Click to get started!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50, // Adjust the font size as needed
    fontWeight: 'bold', // You can add other styles as needed
    marginBottom: 40, // Add margin to separate the title from the button
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#4D9DFF', 
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff', 
    fontSize: 16,
  },
});