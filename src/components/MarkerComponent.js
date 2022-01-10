import React, {useState} from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker }  from 'react-google-maps'


function MarkerChange (props) {
    let lat = props.listings[0].lat
    let lng = props.listings[0].lng
    return (
        <Marker 
            // key={listing.id} 
            position={{lat: lat, lng: lng}}
        /> 

    )
}

export default MarkerChange