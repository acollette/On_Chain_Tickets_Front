import React, {useState} from 'react'
import {ethers} from 'ethers'
import {Button, makeStyles} from "@material-ui/core"
import '../index.css'

const useStyles = makeStyles((theme) => ({
    connect_address : {
        display:"flex",
        justifyContent: "flex-end",
    },
    buttonColor: {
        backgroundColor: "#fdd835",
        color:"#7c4dff",
        fontFamily:['Fascinate', 'cursive'],

    },
}))



const Header = () => {

    const classes = useStyles()
    const [walletAddress, setWalletAddress] = useState("")
    const isConnected = walletAddress !== ""
    
    async function requestAccount() {
        console.log('Requesting Account')

        if(window.ethereum){
            console.log("detected")
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                })
                setWalletAddress(accounts[0])
            } catch (error) {
                console.log('Error Connecting')
            }

        }
        else{
            alert('MetaMask not detected')
        }
    }

    //create provider to interact with a smart contract

    async function connectWallet(){
        if(typeof window.ethereum !== 'undefined'){
            await requestAccount();

            const provider = new ethers.providers.Web3Provider(window.ethereum);
        }
    }


    return(
       <>   
        <div className={classes.connect_address}>
            <div>
                {isConnected ? (
                <div>
                    <Button size="large" className={classes.buttonColor} onClick={()=> setWalletAddress("")}>
                        Disconnect
                    </Button>
                </div>    
                ) : (
                <Button size="large" className={classes.buttonColor} onClick={() => requestAccount()}>
                    Connect
                </Button>
                )}
            </div>
        </div> 
        <div className={classes.connect_address}>
           {isConnected ? (
               <p>Current address: {walletAddress}</p>):
               ("")} 
        </div> 
       </>    
    )   
    

}


export default Header