import React from 'react'
import logo from "../assecsts/Images/logo.svg";
import Button from '@mui/material/Button';
function Navbar() {
  return (
    <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","padding":"0px 60px","boxShadow":" 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}>
     <div style={{"width":"220px","height":"100px","position":"relative"}}>
     <img src={logo} alt="" style={{"position":"absolute","top":"-20px"}} />
        </div>   
        <div>
        <Button variant="outlined">Login </Button>
    </div>
    </div>
  )
}       

export default Navbar