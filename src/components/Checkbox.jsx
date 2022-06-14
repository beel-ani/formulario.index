import { Checkbox, Stack } from '@chakra-ui/react'
 const Plata=()=>{
 return(
    <>
<Stack spacing={[1, 5]} direction={['column', 'row']}>
  <Checkbox size='md' colorScheme='gray'>
    Plata
  </Checkbox>
  <Checkbox size='md' colorScheme='yellow' defaultChecked>
    Oro
  </Checkbox>
  <Checkbox size='md' colorScheme='red' defaultChecked>
    Platinium
  </Checkbox>
</Stack>


</>
 )
 }
 export default Plata;