import React from 'react'
import { useParams } from 'react-router-dom'

//withScriptjs will embed the Google script that it needs to load for the map to work correctly 
import { GoogleMap, withScriptjs, withGoogleMap, Marker }  from 'react-google-maps'
import listingData from "../redux/state"


function Map(props) {
    console.log("props in Map():", props)
    const { id } = useParams()
    const listing = props.listings.find(listing => listing.id == id)
    console.log("listing in Map():", listing)
    return (
        <GoogleMap 
            defaultZoom={11} 
            defaultCenter={{lat: listing.lat, lng:listing.lng}}
        >
            {/* map over listings to create a marker for each */}
                <Marker 
                    key={listing.id} 
                    position={{lat: listing.lat, lng: listing.lng}}
                /> 
        </GoogleMap>
    
    )
}

export default Map