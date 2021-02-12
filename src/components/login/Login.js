import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./Login.css";
import { auth, provider } from "../../firebase";

import { useFormik } from 'formik';
import * as yup from 'yup';

import { Button, TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { GoogleLoginButton } from 'react-social-login-buttons';

const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    name: yup
      .string('Enter your name')
      .min(3, "Name must be at least 3 characters")
      .required('Name is Required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      )
      .required('Password is required'), 
    confirmPassword: yup
      .string()
      .required("Please confirm your password")
      .when("password", {
        is: password => (password && password.length > 0 ? true : false),
        then: yup.string().oneOf([yup.ref("password")], "Password doesn't match")
      })
    });

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [name,setName] = useState();
    const [showPassword, setShowPassword] = React.useState(false)
    const handleClickShowPassword = () => setShowPassword(!showPassword)
    const handleMouseDownPassword = () => setShowPassword(!showPassword)

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "foobar",
            confirmPassword: ""
          },
        validationSchema: validationSchema
    })

    //sign in with email and password
    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }
    //sign in with google
    const SignIn = e => {
        auth 
        .signInWithPopup(provider)
        .then((auth) => {
            history.push('./')
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login" >
            <div className="login__container">
                <h1>Sign in</h1>
                <form className="form">
                    <TextField 
                      fullWidth
                      id="name"
                      name="name"
                      label="Name"
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                      style={{marginTop:'15', color:'white'}}
                      />
                      {/* <h5>Name</h5>
                      <input type="text"  value={name} onChange={e => setName(e.target.value)}/> */}
                      
                      {/* <h5>E-mail</h5>
                      <input type="text"  value={email} onChange={e => setEmail(e.target.value)}/> */}
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        style={{marginTop:'15px'}}
                        className="email"
                        />                   
                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        color="secondary"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        style={{marginTop:'15px'}}
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
                        color="secondary"
                        id="confirm-password"
                        name="confirmPassword"
                        label="Confirm Password"
                        type={showPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                        style={{marginTop:'15px'}}
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
                      <Button color="primary" variant="contained" fullWidth type="submit" style={{marginTop:'15px'}} onClick={signIn} >
                        Submit
                      </Button>
                </form>
                <div className="social">
                    <GoogleLoginButton onClick={SignIn} />     
                </div>

                <h5 className="Signup">Don't have an account 
                    <Link to="/signup" >
                        <span className="sign_up">Sign up</span>                  
                    </Link>
                </h5>
            </div>
        </div>
    );
}

export default Login
