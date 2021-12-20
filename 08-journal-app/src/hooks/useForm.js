import { useState } from 'react';

export  function useForm(intialState = {}) {
   const [values, setValues] = useState(intialState)

   //puedo mandarle el nuevo estado como parámetro para que actualice el formulario cuando cambia la nota seleccionada
   const reset = (newFormState = intialState) => {
       setValues(newFormState);
   }
   
   const handleInputChange = ({target}) => {
        console.log(values);
        setValues({
            ...values,
            [target.name]: target.value
        });
   }
   return [values, handleInputChange, reset];

}
