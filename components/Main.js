import React from "react"
import { useEffect } from "react";
import { NativeBaseProvider, Checkbox, HStack, Button, Stack} from "native-base";
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, ImageBackground} from 'react-native';
import styles from "./styles.js"
import { useState } from "react"
import BillSplit from "./BillSplit";
import TipPercent from "./TipPercent"


export default function Main() {

  const [amount, setAmount] = useState()
  const [tipPercentage, setTipPercentage] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0.00)
  const [tipAmount, setTipAmount] = useState(0.00)
  const [roundUp, setRoundUp] = useState(false);
  const [split, setSplit] = useState(1)
  

  useEffect(() => {
      calculateBill();
    }, [roundUp]);

  const amountHandler = (amountInput) => {
  setAmount(amountInput)
  }
  


  const calculateBill = () => {
    
    let finalAmount = Number(amount)
    let tip = (finalAmount * tipPercentage) / split
    let total1 = tip + finalAmount
    let total = total1 / split
  

  if (roundUp) {
    const roundedTipAmount = Math.ceil(tip);
    total = (roundedTipAmount + finalAmount) / split
    setTipAmount(roundedTipAmount.toFixed(2));
    setTotalAmount(total.toFixed(2))
    
  } else {
    setTipAmount(tip.toFixed(2))
    setTotalAmount(total.toFixed(2))
  }
}

  const handleReset = () => {
    setAmount("");
    setTipPercentage(0);
    setTotalAmount(0.00);
    setTipAmount(0.00);
    setRoundUp(false)
    setSplit(1)
  }

    const handleRoundUp = () => {
      setRoundUp(!roundUp);
  };


  return (
    <>
    <NativeBaseProvider>
      <ImageBackground style={styles.wrapper} source={require('../assets/bk.jpg')}>
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
                <BillSplit split={split} setSplit={setSplit} calculateBill={calculateBill} amount={amount}/>
                <TipPercent setTipPercentage={setTipPercentage} tipPercentage={tipPercentage} calculateBill={calculateBill} />
                  <View style={styles.totalcontainer} >
                    <Text style={styles.tiptext}>Tip:</Text>
                  {/* <TextInput style={styles.tipAmount}>${tipAmount}</TextInput> */}
                  <Text style={styles.tipAmount}>${isNaN(tipAmount) ?  "0.00" : tipAmount}</Text>
                <HStack space={2}>
                    <Checkbox value="true" onChange={handleRoundUp} accessibilityLabel="round up"  isChecked={roundUp} />
                  <Text>Round-up</Text>
              </HStack>
                </View>
                  <View style={styles.totalcontainer} >
                    <Text style={styles.totaltext}>Total:</Text>
                  <Text style={styles.totalAmount}> ${isNaN(totalAmount) ?  "0.00" : totalAmount}</Text>
                  {/* <Text style={styles.totalAmount}> ${totalAmount}</Text> */}
                </View>
                </View>
            </View>
                <Stack mb="-1" mt="5.99">
                  <Button size="sm" variant="solid" colorScheme="green" rounded="lg" onPress={calculateBill}>
                    Calculate
                  </Button>
                </Stack>
          </View>    
          {split > 1 && <Text style={styles.splittext}>Tip and Total are split x{split}</Text>}
             <Stack mb="0" mt="10">
                  <Button size="sm" variant="outline" colorScheme="green" borderColor="green.500" rounded="lg" bg="white" onPress={handleReset}>
                    Reset Values
                  </Button>
                </Stack>
        </ImageBackground>
    </NativeBaseProvider>
    </>
  );
}

