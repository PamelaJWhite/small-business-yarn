//import outside functionality stuff
import React from 'react';
import { Link } from 'react-router-dom'
import cookie from "cookie"

//import the styling stuff
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

//return an dynamically rendered navigation bar
const Navigation = (props) => {
    //save the loggedIn cookie
    const cookies = cookie.parse(document.cookie)
    //remove cookies when logging out
    let logOut = (e) =>{
        document.cookie = `loggedIn=false`
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
                    {/* if the user has logged in
                    display the link to add a listing */}
                    {(props.username[0].name !== null) 
                        ? <Link 
                            to={'/addListing'} 
                            style={{color:"white", textDecoration:"none", margin:"0px 30px"}}
                        >
                            Add
                        </Link>
                        : console.log("not logged in")
                    }
                    {/* if the user has logged in
                    display link to log out
                    otherwise, disply log in link */}
                    {(props.username[0].name !== null) 
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
            {/* if user has logged in
            display their username under the green nav bar */}
            {(props.username[0].name !== null) 
                ? <div>
                    <div 
                    style={{backgroundColor: "lightgrey", color:"grey", paddingLeft:"22px"}}>
                    Logged in as: {props.username[0].name}
                    </div>
                </div>
                : console.log("we don't know who you are")
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