import React, {useState} from 'react'
// import {Link} from 'react-router-dom'

//import material UI components
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";

const AddListing = (props) => {
    //create local state for each input field
    const [name, setName] = useState([])
    const [address, setAddress] = useState([])
    const [hours, setHours] = useState([])
    const [description, setDescription] = useState([])

    let state = {
        id: '',
        name: name,
        address: address,
        hours: hours,
        description: description
    }

    //hold all the data that are entered
    //in the form fields
    const handleChange = (e) => {
        e.preventDefault()
        console.log("e.target.value in handleChange: ", e.target.value)
        if (e.target.name === "name"){
            console.log("name is being entered")
            setName(e.target.value)
            console.log("props in handleChange(), name: ", props)
        } 
        else if (e.target.name === "address") {
            console.log("address is changing")
            setAddress(e.target.value)
        }
        else if (e.target.name === "hours") {
            console.log("our hours are changing")
            setHours(e.target.value)
        }
        else if (e.target.name === "description") {
            console.log("what else would you like to describe ")
            setDescription(e.target.value)
        }
    }
    //add the data from the form to the list of Listings
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("in handleSubmit in AddListing")
        console.log("props in handleSubmit(): ", props)
        //this adds the name as a 3rd item in the array;
        // props.addListing(name)
        state.id = props.listings.length + 1 

        props.addListing(state)
        
        // console.log("name in handleSubmit: ", name)
        console.log("props in handleSubmit after my first lame attempt at props.addListing(name): ", props)   
    }

    return (
        <div  style={{display:"flex", width:"100%", margin: "40px"}}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    className="addListingsBox"
                >
            <form  
                onChange={handleChange}
                style={{width:"100%"}}
                >

                    <TextField className="addListingTextField"
                        id="standard-basic" 
                        variant="standard"
                        placeholder='Name' 
                        name="name" 
                    />
                    <br></br>
                    <TextField className="addListingTextField"
                        id="fullWidth"
                        id="standard-basic" 
                        variant="standard"
                        placeholder='Address'
                        name="address"
                    />
                    <br></br>
                    <TextField className="addListingTextField"
                        id="standard-basic" 
                        variant="standard"
                        placeholder='Hours (ex. 8AM-9PM)'
                        name="hours"
                    />
                    <br></br>
                    <TextField className="addListingTextField"
                        id="standard-basic" 
                        variant="standard"
                        placeholder='Description'
                        name="description"
                    />
                    <br></br>
                    <Button 
                        variant="contained" 
                        type="submit"
                        onClick={handleSubmit}
                        style={{width:"50%"}}
                    >
                        Save
                    </Button>
                    </form> 
                </Box>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    className="addListingsBox"
                > This is a box for a map
                </Box>
        </div>
    )
}

export default AddListing


 {/* <form onSubmit={handleSubmit} onChange={handleChange} >
<input placeholder='Name' name="name" value={name}/>
<input placeholder='Address'name="address" />
<input placeholder='Hours'name="hours" />
<input placeholder='Description'name="description" />
<button>Save</button>
<h2>a beautiful map; or hopefully a google map</h2>
</form> */}