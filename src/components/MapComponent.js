//import outside functionality stuff
import React from 'react'
import { useParams } from 'react-router-dom'
import { GoogleMap, Marker }  from 'react-google-maps'

//make me a map!
function Map(props) {
    //for the map on the details page, use params 
    //to id to get correct marker
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
                    //get all the markers 
                    //to show when adding a listing
                    //and show the newly added marker
                    ?props.listings.map((listing, index)=>(
                        <Marker 
                            key={index} 
                            position={{lat: listing.lat, lng: listing.lng}}
                        />
                    ))
                    //disply only one marker on the details page
                    :<Marker 
                        key={listing.id} 
                        position={{lat: listing.lat, lng: listing.lng}}
                    /> 
            }
        </GoogleMap>
    )
}

export default Map