// In WorkoutHistory.jsx
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useTheme } from '../Theme/themeContext';

const WorkoutHistory = () => {
  const {isDarkMode} = useTheme();

  const styles  = StyleSheet.create({
    Text:{
      color: isDarkMode ? '#fff' : '#000',
    },
    }
  );

  return (
    <View>
      <Text style={styles.Text}>Workout History Screen</Text>
      {/* Your content here */}
    </View>
  );
};

const styles = StyleSheet.create({

    
});

export default WorkoutHistory;