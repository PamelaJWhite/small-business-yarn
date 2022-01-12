//import outside functionality stuff
import React, {useState} from 'react'
import { withScriptjs, withGoogleMap }  from 'react-google-maps'

//import local stuff 
import Map from "../containers/MapContainer"

//import styling stuff
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";

const WrappedMap = withScriptjs(withGoogleMap(Map));

//renders form to add a new listing
//map default is all markers
//map loads new marker upon save
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

    //hold all the data that are entered
    //in the form fields
    const handleChange = (e) => {
        e.preventDefault()
        console.log("e.target.value in handleChange: ", e.target.value)
        if (e.target.name === "name"){
            setName(e.target.value)
        } 
        else if (e.target.name === "address") {
            setAddress(e.target.value)
        }
        else if (e.target.name === "hours") {
            setHours(e.target.value)
        }
        else if (e.target.name === "description") {
            setDescription(e.target.value)
        }
    }

    //function to add a new marker to the map
    const mapAddress = (e) => {
        //get google maps api key from .env file
        let key = process.env.REACT_APP_GOOGLE_KEY

        // call to fetch the geocode data from google
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`
            fetch(url)
                .then(response => response.json())
                .then(function(data){
                    //set latitude and longitude so marker component can use them
                    setLat(data.results[0].geometry.location.lat)
                    setLng(data.results[0].geometry.location.lng)
                })
    }

    //add the data from the form to the list of Listings
    const handleSubmit = (e) => {
        e.preventDefault()
        //add an id to the new listing
        state.id = props.listings.length + 1
        //add the new listing to state
        props.addListing(state)     
    }

    return (
        <div  style={{display:"flex", width:"100%", margin: "40px"}}>
            {/* box, left, to hold form */}
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
            {/* box, right, to hold map */}
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
