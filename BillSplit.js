import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

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

const styles = {

  splitContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 20,
    width: '100%',
  },

  controls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: '#ddd',
    borderRadius: 50,
    marginHorizontal: 10,
    padding: 5,
  },
  splitButton: {
    // paddingHorizontal: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textstyle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  splitAmount: {
    fontSize: 20,
    fontWeight: 'bold',
  },

};

export default BillSplit;
