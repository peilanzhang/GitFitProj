import React from 'react';
import { View, Text, Switch, TouchableOpacity, Button,StyleSheet,TextInput } from 'react-native'; // or your UI library
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../Theme/themeContext';

 function AppSettings() {
  const navigation = useNavigation();

  const goToWorkoutHistory = () => {
    navigation.navigate('WorkoutHistory')
  };

  const { isDarkMode , toggleDarkMode} = useTheme();
  const [selectedUnit, setSelectedUnit] = React.useState('Metric');

  const handleUnitChange = (unit) => {
    setSelectedUnit(unit);
  };

  // Define styles conditionally based on isDarkMode
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#343541' : '#fff',
      alignItems: 'center',
      paddingTop: 20,
      paddingHorizantal: 16,
    },
    settingItem: {
      // styles for each setting item
    },
    settingLabel: {
      // styles for setting labels
      fontSize: 24,
      padding: 10,
      color: isDarkMode ? '#bdbfc6' : 'black',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
      height: 40,
    },
    linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 20,
    padding: 10.
    },
    switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    },
    buttonText: {
    color: 'red',
    fontSize: 20,
    padding: 10,
    borderRadius: 5,
    },
    unitButton: {
      fontSize: 18,
      color: isDarkMode ? '#bdbfc6' : 'black',
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Unit of measurement</Text>
        <View style={styles.unitButton}>

          {/* Metric and Imperial Buttons  */}
          <TouchableOpacity
              style={[styles.unitButton, selectedUnit === 'Metric' && styles.selectedUnit]}
              onPress={() => handleUnitChange('Metric')}>
            <Text style={[styles.unitButton, selectedUnit === 'Metric' && styles.selectedUnit]}>Metric</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={[styles.unitButton, selectedUnit === 'Imperial' && styles.selectedUnit]}
              onPress={() => handleUnitChange('Imperial')}>
            <Text style={[styles.unitButton, selectedUnit === 'Imperial' && styles.selectedUnit]}>Imperial</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Dark Mode Switch  */}
      <View style={styles.switchContainer}>
        <Text style={styles.settingLabel}>Dark Mode</Text>
        <Switch
          value = {isDarkMode}
          onValueChange={toggleDarkMode}
        />
      </View>

      {/* View Workout History Button */}
      <TouchableOpacity style={styles.linkButton} onPress={goToWorkoutHistory}>
        <Text style={styles.linkText}>View Workout History</Text>
      </TouchableOpacity>

      <View style={styles.settingItem}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Reset Data</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}



// You would define your styles here to match the design in the image
const styles = StyleSheet.create({
  container: {
    // styles for container
    alignItems: 'center', 
    justifyContent: 'center'
  },

  settingItem: {
    // styles for each setting item
  },
  settingLabel: {
    // styles for setting labels
    fontSize: 24,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
  linkText: {
  color: 'blue',
  textDecorationLine: 'underline',
  fontSize: 20,
  padding: 10.
  },
  switchContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 20,
  },
  buttonText: {
  color: 'red',
  fontSize: 20,
  padding: 10,
  borderRadius: 5,
  },
  unitButton: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },

});
export default AppSettings;
