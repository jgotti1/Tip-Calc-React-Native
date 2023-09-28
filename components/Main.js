import React from "react";
import { useEffect } from "react";
import { NativeBaseProvider, Checkbox, HStack, Button, Stack } from "native-base";
import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, ImageBackground, TouchableOpacity, Linking, Alert } from "react-native";
import styles from "./styles.js";
import { useState } from "react";
import BillSplit from "./BillSplit";
import TipPercent from "./TipPercent";
import Constants from "expo-constants";

export default function Main() {
  const version = Constants.expoConfig.ios.buildNumber
  const [amount, setAmount] = useState();
  const [tipPercentage, setTipPercentage] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0.0);
  const [tipAmount, setTipAmount] = useState(0.0);
  const [roundUp, setRoundUp] = useState(false);
  const [split, setSplit] = useState(1);

  useEffect(() => {
    calculateBill();
  }, [roundUp]);

  const amountHandler = (amountInput) => {
    setAmount(amountInput);
  };

  const calculateBill = () => {
    let finalAmount = Number(amount);
    let tip = (finalAmount * tipPercentage) / split;
    let total1 = tip + finalAmount;
    let total = total1 / split;

    if (roundUp) {
      const roundedTipAmount = Math.ceil(tip);
      total = (roundedTipAmount + finalAmount) / split;
      setTipAmount(roundedTipAmount.toFixed(2));
      setTotalAmount(total.toFixed(2));
    } else {
      setTipAmount(tip.toFixed(2));
      setTotalAmount(total.toFixed(2));
    }
  };

  const handleReset = () => {
    setAmount("");
    setTipPercentage(0);
    setTotalAmount(0.0);
    setTipAmount(0.0);
    setRoundUp(false);
    setSplit(1);
  };

  const handleRoundUp = () => {
    setRoundUp(!roundUp);
  };

  const handleDonePress = () => {
    Alert.alert("Select Tip Percent from the drop-down")
  }

  return (
    <>
      <NativeBaseProvider>
        <StatusBar style="auto" />
        <ImageBackground style={styles.wrapper} source={require("../assets/bk.jpg")}>
          <View>
            {/* Version and copright link     */}
            <View style={styles.topLineContainer}>
              <Text style={styles.versionText}>{version}</Text>
              <View style={styles.copyright}>
                <TouchableOpacity onPress={() => Linking.openURL("https://johnmargotti.com/")}>
                  <Text style={styles.linkText}>&#169; margotticode2023</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* section end */}
            <View style={styles.container}>
              <View style={styles.topcontainer}>
                <Text style={styles.heading}>Tip Calculator</Text>
                <Text style={styles.title}>Bill Amount</Text>
                <View style={styles.inputcontainer}>
                  <Text style={styles.$}>$</Text>
                  <TextInput
                    style={styles.billamount}
                    returnKeyType="done"
                    keyboardType="numeric"
                    placeholder={"   enter bill amount..."}
                    value={amount}
                    onChangeText={amountHandler}
                    onSubmitEditing={handleDonePress}
                  />
                </View>
                <View style={styles.bottomcontainer}>
                  <BillSplit split={split} setSplit={setSplit} calculateBill={calculateBill} amount={amount} />
                  <TipPercent setTipPercentage={setTipPercentage} tipPercentage={tipPercentage} calculateBill={calculateBill} />
                  <View style={styles.totalcontainer}>
                    <Text style={styles.tiptext}>Tip:</Text>
                    {/* <TextInput style={styles.tipAmount}>${tipAmount}</TextInput> */}
                    <Text style={styles.tipAmount}>${isNaN(tipAmount) ? "0.00" : tipAmount}</Text>
                    <HStack space={1}>
                      <Checkbox value="true" onChange={handleRoundUp} accessibilityLabel="round up" isChecked={roundUp} />
                      <Text>Round-up</Text>
                    </HStack>
                  </View>
                  <View style={[styles.totalcontainer, split > 1 ? { marginTop: 20 } : null]}>
                    <Text style={styles.totaltext}>Total:</Text>
                    <Text style={styles.totalAmount}> ${isNaN(totalAmount) ? "0.00" : totalAmount}</Text>
                  </View>
                </View>
              </View>

              {split > 1 && <Text style={styles.splittext}>Tip and Total are split into {split} checks</Text>}
            </View>
            <View style={styles.resetContainer}>
              <Stack mb="0" mt="30" justifyContent="center">
                <Button size="sm" variant="outline" colorScheme="green" borderColor="green.500" rounded="lg" bg="white" onPress={handleReset}>
                  Reset Values
                </Button>
              </Stack>
            </View>
          </View>
        </ImageBackground>
      </NativeBaseProvider>
    </>
  );
}
