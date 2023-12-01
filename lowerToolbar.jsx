
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'; // or 'react' for web apps
import { useNavigation } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker'
import InputPage from './inputExcersise';


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
  return (
    <View style={toolbarStyle.toolbar}>
      <TouchableOpacity onPress={handleGenerator}>
      <Image source={require('./dumbell.png')} style={toolbarStyle.icon} />
      </TouchableOpacity>


      <TouchableOpacity onPress={handleInputWorkout}>
        <Image source={require('./pencil.png')} style={toolbarStyle.icon} />
        </TouchableOpacity>


        <TouchableOpacity onPress={handleList} >
        <Image source={require('./list.png')} style={toolbarStyle.icon} />
        </TouchableOpacity>
    </View>
  );
}
const toolbarStyle = StyleSheet.create({
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
