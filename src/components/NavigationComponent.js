// import React from 'react'
import * as React from 'react';
import { Link } from 'react-router-dom'
//will import material UI pieces here
import cookie from "cookie"


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';





const Navigation = (props) => {
    console.log("in navigation, props.logininfo", props.logininfo)

    const cookies = cookie.parse(document.cookie)
    console.log("cookies in Navigation ", cookies)

    let logOut = (e) =>{
        console.log("Hey, where are you trying to go?!")
        document.cookie = `loggedIn=false;max-age=1000`
        window.location.replace("/")
    }
    return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Old Forge Businesses
                    </Typography>
                    <Link to={`/`}>Listings</Link>
                    <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        ); 
}

export default Navigation



//   (
        // <div>  
        //     {(cookies.loggedIn === 'true') 
        //     ? <Link to={'/addListing'}>Add</Link>
        //     : console.log("no true cookies exist")
        //     }
        //     {(cookies.loggedIn === 'true') 
        //     //I think there should be some function in this link to actually log out
        //     //and erase (?) cookies
        //     ? <Link to={'/'} onClick={logOut} >LogOut</Link>
        //     : <Link to={`/login`}>Login</Link>
        //     }
        //     {/* {props.logininfo.loggedin === true && <Link to={'/addListing'}>Add</Link>} */}
        // </div>
    // )