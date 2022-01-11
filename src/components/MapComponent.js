import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MarkerChange from "../containers/MarkerContainer"

//withScriptjs will embed the Google script that it needs to load for the map to work correctly 
import { GoogleMap, withScriptjs, withGoogleMap, Marker }  from 'react-google-maps'



function Map(props) {
    console.log("props in Map():", props)
    const { id } = useParams()
    const listing = props.listings.find(listing => listing.id == id)
    let lat = ""
    let lng = ""
    //I want to dynamically render nothing (console.log) if
    //the address from addListing has not yet been added
    //and render the current lng and lat if it has been updated.
    // useEffect(() => {
    //     // console.log("useEffect")
    //     return (
    //         lat = props.listings[0].lat,
    //         lng = props.listings[0].lng
    //     )
    // })
    // console.log("lat,lng in Map: ", lat, lng)
    // const [lat, setLat] = useState([])
    // const [lng, setLng] = useState([])

    // console.log("listing in Map():", listing)
    return (
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{lat: 43.7100676, lng:-74.9743407}}
        >
            {/* map over listings to create a marker for each */}
            {
                (!listing)
                    ?<MarkerChange/>
                    // :console.log("no listing")
                    :<Marker 
                    key={listing.id} 
                    position={{lat: listing.lat, lng: listing.lng}}
                    /> 
            }
        </GoogleMap>
    
    )
}

export default Map