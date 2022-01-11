import React, {useState} from 'react'
// import {Link} from 'react-router-dom'
import { GoogleMap, withScriptjs, withGoogleMap, Marker }  from 'react-google-maps'
import axios from 'axios'

//import my files
import listingData from "../redux/state"
import Map from "../containers/MapContainer"

//import material UI components
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";

const WrappedMap = withScriptjs(withGoogleMap(Map));

const AddListing = (props) => {
    //create local state for each input field
    const [name, setName] = useState([])
    const [address, setAddress] = useState([])
    const [hours, setHours] = useState([])
    const [description, setDescription] = useState([])
    const [lat, setLat] = useState([])
    const [lng, setLng] = useState([])
    const [id, setId] = useState([])

    let state = {
        id: id,
        name: name,
        address: address,
        hours: hours,
        description: description,
        lat: lat, 
        lng: lng
    }

    let latitude =''
    let  longitude = ''

    //hold all the data that are entered
    //in the form fields
    const handleChange = (e) => {
        e.preventDefault()
        console.log("e.target.value in handleChange: ", e.target.value)
        if (e.target.name === "name"){
            // console.log("name is being entered")
            setName(e.target.value)
            // console.log("props in handleChange(), name: ", props)
        } 
        else if (e.target.name === "address") {
            console.log("address is changing")
            setAddress(e.target.value)
        }
        else if (e.target.name === "hours") {
            // console.log("our hours are changing")
            setHours(e.target.value)
        }
        else if (e.target.name === "description") {
            // console.log("what else would you like to describe ")
            setDescription(e.target.value)
        }
    }

    const mapAddress = (e) => {
        let key = "AIzaSyD2mZXMCOQL7L7GhT2-BS0hGjQi44x-zaU"

        // call to fetch the geocode data from google
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`
            fetch(url)
                .then(response => response.json())
                .then(function(data){
                    //Log full response
                    console.log(data)

                    latitude = data.results[0].geometry.location.lat
                    longitude = data.results[0].geometry.location.lng
        
                }).then(function(data){
                    setLat(latitude)
                    setLng(longitude)
                })
    }

    //add the data from the form to the list of Listings
    const handleSubmit = (e) => {
        e.preventDefault()
        state.id = props.listings.length + 1
        props.addListing(state)     
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
                        onChange={mapAddress}
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
                >  
                    <div style={{width: "450px", height:"450px"}}>
                    {/* to the wrapped map, we need to pass a prop called googleMapURL
                    eventually an API key will go in the {''} */}
                        <WrappedMap 
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD2mZXMCOQL7L7GhT2-BS0hGjQi44x-zaU`}
                            loadingElement={<div style={{height:'100%'}}/>}
                            containerElement={<div style={{height:'100%'}}/>}
                            mapElement={<div style={{height:'100%'}}/>}
                        />
                    </div>


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