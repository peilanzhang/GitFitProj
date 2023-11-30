import React from 'react';
import { View, Text, Switch, TouchableOpacity, Button, StyleSheet , TextInput} from 'react-native'; // or your UI library

const SettingsScreen = () => {
  // State variables and functions to handle toggle switches and other interactive elements would go here

  return (
    <View style={styles.container}>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Unit of measurement</Text>
        <TextInput
        style={styles.input}
        placeholder="Metric or Imperial"
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
        <TouchableOpacity
          // onPress={goToWorkoutHistory}
        >
          <Text style={styles.linkText}>Workout history</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.settingItem}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Reset Data</Text>
          
                   </TouchableOpacity>
      </View>
    </View>
  );
};

// You would define your styles here to match the design in the image
const styles = StyleSheet.create({
  container: {
    // styles for your container
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  buttonText: {
    marginTop: 20,
    color: 'red',
    fontSize: 25,
    
  },  
  input: {
    height: 30,
    width: '40%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
    padding: 8,
  },
  // ... other styles
});

export default SettingsScreen;
