//import styling stuff
import React, { useState } from 'react'
import {Link} from 'react-router-dom'

//import styling stuff
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";

//render login form
const Login = (props) => {
    //set variables to set and save username
    const [username, setUserName] = useState()
    let state = {
            id: '',
            name: username
        }
    //set cookie and username upon login
    const login = (e) => {
        e.preventDefault()
        document.cookie = `loggedIn=true;Max-Age=600`
        state.id = props.username.length + 1 
        props.addUserName(state)
    }
    return (
        <div>
            <form>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    className="loginForm"
                >
                    <TextField
                        id="standard-basic" 
                        variant="standard"
                        placeholder="Username"
                        onChange={(e) => {setUserName(e.target.value)}}
                        variant="standard"
                        style={{width:"450px"}}
                    />
                    <div></div>
                    <TextField
                        fullWidth
                        id="fullWidth"
                        variant="standard"
                        placeholder="Password"
                        variant="standard"
                        style={{width:"450px"}}
                    />
                    <div></div>
                    {/* onClick calls login function */}
                    <Button 
                        variant="contained" 
                        onClick={(e) => login(e)}
                        style={{backgroundColor:"lightgrey", width: "450px"}}
                    >
                        {/* link sends user back to listings page,
                        which now has protected functionality,
                        including add and delete listings */}
                        <Link 
                            style={{textDecoration:"none", width:"100%", height:"100%"}}
                            to='/'
                        >
                            login 
                        </Link>
                    </Button>
                </Box>
            </form> 
        </div>
    );
};

export default Login