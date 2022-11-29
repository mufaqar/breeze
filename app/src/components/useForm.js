import React, { useState } from 'react'

export default function useForm(initialValue) {
    const [field, setfield] = useState(initialValue);

    const handleInput = (e) => {
        const {name, value} = e.target;
        setfield({...field, [name]: value});
      }

  return {
    field,
    setfield,
    handleInput  
  }
}
