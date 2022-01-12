//import outside functionality stuff
import React from 'react'
import { useParams } from 'react-router-dom'
import MarkerChange from "../containers/MarkerContainer"
import { GoogleMap, Marker }  from 'react-google-maps'

//make me a map!
function Map(props) {
    //for the map on the details page, 
    const { id } = useParams()
    const listing = props.listings.find(listing => listing.id == id)
    
    return (
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{lat: 43.7100676, lng:-74.9743407}}
        >
            {/* map over listings to create a marker for each */}
            {
                (!listing)
                    ?props.listings.map((listing, index)=>(
                        <Marker 
                            // key={id} 
                            position={{lat: listing.lat, lng: listing.lng}}
                        />
                    ))
                    // ?<MarkerChange/>
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