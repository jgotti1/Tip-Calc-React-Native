import {useEffect} from 'react'
import { Select, Center, Box, CheckIcon, Text } from "native-base";
import styles from "./styles.js"

function TipPercent({ setTipPercentage, tipPercentage, calculateBill}) {
  

    useEffect(() => {
      calculateBill();
    
    }, [tipPercentage]);
  
  return (
    <>
      <Center style={styles.tipcontainer}>
              <Text style={styles.textstyle}>Tip:</Text>
                    <Box style={styles.tipbox}>
                  <Select selectedValue={tipPercentage} minWidth="250" accessibilityLabel="Tip Percent" placeholder="Tip Percent" _selectedItem={{
                    bg: "green.100",
                    endIcon: <CheckIcon size="8" />
                  }} mt={0} onValueChange={itemValue => setTipPercentage(itemValue)}>
                    <Select.Item label="10% Poor Service" value={.10} />
                    <Select.Item label="15% Okay Service" value={.15} />
                    <Select.Item label="20% Good Service" value={.20} />
                    <Select.Item label="22% Very Good Service" value={.22} />
                    <Select.Item label="25% Great Service" value={.25} />
                    <Select.Item label="30% Exceptional Service" value={.30} />
                  </Select>

                    </Box>
                </Center>
    </>
  )
}

export default TipPercent
