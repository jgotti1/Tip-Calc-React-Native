import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const BillSplit = ({ split, setSplit, calculateBill, amount }) => {
  
  useEffect(() => {

    if (amount !== "   enter bill amount...") {
      
      calculateBill();
    }
  }, [split]);
 

  const increasePeople = () => {
    setSplit(split + 1)
    
  };

  const decreasePeople = () => {
    if (split > 1) {
      setSplit(split -1 )
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
