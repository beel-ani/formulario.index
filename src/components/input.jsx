import { FormErrorMessage ,Input , InputGroup , Button , InputRightElement, FormControl , FormLabel } from '@chakra-ui/react'
import { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import React from "react"

const schema = yup.object({
   email: yup.string().email().required(),
    password: yup.string()
    .required('No password provided.') 
    .min(8, 'Password is too short - should be 8 chars minimum.')
    ,
    }).required();
    


    function PasswordInput() {
    
            const [show, setShow] = useState(false)
            const handleClick = () => setShow(!show)
            const { register, handleSubmit, formState:{ errors } } = useForm({
              resolver: yupResolver(schema)
            });
            const onSubmit = data => console.log(data
              );
              console.log(errors)    
            return (
            <>
             <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={!!errors.email}>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <InputGroup size='md'>
             <Input {...register("email")}
            
             placeholder='Here is a sample placeholder'
             size='sm'
             /> </InputGroup> 
             {errors.email && <FormErrorMessage>email is required.</FormErrorMessage>}
             </FormControl>
             <FormControl isInvalid={!!errors.password}>
             <FormLabel htmlFor='password'>password</FormLabel>
              <InputGroup size='md'>
                <Input {...register("password")}
                  pr='4.5rem'
                  type={show ? 'text' : 'password'} placeholder='Enter password'/>
                <InputRightElement width='4.5rem' >
                  <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {errors.password && <FormErrorMessage>password is required.</FormErrorMessage>}
              </FormControl>
              <Button type='submit' colorScheme={"teal"}>submit</Button>
              
              </form>
              </>
            )
          }
   export default PasswordInput;     
    
