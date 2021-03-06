import { useState } from 'react';

export  function useForm(intialState = {}) {
   const [values, setValues] = useState(intialState)

   const reset = () => {
       setValues(intialState);
   }
   
   const handleInputChange = ({target}) => {
        
        setValues({
            ...values,
            [target.name]: target.value
        });
   }
   return [values, handleInputChange, reset];

}
