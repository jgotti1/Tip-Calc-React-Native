import React from 'react'
import {View} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from "./styles.js"

const TipSelect = ({tipPercentage, setTipPercentage, calculateBill}) => {
  return (
  <View>
        <Picker
          style={styles.tip}
          selectedValue={tipPercentage}
          onValueChange={(itemValue) => {
            setTipPercentage(itemValue);
            calculateBill();
          }}
      >
          <Picker.Item  label="Select Tip Percent" value="" disabled />
          <Picker.Item  label="10% Poor" value="0.1" />
          <Picker.Item  label="15% Average" value="0.15" />
          <Picker.Item  label="20% Good" value="0.2" />
          <Picker.Item  label="25% Great" value="0.25" />
          <Picker.Item  label="30% Exceptional" value="0.3" />
        </Picker>
        
    </View>
  )
}

export default TipSelect
