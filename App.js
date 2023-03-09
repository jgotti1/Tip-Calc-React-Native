import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from "./styles.js"
import { useState } from "react"
import BillSplit from './BillSplit.js';
import TipSelect from './TipSelect.js';

export default function App() {
  const [amount, setAmount] = useState()
  const [tipPercentage, setTipPercentage] = useState(0)
  const [totalAmount, setBTotalAmount] = useState(0.00)
  
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
        <Text style={styles.title} >Bill Amount</Text>
          <View style={styles.inputcontainer}>
              <Text style={styles.$}>$</Text> 
            <TextInput style={styles.billamount} placeholder={"   enter bill amount..."} value={amount} onChangeText={amountHandler}/>       
          </View>
          <View style={styles.bottomcontainer}>
            <BillSplit />
            <View style={styles.totalcontainer} >
            <Text style={styles.title}>Total:</Text>
            <TextInput style={styles.totalAmount}>${totalAmount}</TextInput>
            </View>
          <TipSelect tipPercentage={tipPercentage} setTipPercentage={setTipPercentage } calculateBill={calculateBill} />
          </View>
      </View>
    </View>
    
    </ImageBackground>
  );
}


