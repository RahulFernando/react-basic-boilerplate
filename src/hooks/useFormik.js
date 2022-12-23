/* eslint-disable no-useless-return */
import { useState } from "react";

const initiateErrors = (obj) => {
  const objCopy = { ...obj };
  Object.keys(objCopy).forEach((key) => {
    objCopy[key] = "";
  });
  return objCopy;
};

const initiateTouched = (obj) => {
  const objCopy = { ...obj };
  Object.keys(objCopy).forEach((key) => {
    objCopy[key] = false;
  });
  return objCopy;
};

const useFormik = (initialValues, validationSchema, onSubmit) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initiateErrors(initialValues));
  const [touched, setTouched] = useState(initiateTouched(initialValues));

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
    setTouched({ ...touched, [name]: true });
    validationHandler(name, value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let isValid = false;

    try {
      isValid = await validationSchema.validate(values, { abortEarly: false });
    } catch (e) {
      const parsedError = e.inner.reduce((acc, error) => {
        return {
          ...acc,
          [error.path]: error.message,
        };
      }, {});
      setErrors({ ...errors, ...parsedError });
    }

    if (isValid) {
      onSubmit();
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useFormik;
