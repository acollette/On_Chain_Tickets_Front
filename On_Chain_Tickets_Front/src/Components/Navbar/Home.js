import React from 'react';
import {Box, makeStyles} from "@material-ui/core"
import woodstockWide from "../../Assets/woodstock_wide.jpeg"



const useStyles = makeStyles((theme) => ({
    image : {
        width:"800px",
        paddingBottom:"80px",
        paddingTop:"30px"

    },
   
}))


const Home = () => {

    const classes = useStyles()

  return (
    <div>
        <img className={classes.image} src={woodstockWide} alt=""/>
    </div>
  );
};

export default Home;
