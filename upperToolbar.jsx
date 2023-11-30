import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'; // or 'react' for web apps
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage'; 
import AppSettings from './AppSettings';

const Stack = createStackNavigator()

const UpperToolbar = ({navigation}) => {
  const handleNavigateHome = () => {
    navigation.navigate('HomePage');
  };

  const handleSettings = () => {
    navigation.navigate('AppSettings')
  };
  
  return (
    <View style={styles.toolbar}>
      <TouchableOpacity onPress={handleNavigateHome}>
        <Image source={require('./home-icon.png')} style={styles.icon} />
      </TouchableOpacity>

      <View style={styles.spacer}/>

      <TouchableOpacity onPress={handleSettings}>
        <Image source={require('./settings-icon.jpeg')} style={styles.icon} />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Align icons to start and end of the container
    alignItems: 'center',
    padding: 10,
    zIndex: 1,
  },
  title: {
    // Add styles for the title text
  },
  icon: {
    width: 30,
    height: 30, 
  },
  spacer: {
    flex: 1,
  }
});

export default UpperToolbar;
