import React from 'react'
import Final from './Components/Navbar'
import Header from './Components/Header'
import {makeStyles} from "@material-ui/core"
import './index.css'
import woodstockWide from "./Assets/woodstock_wide.jpeg"
import peace from "./Assets/peace_transparent.png"

const useStyles = makeStyles((theme) => ({
  color_green : {
      color: '#009688',
      alignItems:"center",
      justifyContent:"center",
      fontSize:"55px",
      paddingBottom:"10px",
    },
  color_yellow : {
      color: "#fdd835",
      alignItems:"center",
      justifyContent:"center",
      fontSize:"45px"
  },
  image:{
    backgroundColor: "transparent",
    height:"80px"
  }
}))

function App() {
  const classes = useStyles()
  return (
    <div className='container' style={{backgroundColor: 'orange'},{height: '100vh'}}>
      <Header/>
      
      <h2 className={classes.color_green}> - 1960's Concert tickets -  </h2>
      <h2 className={classes.color_yellow}> - On chain metadata - </h2>
      <h2 className={classes.color_green}> - Forever - </h2>
      <img className={classes.image}src={peace} alt=""/>
      <Final />
      
    </div>
  );
}

export default App;
