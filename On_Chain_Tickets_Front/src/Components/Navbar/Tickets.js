import React from 'react'
import {Box, makeStyles} from "@material-ui/core"
import beatles from "../../Assets/Beatles_Ticket.jpeg"
import woodstock from "../../Assets/Woodstock_Ticket.png"



const useStyles = makeStyles((theme)=>({
    image : {
        width: "300px",
        height:"150px",
        paddingTop: '10px',

    },
    wideImage : {
        width: "480px",
        paddingTop: 20,
        paddingBottom:50,
        alignItems:"center"
    },
    box : {
        display:"flex",
        gap: theme.spacing(4),
        justifyContent: "center",
        paddingTop: 20

    },
    text : {
        paddingTop: 55,
        paddingBottom: 10,
        color: "#fff3e0" ,
        fontSize: 42,
    },
    color : {
        color: "#e8eaf6",
    },
    padding :{
        paddingBottom:50,
    },


}))

const Info = () => {

    const classes = useStyles()

    return(
        <>
            <h3 className={classes.text}>The Beatles - City Park Stadium 1964</h3>
            <Box className={classes.box}>
                <div>
                    <img className={classes.image} src={beatles} alt=""/>
                </div>
                    
            </Box>
            <h3 className={classes.text}>Woodstock Festival 1969 - Three Days Pass</h3>
            <Box className={classes.box}>
                <div>
                    <img className={classes.wideImage} src={woodstock} alt=""/>
                </div>
                    
            </Box>
            
        </>
    )

}

export default Info