
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Linking, TextInput} from 'react-native';

export default function workoutItem  ({ name, muscle, link })  {
  
  const [weight, setWeight] = useState('');
  const [pressStatus, setPressStatus] = useState([false, false, false]);
  const [setNumber, setSetNumber] = useState(() => {
    const numbers = [8, 10, 12]; // Array of possible numbers
    const randomIndex = Math.floor(Math.random() * numbers.length); // Get a random index
    return numbers[randomIndex]; // Return the number at the random index
  });

  const togglePressStatus = (index) => {
    setPressStatus(pressStatus.map((status, i) => (i === index ? !status : status)));
  };

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  exerciseMuscle: {
    fontSize: 14,
    color: '#666',
  },
  exerciseLink: {
    fontSize: 14,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  circleButton: {
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  weightInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    width: 50,
    marginHorizontal: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


return (
  <View style={styles.itemContainer}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <View>
        <Text style={styles.exerciseName}>{name}</Text>
        <Text style={styles.exerciseMuscle}>{muscle}</Text>
      </View>
      <TextInput
        style={styles.weightInput}
        onChangeText={setWeight}
        value={weight}
        placeholder="lbs"
        keyboardType="numeric"
      />
    </View>
    <View style={styles.buttonRow}>
      {pressStatus.map((status, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.circleButton, { backgroundColor: status ? 'green' : '#ddd' }]}
          onPress={() => togglePressStatus(index)}
        >
          <Text>{setNumber}</Text>
        </TouchableOpacity>
      ))}
    </View>
    <TouchableOpacity onPress={() => Linking.openURL(link)}>
      <Text style={styles.exerciseLink}>Watch Video</Text>
    </TouchableOpacity>
  </View>
);

}