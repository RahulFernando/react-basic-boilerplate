import React from "react";

import { Button, Grid, TextField } from "@mui/material";

const formDetails = [
  {
    label: "Name",
    name: "name",
  },
  {
    label: "Address",
    name: "address",
  },
  {
    label: "Business Reg",
    name: "business_registration",
  },
  {
    label: "Ownership Type",
    name: "ownership_type",
  },
  {
    label: "Share Count",
    name: "share_count",
  },
  {
    label: "Value Per Share",
    name: "value_per_share",
  },
  {
    label: "Share Class",
    name: "share_class",
  },
];

const ShareholderForm = ({ shareholder, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={3}>
        {formDetails.map((item, index) => (
          <Grid item xs={4} key={index}>
            <TextField
              label={item.label}
              name={item.name}
              fullWidth
              value={shareholder[item.name]}
              onChange={onChange}
            />
          </Grid>
        ))}
        <Grid item xs={8} />
        <Grid item xs={6} />
        <Grid item xs={6}>
          <Button type="submit" variant="contained" sx={{ float: "right" }}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ShareholderForm;
