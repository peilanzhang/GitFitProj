
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'; // or 'react' for web apps
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../Theme/themeContext';
import {Picker} from '@react-native-picker/picker'
import InputPage from '../screens/inputExcersise';


function LowerToolbar() {
    const navigation = useNavigation();
    const handleInputWorkout = () => {
        navigation.navigate('InputPage');
      };    
    const handleGenerator = () => {
        navigation.navigate('GeneratorPage');
      }
    const handleList = () => {
        navigation.navigate('ExerciseList');
      }
    const { isDarkMode } = useTheme();

    const styles = StyleSheet.create({
        toolbar: {
          flexDirection: 'row',
          justifyContent: 'space-between', // Align icons to start and end of the container
          alignItems: 'center',
          padding: 40,
          height: 100,
          borderTopWidth: 1, // Set the width of the top border
          borderTopColor: 'black',
          backgroundColor: isDarkMode ? '#696a80' : '#fff',
        },
       
        icon: {
          width: 50,
          height: 50, 
          backgroundColor: isDarkMode ? '#696a80' : '#fff',
        },
    });

  return (
    <View style={styles.toolbar}>
      <TouchableOpacity onPress={handleGenerator}>
      <Image source={require('./dumbell.png')} style={styles.icon} />
      </TouchableOpacity>


      <TouchableOpacity onPress={handleInputWorkout}>
        <Image source={require('./pencil.png')} style={styles.icon} />
        </TouchableOpacity>


        <TouchableOpacity onPress={handleList} >
        <Image source={require('./list.png')} style={styles.icon} />
        </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    toolbar: {
      flexDirection: 'row',
      justifyContent: 'space-between', // Align icons to start and end of the container
      alignItems: 'center',
      padding: 40,
      height: 100,
      borderTopWidth: 1, // Set the width of the top border
      borderTopColor: '#000', // Set the color of the top borde
    },
   
    icon: {
      width: 50,
      height: 50,
    },

  });

export default LowerToolbar;
