//import outside functionality stuff
import React from 'react'
import { useParams } from 'react-router-dom'
//withScriptjs will embed the Google script that it needs to load for the map to work correctly 
import { withScriptjs, withGoogleMap }  from 'react-google-maps'

//import local stuff 
import Map from "../containers/MapContainer"

//returns a detailed version of a listing
//map with only current listing marked
const Details = (props) => {
    //get the id from the params
    const { id } = useParams()
    //loop over listings to find the one with the current id
    const listing = props.listings.find(listing => listing.id == id)
    //wrap map with tools to render it
    const WrappedMap = withScriptjs(withGoogleMap(Map));
    return (
        <main style={{display:"flex", justifyContent:"center"}}>
            <div style={{display: "flex", flexDirection: "column", width:"450px"}}>
                <div>
                    <h1>{listing.name}</h1>
                    <h2>{listing.address}</h2>
                    <h2>{listing.hours}</h2>
                    <p>{listing.description}</p>
                </div>
                <div style={{width: "450px", height:"450px"}}>
                    <WrappedMap 
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD2mZXMCOQL7L7GhT2-BS0hGjQi44x-zaU`}
                        loadingElement={<div style={{height:'100%'}}/>}
                        containerElement={<div style={{height:'100%'}}/>}
                        mapElement={<div style={{height:'100%'}}/>}
                        />
                </div>
            </div>
        </main>
    )
}

export default Details