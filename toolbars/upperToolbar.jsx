import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'; // or 'react' for web apps
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../Theme/themeContext';


const UpperToolbar = () => {
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('HomePage');
  };

  const handleSettings = () => {
    navigation.navigate('Settings')
  };

  const { isDarkMode } = useTheme();

  const styles = StyleSheet.create({
    toolbar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      paddingTop: 40, // Add paddingTop to push content below the toolbar
      borderBottomColor: 'black',
      backgroundColor: isDarkMode ? '#696a80' : '#fff',
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
    },
  });

  return (
    <View style={styles.toolbar}>
      <TouchableOpacity onPress={handleNavigateHome}>
        <Image source={require('./home-icon.png')} style={styles.icon} />
      </TouchableOpacity>

      <View style={styles.spacer} />

      <TouchableOpacity onPress={handleSettings}>
        <Image source={require('./settings-icon.jpeg')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default UpperToolbar;
