import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const BillSplit = () => {
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const increasePeople = () => {
    setNumberOfPeople(prevState => prevState + 1);
  };

  const decreasePeople = () => {
    if (numberOfPeople > 1) {
      setNumberOfPeople(prevState => prevState - 1);
    }
  };

  return (
    
      <View style={styles.splitContainer}>
        <Text style={styles.titleBillSplit}>Split Bill</Text>
        <View style={styles.controls}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.splitButton} onPress={increasePeople}>
              <Text style={styles.buttonText}> + </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.splitAmount} id="numberOfPeople">{numberOfPeople}</Text>
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
    marginVertical: 20,
    paddingHorizontal: 20,
    width: '100%',
  },
  // titleBillSplit: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  // },
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
  splitAmount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  // totalContainer: {
  //   alignItems: 'center',
  // },
  // totalDiv: {
  //   flexDirection: 'row',
  //   alignItems: 'baseline',
  // },
  // perPersonTotal: {
  //   fontSize: 40,
  //   fontWeight: 'bold',
  //   marginLeft: 5,
  // },
};

export default BillSplit;
