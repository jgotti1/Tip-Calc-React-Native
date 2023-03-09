import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from "./styles.js"
import { useState } from "react"
import BillSplit from './BillSplit.js';

export default function App() {
  const [amount, setAmount] = useState()
  const [tipPercentage, setTipPercentage]= useState(0)
  
  const amountHandler = (amountInput) => {
  setAmount(amountInput)
}

  const calculateBill = () => {
    console.log(tipPercentage)
  }


  return (
          <ImageBackground style={styles.wrapper} source={require('./assets/bk.jpg')}>
       <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.heading}>Tip Calculator</Text>
      <View style={styles.topcontainer}>
        <Text style={styles.title} >Bill Total</Text>
          <View style={styles.inputcontainer}>
              <Text style={styles.$}>$</Text> 
            <TextInput style={styles.billamount} placeholder={"   enter bill amount..."} value={amount} onChangeText={amountHandler}/>       
          </View>
          <View>
        <BillSplit/>
          </View>
      <View>
        <Picker
          style={styles.tip}
          selectedValue={tipPercentage}
          onValueChange={(itemValue) => {
            setTipPercentage(itemValue);
            calculateBill();
          }}
          >
          <Picker.Item label="Select Tip Percent" value="" disabled />
          <Picker.Item label="10% Poor" value="0.1" />
          <Picker.Item label="15% Average" value="0.15" />
          <Picker.Item label="20% Good" value="0.2" />
          <Picker.Item label="25% Great" value="0.25" />
          <Picker.Item label="30% Exceptional" value="0.3" />
        </Picker>
    </View>
      </View>
    </View>
    
    </ImageBackground>
  );
}


