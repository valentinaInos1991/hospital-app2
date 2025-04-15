// src/hooks/useForm.js
import { useState } from 'react';

const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({...values, [name]: value});
  };

  const validate = () => {
    const newErrors = {};
    Object.entries(values).forEach(([key, val]) => {
      if (!val) newErrors[key] = "Este campo es obligatorio";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { values, handleChange, validate, errors };
};

export default useForm;
