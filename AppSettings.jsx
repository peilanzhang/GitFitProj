import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Switch, TouchableOpacity, Button } from 'react-native'; // or your UI library

const Stack = createStackNavigator()

export default function AppSettings(){
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Unit of measurement</Text>
        <Switch
          // onValueChange={handleMeasurementChange}
          // value={isMetric}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Dark or Light mode</Text>
        <Switch
          // onValueChange={handleThemeChange}
          // value={isDarkMode}
        />
      </View>

      <View style={styles.settingItem}>
        <Button
          title="Reset app: erase all data"
          // onPress={handleReset}
        />
      </View>

      <View style={styles.settingItem}>
        <TouchableOpacity
          // onPress={goToWorkoutHistory}
        >
          <Text style={styles.linkText}>Workout history</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}



// You would define your styles here to match the design in the image
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