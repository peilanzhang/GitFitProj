import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import UpperToolBar from '../toolbars/upperToolbar';
import { useTheme } from '../Theme/themeContext';


export default function PostWorkout(navigation) {
  const {isDarkMode} = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#343541' : '#fff',
      alignItems: 'center',
      paddingTop: 20,
      paddingHorizontal: 16,
    }, title: {
      color: isDarkMode ? '#fff' : '#000',
      fontSize: 24,
      fontWeight: 'bold',
    },
    message: {
      color: isDarkMode ? '#fff' : '#000',
      fontSize: 18,
      textAlign: 'center'
    }
  });

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Nice Work! {'\n'}</Text>
        <Text style={styles.message}>Any workout is a goal achieved. {'\n\n'}Don't forget to create your next workout and continue thriving!</Text>
    </View>
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 16,
  }, title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 18,
    textAlign: 'center'
  }
});