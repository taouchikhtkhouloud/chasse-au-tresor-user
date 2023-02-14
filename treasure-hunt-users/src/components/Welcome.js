import React, { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import "./welcome.css";
import logo from '../assets/logo olympiades vertical.png'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function Welcome() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerInformation, setRegisterInformation] = useState({
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: ""
  });
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/homepage");
      }
    });
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/homepage");
      })
      .catch((err) => alert(err.message));
  };

  const handleRegister = () => {
    if (registerInformation.email !== registerInformation.confirmEmail) {
      alert("Please confirm that email are the same");
      return;
    } else if (
      registerInformation.password !== registerInformation.confirmPassword
    ) {
      alert("Please confirm that password are the same");
      return;
    }
    createUserWithEmailAndPassword(
      auth,
      registerInformation.email,
      registerInformation.password
    )
      .then(() => {
        navigate("/homepage");
      })
      .catch((err) => alert(err.message));
  };

  return (
    
   
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" className="container">
      <img src={logo} className="logo" />

       
        {isRegistering ? (
          <>
           
    <Typography className="txt" component="h" variant="h6">
            Sign up
          </Typography>
          <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>

          <TextField
          type="email"
          required
          id="outlined-required"
          value={registerInformation.email}
          onChange={(e) =>
            setRegisterInformation({
              ...registerInformation,
              email: e.target.value
            })
          }          
          label="Email"
          defaultValue="abc@gmail.com"
        />
          </Grid>


        
          <Grid item xs={12} sm={6}>

        <TextField
          type="email"
          required
          id="outlined-required"
          value={registerInformation.confirmEmail}
          onChange={(e) =>
                setRegisterInformation({
                  ...registerInformation,
                  confirmEmail: e.target.value
          })}       
          label="Confirm Email"
          defaultValue="abc@gmail.com"
        />
          
          </Grid>
          <Grid item xs={12} sm={6}>

           <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          placeholder="Password"
          value={registerInformation.password}
          onChange={(e) =>
            setRegisterInformation({
              ...registerInformation,
              password: e.target.value
            })
          }
        />
          </Grid>
          
          <Grid item xs={12} sm={6}>

         <TextField
          id="outlined-password-input"
          label="Password"
          autoComplete="current-password"
          type="password"
          placeholder="Confirm Password"
          value={registerInformation.confirmPassword}
          onChange={(e) =>
                setRegisterInformation({
                  ...registerInformation,
                  confirmPassword: e.target.value
                })
              }
        />
          </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>

        <Button variant="contained" onClick={handleRegister} sx={{ mt: 3, mb: 2 }}>Register</Button>
          </Grid>
          <Grid item xs={12} sm={6}>
          <h3>Already have an account? Sign in</h3>
   
        <Button variant="outlined" onClick={() => setIsRegistering(false)} sx={{ mt: 3, mb: 2 }}>Go back</Button>
          </Grid>
            
          
          </>
        ) : (
          <>
           <Typography className="txt" component="h1" variant="h5">
            Sign in
          </Typography>

<Grid container spacing={2}>
          <Grid item xs={12} sm={6}>

          <TextField
          type="email"
          required
          id="outlined-required"
          value={email}
          onChange={handleEmailChange}          
          label="Email"
          defaultValue="abc@gmail.com"
        />
          </Grid>


          <Grid item xs={12} sm={6}>

           <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
          </Grid>
          
          
         
          </Grid>
           

<Grid item xs={12} sm={6}>

<Button variant="contained" onClick={handleSignIn} sx={{ mt: 3, mb: 2 }}>Sign In</Button>
  </Grid>
  <Grid item xs={12} sm={6}>
  <h3>You don't have an account? Sign un</h3>

<Button variant="outlined"    onClick={() => setIsRegistering(true)} sx={{ mt: 3, mb: 2 }}>Create an account</Button>
  </Grid>
            
          </>
        )}
      </Container>
    </React.Fragment>
  );
}
