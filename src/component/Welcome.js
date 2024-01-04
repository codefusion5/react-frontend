import React from 'react'
import welcome_banner from "../assecsts/Images/welcome_banner.svg";
import { Button, Typography } from '@mui/material';
function Welcome() {
  return (
    <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "center", "padding": "120px 60px" }}>
      <div style={{ "width": "670px", "height": "700px" }}>
        <img src={welcome_banner} alt="" style={{}} />
      </div>
      <div style={{ "display": "flex","flexDirection":"column","justifyContent":"space-between","gap":"270px"}}>
        <div style={{ "display": "flex","flexDirection":"column","justifyContent":"space-between","gap":"20px"}}>
          <Typography sx={{
            color: "#251F71",
            fontFamily: "Lato",
            fontSize: "96px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal"
          }}>
            Welcome!
          </Typography>
          <Typography sx={{
            color: "#000",
            fontFamily: "Lato",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: "300",
            lineHeight: "normal",
            display: "flex",
            justifyContent:"center"
          }}>
            Studio Management System
          </Typography>
        </div>
        <div style={{ "display": "flex","justifyContent":"center"}}>
          <Button variant="outlined" sx={{"width":"300px","height":"72px"}}><Typography sx={{
           
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal"
          }}>
            login
          </Typography> </Button>
        </div>

      </div>
    </div >
  )
}

export default Welcome