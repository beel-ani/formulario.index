import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'
import { useState } from 'react';
const Edad = ()=>{
    const [valor,setValor]=useState([])
    setValor>=18 
    return(

<NumberInput step={1} defaultValue={18} min={10} max={70} >
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput>
    )
}
 export default Edad;
