import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Signup.css";
import { auth } from "../../firebase";
import { useFormik } from "formik";
import { Button, TextField } from "@material-ui/core";
import * as yup from "yup";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  name: yup
    .string("Enter your name")
    .min(3, "Name must be at least 3 characters")
    .required("Name is Required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    )
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .when("password", {
      is: (password) => (password && password.length > 0 ? true : false),
      then: yup.string().oneOf([yup.ref("password")], "Password doesn't match"),
    }),
});

function Signup() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const formik = useFormik({
    validationSchema: validationSchema,
  });

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="signup">
      <Link to="/">
        <img className="signup__logo" src="/images/login-logo.png" />
      </Link>
      <div className="signup_container">
        <h1>Sign up</h1>
        <form>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            type="text"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            style={{ marginTop: "15" }}
          />

          {/* <h5>First-Name</h5>
                    <input type="text"  value={firstname} onChange={e => setFirstName(e.target.value)}/> */}

          {/* <h5>Last-Name</h5>
                    <input type="text"  value={lastname} onChange={e => setLastName(e.target.value)}/> */}

          {/* <h5>E-mail</h5>
                    <input type="text"  value={email} onChange={e => setEmail(e.target.value)}/> */}
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            style={{ marginTop: "15px" }}
          />
          {/* <h5>Password</h5>
                    <input type="password"  value={password} onChange={e => setPassword(e.target.value)}/> */}

          {/* <h5>Conform-Password</h5>
                    <input type="password"  /> */}

          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            style={{ marginTop: "15px" }}
            InputProps={{
              // <-- This is where the toggle button is added.
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            id="confirm-password"
            name="confirmPassword"
            label="Confirm Password"
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            style={{ marginTop: "15px" }}
            InputProps={{
              // <-- This is where the toggle button is added.
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </form>

        <p>
          By signing-in you agree to the Conditions of Use & Sale. Please see
          our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>

        {/* <button onClick={register} className="signup_registerButton">Create Your Amazon Account</button> */}
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          style={{ marginTop: "15px" }}
          onClick={register}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Signup;
