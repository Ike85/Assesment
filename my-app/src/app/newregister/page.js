'use client';

import * as React from 'react';

import Avatar from '@mui/material/Avatar';

import Button from '@mui/material/Button';


import TextField from '@mui/material/TextField';

import FormControlLabel from '@mui/material/FormControlLabel';

import Checkbox from '@mui/material/Checkbox';

import Link from '@mui/material/Link';

import Container from '@mui/material/Container';

import Box from '@mui/material/Box';



export default function Home() {


  const handleSubmit = (event) => {



    console.log("handling submit");

    event.preventDefault();

    const data = new FormData(event.currentTarget);


    let firstName = data.get('firstName')

    let lastName = data.get('lastName')

    let email = data.get('email')

    let address = data.get('address')

    let pass = data.get('pass')

    let confirmPassword = data.get('confirmPassword')


    console.log("Sent firstName: " + firstName)

    console.log("Sent lastName: " + lastName)

    console.log("Sent email:" + email)

    console.log("Sent address:" + address)

    console.log("Sent pass:" + pass)

    console.log("Sent confirmPassword: " + confirmPassword)


    runDBCallAsync(`api/newregister?firstName=${firstName}&lastName=${lastName}&email=${email}&address=${address}&pass=${pass}&confirmPassword=${confirmPassword}`);





  }; // end handle submit


  async function runDBCallAsync(url) {



    const res = await fetch(url);

    const data = await res.json();




    if(data.data== "valid"){

      console.log("login is valid!")




    } else {


      console.log("not valid  ")

    }

  }




  return (

      <Container maxWidth="sm">

        <Box sx={{ height: '100vh' }} >


          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

          
            <TextField
            
                margin="normal"

                required

                fullWidth

                name="firstName"

                label="First Name"

                type="firstName"

                id="firstName"

                autoComplete="current-password"

            />

            <TextField
            //Last Name
                margin="normal"

                required

                fullWidth

                name="lastName"

                label="Last Name"

                type="lastName"

                id="lastName"

                autoComplete="current-password"

            />

            <TextField

                margin="normal"

                required

                fullWidth

                id="email"

                label="Email Address"

                name="email"

                autoComplete="email"

                autoFocus

            />

            <TextField
            //Addres Line 1 (1 foyle road)
                margin="normal"

                required

                fullWidth

                name="address"

                label="Address"

                type="address"

                id="address"

                autoComplete="current-password"

            />

            <TextField

                margin="normal"

                required

                fullWidth

                name="pass"

                label="Password"

                type="pass"

                id="pass"

                autoComplete="current-password"

            />

            <TextField
            //Confirm Password
                margin="normal"

                required

                fullWidth

                name="confirmPassword"

                label="Confirm Password"

                type="confirmPassword"

                id="confirmPassword"

                autoComplete="current-password"

            />

            <Button

                type="submit"

                fullWidth

                variant="contained"

                sx={{ mt: 10,
                   mb: 2,
                  backgroundColor: 'orange' }}
            >

              Sign UP

            </Button>

        <p style={{ textAlign: 'center', marginTop: '1rem' }}>Already have an account? <a href = "/">Login</a></p>

          </Box>

        </Box>

      </Container>

  ); // end return

}


