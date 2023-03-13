import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const BillSplit = ({split, setSplit}) => {
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const increasePeople = () => {
    setNumberOfPeople(prevState => prevState + 1);
    setSplit(numberOfPeople)
  };

  const decreasePeople = () => {
    if (numberOfPeople > 1) {
      setNumberOfPeople(prevState => prevState - 1);
      setSplit(numberOfPeople)
    }
  };

  return (
    
      <View style={styles.splitContainer}>
        <Text style={styles.textstyle}>Split Bill</Text>
        <View style={styles.controls}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.splitButton} onPress={increasePeople}>
              <Text style={styles.buttonText}> + </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.splitAmount}>{split}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.splitButton} onPress={decreasePeople}>
              <Text style={styles.buttonText}> - </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    
  );
};



  

export default BillSplit;
