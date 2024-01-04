import React, { useState } from 'react'
import forgetpassword from "../assecsts/Images/forgetpassword.svg";
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';

function Forgetpassword() {
    const [email,setEmail]=useState("")

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(email);
  };


  return (
    <div style={{ "display": "flex", "justifyContent": "space-between", "padding": "120px 60px" }}>
      <div style={{ "width": "670px", "height": "700px" }}>
        <img src={forgetpassword} alt="" style={{}} />
      </div>
      <div style={{ "display": "flex", "flexDirection": "column", "gap": "120px" }}>
        <div style={{ "display": "flex", "flexDirection": "column", "justifyContent": "space-between", "gap": "20px","alignItems":"center" }}>

          <Typography sx={{
            color: "#000",
            fontFamily: "Lato",
            fontSize: "32px",
            fontWeight: "600",
            lineHeight: "normal",
            display: "flex",
            justifyContent: "center",
          
          }}>
            Forgot Password?
          </Typography>
          <Typography sx={{
            color: "#000",
            fontFamily: "Lato",
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "normal",
            display: "flex",
            justifyContent: "center",
            width:'340px',
            textAlign:"center",
        
          }}>
           Enter your email address to get the password reset link.
          </Typography>
        </div>
        <div style={{}}>

          <Container maxWidth="xs">

            <Box
              sx={{
                marginTop: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box component="form" onSubmit={handleSubmit} >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="Email"
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  autoFocus
                />
                
              
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Get verified By email
                </Button>
                <Grid container sx={{"display":"flex","justifyContent":"center",mt:2}}>
                  
                    <Link href="/login" variant="body2" sx={{color:"#878787",textDecoration:"none"}}>
                      Back to login
                    </Link>
                  
                  
                </Grid>
              </Box>
            </Box>

          </Container>

        </div>

      </div>
    </div >
  )
}

export default Forgetpassword