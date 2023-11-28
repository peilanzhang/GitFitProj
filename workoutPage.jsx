import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function workoutPage() {
  return (
    <View style={styles.container}>
      <Text>THIS IS THE WORKOUT PAGE WOOOO</Text>

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
  }
});