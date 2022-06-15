import React, {useState, useEffect} from "react"
import {Box, Button, makeStyles} from "@material-ui/core"
import {ethers} from 'ethers'

const contractAddress = ""
const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
//const contract = new ethers.Contract(contractAddress,ABI , signer)




const images = []

const useStyles = makeStyles((theme)=>({
    
}))


const Mint = () => {

        const classes = useStyles()
        

      
        return(
            <>
                <Box className={classes.box}>
                  
                </Box>

            </>
         )

   

}

export default Mint