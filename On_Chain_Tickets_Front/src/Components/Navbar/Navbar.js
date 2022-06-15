import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import '../../index.css'

const useStyles = makeStyles((theme) => ({
    image : {
        width: "150px",
    },
    container : {
        display:"flex",
        alignItems: "center",
        gap: theme.spacing(10),
        justifyContent: "center",
    },
    padding : {
        padding: 15,
    },
}))

const Navbar = () => {

    const classes = useStyles()

    return(
        <nav className = {classes.padding}>
            <ul className={classes.container}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/tickets'>Tickets</Link>
                </li>
                <li>
                    <Link to='/mint'>Mint</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;