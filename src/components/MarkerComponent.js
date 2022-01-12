import React, {useState} from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker }  from 'react-google-maps'


function MarkerChange (props) {
    let lat = props.listings[0].lat
    let lng = props.listings[0].lng
    return (
        props.listings.map((listing, index)=>(
            <Marker 
                // key={id} 
                position={{lat: listing.lat, lng: listing.lng}}
            />
        ))
    )
}

// export default MarkerChange