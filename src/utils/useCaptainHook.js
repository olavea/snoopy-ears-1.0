import {useState} from "react"

export default function useForm(defaults) {
     const [values, setValues] = useState(defaults);

     function updateValue(event) {
         // Check if it's a number and convert it to ....
         let {value} = event.target;
         if (event.target.type === 'number') {
             value = parseInt(event.target.value);
         }
         setValues({
             // copy the existing values into it
             ...values,
             // update the new value that changed
             [event.target.name]: value,

         });
     }
     return {values, updateValue};
}