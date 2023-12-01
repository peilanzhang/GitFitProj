import React from 'react';
import { View, Text, Switch, TouchableOpacity, Button,StyleSheet,TextInput } from 'react-native'; // or your UI library


 function AppSettings(){
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
  linkText: {
  color: 'blue',
  textDecorationLine: 'underline',
  fontSize: 20,
  padding: 10.
  },

  buttonText: {
  color: 'red',
  fontSize: 20,
  padding: 10,
  },

});
export default AppSettings;
