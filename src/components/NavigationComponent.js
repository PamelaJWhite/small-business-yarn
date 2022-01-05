// import React from 'react'
import * as React from 'react';
import { Link } from 'react-router-dom'

import cookie from "cookie"

//import material UI pieces here
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navigation = (props) => {
    console.log("in navigation, props.username[0].name", props.username[0].name)

    const cookies = cookie.parse(document.cookie)
    console.log("cookies in Navigation ", cookies)

    let logOut = (e) =>{
        console.log("Hey, where are you trying to go?!")
        document.cookie = `loggedIn=false;max-age=1000`
        window.location.replace("/")
    }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{backgroundColor: "#66bb6a"}}>
                <Toolbar>
                    <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Old Forge Small Business
                    </Typography>
                        <Link  
                            to={`/`} 
                            style={{color:"white", textDecoration:"none"}}
                        >
                            Listings
                        </Link> 
                    {(props.username[0].name !== null) 
                        ? <Link 
                            to={'/addListing'} 
                            style={{color:"white", textDecoration:"none", margin:"0px 30px"}}
                        >
                            Add
                        </Link>
                        : console.log("no true cookies exist")
                    }
                    {(props.username[0].name !== null) 
                    //I think there should be some function in this link to actually log out
                    //and erase (?) cookies
                        ? <Link 
                            to={'/'} onClick={logOut} 
                            style={{color:"white", textDecoration:"none", margin:"0px"}}
                        >   
                            LOGOUT
                        </Link>
                        : <Link 
                            to={`/login`} 
                            style={{color:"white", textDecoration:"none", margin:"0px 30px"}}
                        >
                            Login
                        </Link>
                    }
                    </Toolbar>
                </AppBar>
            </Box>
            {(props.username[0].name !== null) 
                ? <div>
                    <div 
                    style={{backgroundColor: "lightgrey", color:"grey", paddingLeft:"22px"}}>
                    Logged in as: {props.username[0].name}
                    </div>
                </div>
                : console.log("no true cookies exist")
            }
        </div>  
        ); 
}

export default Navigation



//   (
        // <div>  
        //     {(cookies.loggedIn === 'true') 
        //     ? <Link to={'/addListing'}>Add</Link>
        //     : console.log("no true cookies exist")
        //     }
        //    
        //     {/* {props.logininfo.loggedin === true && <Link to={'/addListing'}>Add</Link>} */}
        // </div>
    // )