/* eslint-disable no-console */
// mui
import { Grid, TextField, Button, Box } from "@mui/material";

// yup
import * as Yup from "yup";

// hooks
import useFormik from "../hooks/useFormik";

const validationSchema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().required(),
  password: Yup.string().required(),
});

function UserForm() {
  const { values, errors, handleChange, handleSubmit } = useFormik(
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema,
    () => console.log(values),
  );

  // console.log(errors);

  return (
    <Box p={2} m={6}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <TextField
              label="First Name"
              name="firstName"
              fullWidth
              value={values.firstName}
              error={!!errors.firstName}
              helperText={errors.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Last Name"
              name="lastName"
              fullWidth
              value={values.lastName}
              error={!!errors.lastName}
              helperText={errors.lastName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Email Address"
              name="email"
              fullWidth
              value={values.email}
              error={!!errors.email}
              helperText={errors.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="password"
              label="Password"
              name="password"
              fullWidth
              value={values.password}
              error={!!errors.password}
              helperText={errors.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default UserForm;
