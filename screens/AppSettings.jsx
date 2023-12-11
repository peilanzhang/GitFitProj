import React from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../Theme/themeContext';
import WorkoutHistory from './workoutHistory';

function AppSettings() {
  const navigation = useNavigation();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [selectedUnit, setSelectedUnit] = React.useState('Metric');

  const handleUnitChange = (unit) => {
    setSelectedUnit(unit);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#343541' : '#F7F7F7',
      paddingTop: 20,
      paddingHorizontal: 16,
    },
    settingItem: {
      width: '100%',
      paddingVertical: 16,
    },
    settingLabel: {
      fontSize: 18,
      fontWeight: '500',
      paddingBottom: 10,
      color: isDarkMode ? '#FFF' : '#000',
    },
    button: {
      paddingVertical: 12,
      paddingHorizontal: 25,
      borderRadius: 25,
      backgroundColor: isDarkMode ? '#555' : '#EFEFEF',
      marginVertical: 10,
    },
    buttonText: {
      fontSize: 16,
      color: isDarkMode ? '#FFF' : '#000',
      textAlign: 'center',
    },
    switchContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: isDarkMode ? '#555' : '#EFEFEF',
    },
    linkText: {
      color: isDarkMode ? '#4D9DFF' : '#007AFF',
      fontSize: 18,
      paddingVertical: 10,
    },
    selectedUnit: {
      fontWeight: '700',
    },
  });

  return (
    <View style={styles.container}>
      {/* Unit of Measurement */}
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Unit of Measurement</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity
            style={[styles.button, selectedUnit === 'Metric' ? { backgroundColor: '#4D9DFF' } : {}]}
            onPress={() => handleUnitChange('Metric')}>
            <Text style={[styles.buttonText, selectedUnit === 'Metric' && styles.selectedUnit]}>
              Metric
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, selectedUnit === 'Imperial' ? { backgroundColor: '#4D9DFF' } : {}]}
            onPress={() => handleUnitChange('Imperial')}>
            <Text style={[styles.buttonText, selectedUnit === 'Imperial' && styles.selectedUnit]}>
              Imperial
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Dark Mode Switch */}
      <View style={styles.switchContainer}>
        <Text style={styles.settingLabel}>Dark Mode</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleDarkMode}
          value={isDarkMode}
        />
      </View>

      {/* View Workout History */}
      <TouchableOpacity style={styles.settingItem} onPress={WorkoutHistory}>
        <Text style={styles.linkText}>View Workout History</Text>
      </TouchableOpacity>

      {/* Reset Data */}
      <TouchableOpacity style={styles.settingItem}>
        <Text style={[styles.linkText, { color: '#FF3B30' }]}>Reset Data</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AppSettings;