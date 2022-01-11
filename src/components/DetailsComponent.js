import React from 'react'
import { useParams } from 'react-router-dom'

//withScriptjs will embed the Google script that it needs to load for the map to work correctly 
import { GoogleMap, withScriptjs, withGoogleMap, Marker }  from 'react-google-maps'

import listingData from "../redux/state"
import Map from "../containers/MapContainer"


//import material UI components

// function Map(props) {
//     console.log("props in Map():", props)
//     // console.log("props.listings in Map():", props.listing)
//     const { id } = useParams()
//     // const listing = props.listings.find(listing => listing.id == id)

//     return (
//         <GoogleMap 
//             defaultZoom={10} 
//             defaultCenter={{lat: 43.710121, lng:-74.973419}}
//         >
//             {/* map over listings to create a marker for each */}
//                 <Marker 
//                     // key={listing.id} 
//                     // position={{lat: listing.lat, lng: listing.lng}}
//                 /> 
//         </GoogleMap>
    
//     )
// }

const WrappedMap = withScriptjs(withGoogleMap(Map));


const Details = (props) => {
    console.log("props in Details: ", props)
    const { id } = useParams()
    const listing = props.listings.find(listing => listing.id == id)

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
                    {/* to the wrapped map, we need to pass a prop called googleMapURL
                    eventually an API key will go in the {''} */}
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