import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage'; 
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'GitFit' }}
        />
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  const handleButtonPress = () => {
    navigation.navigate('HomePage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GitFit</Text>
      <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
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
    fontSize: 24, // Adjust the font size as needed
    fontWeight: 'bold', // You can add other styles as needed
    marginBottom: 20, // Add margin to separate the title from the button
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#566263', // Change the color as needed
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff', // Change the color as needed
    fontSize: 16,
  },
});