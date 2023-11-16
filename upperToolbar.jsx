import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'; // or 'react' for web apps

const Toolbar = () => {
  return (
    <View style={styles.toolbar}>
      <TouchableOpacity onPress={() => { /* handle navigation */ }}>
        <Image source={require('./path-to-home-icon.png')} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>Exercises</Text>
      <TouchableOpacity onPress={() => { /* handle settings */ }}>
        <Image source={require('./path-to-settings-icon.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    // Add other styles to match your design
  },
  title: {
    // Add styles for the title text
  },
  icon: {
    // Add styles for the icons
  }
};

export default Toolbar;
