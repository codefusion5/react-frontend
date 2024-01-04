import React, { useState } from 'react'
import secure_login from "../assecsts/Images/secure_login.svg";
import { Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material';
function Login() {
  const [user,setUser]=useState({userName:"",password:""})
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      email: user.userName,
      password: user.password
    });
  };

  return (
    <div style={{ "display": "flex", "justifyContent": "space-between", "padding": "120px 60px" }}>
      <div style={{ "width": "670px", "height": "700px" }}>
        <img src={secure_login} alt="" style={{}} />
      </div>
      <div style={{ "display": "flex", "flexDirection": "column", "gap": "120px" }}>
        <div style={{ "display": "flex", "flexDirection": "column", "justifyContent": "space-between", "gap": "20px" }}>

          <Typography sx={{
            color: "#000",
            fontFamily: "Lato",
            fontSize: "32px",
            fontWeight: "600",
            lineHeight: "normal",
            display: "flex",
            justifyContent: "center"
          }}>
            Studio Management System
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
                  id="userName"
                  label="Username"
                  name="userName"
                  value={user.userName}
                  onChange={(e)=>setUser({...user,userName:e.target.value})}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={user.password}
                  onChange={(e)=>setUser({...user,password:e.target.value})}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label={<Typography sx={{
                    fontFamily: "Lato",
                    fontSize: "16px",
                    fontWeight: "300"
                  }}>Keep me signed in</Typography>}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  login
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>

                  </Grid>
                </Grid>
              </Box>
            </Box>

          </Container>

        </div>

      </div>
    </div >
  )
}

export default Login