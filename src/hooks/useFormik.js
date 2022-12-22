import { useState } from "react";

const initiateErrors = (obj) => {
  const objCopy = { ...obj };
  Object.keys(objCopy).forEach((key) => {
    objCopy[key] = "";
  });
  return objCopy;
};

const useFormik = (initialValues, validationSchema, onSubmit) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initiateErrors(initialValues));

  const validationHandler = async (name, value) => {
    try {
      await validationSchema.validateAt(`${name}`, { [name]: value });
      setErrors({ ...errors, [name]: "" });
    } catch (error) {
      setErrors({ ...errors, [name]: error.message });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    validationHandler(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useFormik;
