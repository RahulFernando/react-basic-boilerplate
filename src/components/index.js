import React, { useState } from "react";

import { Grid } from "@mui/material";

import Shareholders from "./Shareholders";
import ShareholderForm from "./ShareholderForm";

import useFormik from "../hooks/useFormik";

const ROWS = [
  {
    id: 1,
    name: "Rahul",
    address: "Malabe",
    business_registration: "12wet",
    ownership_type: "Agreement",
    share_count: 2,
    value_per_share: 100000,
    share_class: "Mid",
  },
  {
    id: 2,
    name: "Fernando",
    address: "Malabe",
    business_registration: "12wet",
    ownership_type: "Agreement",
    share_count: 2,
    value_per_share: 100000,
    share_class: "Mid",
  },
];

const initial = {
  name: "",
  address: "",
  business_registration: "",
  ownership_type: "",
  share_count: "",
  value_per_share: "",
  share_class: "",
};

const Index = () => {
  const { formData, onChange, onReset } = useFormik(initial);
  const [shareholders, setShareholders] = useState(ROWS);
  //const [shareholder, setShareholder] = useState(initial);

  // const changeHandler = (event) =>
  //   setShareholder({ ...shareholder, [event.target.name]: event.target.value });

  // delete shareholder by id
  const deleteHandler = (id) =>
    setShareholders([
      ...shareholders.filter((shareholder) => shareholder.id !== id),
    ]);

  // handle form submit
  const submitHandler = (event) => {
    event.preventDefault();

    /**
     * TODO
     * Handle update functionality
     * HINT: if id exists update, otherwise add a new row
     */

    setShareholders([...shareholders, { ...formData, id: new Date() }]);
    //setShareholder(initial);
    onReset();
  };

  /**
   * TODO
   * Implement a function name rowClickHandler and
   * load values to input fields when a row clicked
   */

  return (
    <Grid container spacing={3} sx={{ p: 2 }}>
      <Grid item xs={12}>
        <ShareholderForm
          shareholder={formData}
          onChange={onChange}
          onSubmit={submitHandler}
        />
      </Grid>
      <Grid item xs={12} mt={2}>
        <Shareholders shareholders={shareholders} onDelete={deleteHandler} />
      </Grid>
    </Grid>
  );
};

export default Index;
