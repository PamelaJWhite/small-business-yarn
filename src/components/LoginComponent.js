import React from 'react'
import { useState, useEffect}  from 'react'
import {Link} from 'react-router-dom'
import { addUserName } from '../redux/actions'

import  Home  from './HomeComponent'
// import Home from '../containers/HomeContainer'

//import material UI components
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";




const Login = (props) => {
   


    const [username, setUserName] = useState()

    let state = {
            id: '',
            name: username
        }

    // useEffect(() => {
    //     const userName = window.localStorage.getItem("saveName")
    //     console.log("userName: ", userName)
    //     setUserName(JSON.parse(userName))
    // }, [])

    // //useEffect with no dependency array
    // useEffect(()=> {
    //     window.localStorage.setItem('saveName',JSON.stringify(props.username[0].name) )
    // })

    const login = (e) => {
        e.preventDefault()
        document.cookie = `loggedIn=true;Max-Age=600`
        state.id = props.username.length + 1 
        props.addUserName(state)
        // window.location.replace("/")
        
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
                        // id="standard-basic" 
                        variant="standard"
                        placeholder="Password"
                        variant="standard"
                        style={{width:"450px"}}
                    />
                    <div></div>
                    <Button 
                        variant="contained" 
                        onClick={(e) => login(e)}
                        style={{backgroundColor:"lightgrey", width: "450px"}}
                    >
                        <Link 
                        
                            style={{textDecoration:"none"}}
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


{/* <div>
            <form >
                <input 
                    placeholder="email"
                    onChange={(e) => {setUserName(e.target.value)}}
                />
                <input placeholder="password"/>
                <button onClick={(e) => login(e)}>
                    
                    <Link  to='/'>
                        login 
                    </Link>
                    </button> 
            </form>
        </div> */}




// const [name, setName] = useState([])
// const [address, setAddress] = useState([])
// const [hours, setHours] = useState([])
// const [description, setDescription] = useState([])

// let state = {
//     id: '',
//     name: name,
//     address: address,
//     hours: hours,
//     description: description
// }


// //add the data from the form to the list of Listings
// const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log("in handleSubmit in AddListing")
//     console.log("props in handleSubmit(): ", props)
//     //this adds the name as a 3rd item in the array;
//     // props.addListing(name)
//     state.id = props.listings.length + 1 

//     props.addListing(state)
    
//     // console.log("name in handleSubmit: ", name)
//     console.log("props in handleSubmit after my first lame attempt at props.addListing(name): ", props)   
// }
