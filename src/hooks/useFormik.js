import { useState } from "react";

const useFormik = (initValues) => {
  const [formData, setFormData] = useState(initValues);

  const changeHandler = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  const resetHandler = () => setFormData(initValues);

  return {
    formData,
    onChange: changeHandler,
    onReset: resetHandler,
  };
};

export default useFormik;
