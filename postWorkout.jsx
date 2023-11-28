import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function PostWorkout() {
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