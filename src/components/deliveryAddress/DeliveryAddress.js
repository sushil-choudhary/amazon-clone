import React from 'react';
import { useHistory } from 'react-router-dom';

import { useFormik } from "formik";
import * as yup from "yup";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '35ch',
      },
    },
  }));

  //Formik validation
  const validationSchema = yup.object({
    FirstName: yup
      .string("Enter your First Name")
      .min(3, "First Name must be at least 3 characters")
      .required("First Name is Required"),
    LastName: yup
      .string("Enter your Last Name")
      .min(3, "Last Name must be at least 3 characters")
      .required("Last Name is Required"),
    city:yup
      .string("Enter your city name")
      .required("City name is required"),
    state:yup
      .string("Enter your State name")
      .required("State name is required"),
    country:yup
      .string("Enter your country name")
      .required("country Name is required"),
    Zip:yup
      .string("Enter your Zip Code name")
      .min(5, "Zip Code must be at least 5 number")
      .required("Zip Code is required"),
    phone:yup
      .string("Enter your Phone Number name")
      .min(10, "Phone Number must be at least 10 number")
      .max(14, "Phone Number must be at least 14 number")
      .required("Phone Number is required"),
    address:yup
      .string("Enter your Address")
      .min(15, "Address must be at least 15 characters")
      .max(60, "Address must be at least 60 number")
      .required("Address is required"), 
    });

function DeliveryAddress() {
    const classes = useStyles();
    const history = useHistory();
    //Formik Validation
    const formik = useFormik({
      initialValues: {
        FirstName:'',
        LastName:'',
        city:'',
        street:'',
        state:'',
        Zip:'',
        phone:'',
        address:'',
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        history.push('./payment')
      }  
    });
    return (
        <form className={classes.root} onSubmit={formik.handleSubmit} >
            <div>
            <TextField
                id="FirstName"
                name="FirstName"
                label="First Name"
                placeholder="First Name"         
                variant="outlined"
                type="text"
                onChange={formik.handleChange}
                error={formik.touched.FirstName && Boolean(formik.errors.FirstName)}
                helperText={formik.touched.FirstName && formik.errors.FirstName}
              />
              <TextField
                id="LastName"
                name="LastName"
                label="Last Name"
                placeholder="Last Name"
                variant="outlined"
                type="text"
                onChange={formik.handleChange}
                error={formik.touched.LastName && Boolean(formik.errors.LastName)}
                helperText={formik.touched.LastName && formik.errors.LastName}
              />
              </div>
              <div>
              <TextField
                id="City"
                label="City"
                placeholder="City"
                variant="outlined"
                name="city"
                type="text"
                onChange={formik.handleChange}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
              />
              <TextField
                id="State"
                label="State"
                placeholder="State"
                variant="outlined"
                name="state"
                type="text"
                onChange={formik.handleChange}
                error={formik.touched.state && Boolean(formik.errors.state)}
                helperText={formik.touched.state && formik.errors.state}
              />
              </div>
              <div>
              <TextField
                id="Country"
                label="Country"
                placeholder="Country"
                variant="outlined"
                name="country"
                type="text"
                onChange={formik.handleChange}
                error={formik.touched.country && Boolean(formik.errors.country)}
                helperText={formik.touched.country && formik.errors.country}
              />             
              <TextField
                id="Zip Code"
                label="Zip Code"
                placeholder="Zip Code"
                variant="outlined"
                name="Zip"
                type="number"
                onChange={formik.handleChange}
                error={formik.touched.Zip && Boolean(formik.errors.Zip)}
                helperText={formik.touched.Zip && formik.errors.Zip}
              />
              </div>
              <div>
              <TextField
                id="Phone No."
                label="Phone No."
                placeholder="Phone No."
                variant="outlined"
                name="phone"
                type="number"
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />          
              <TextField
                id="address"
                label="Street address"
                placeholder="Street address"
                rows={4}
                variant="outlined"
                name="address"
                type="text"
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />
              </div>     
              <br />
              <Button
                color="secondary"
                variant="contained"
                fullWidth
                type="submit"
                style={{ marginTop: "15px" }}
              >
                Submit
              </Button>
        </form> 
    )
}

export default DeliveryAddress
