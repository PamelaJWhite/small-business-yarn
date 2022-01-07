import React from 'react'
import { useParams } from 'react-router-dom'

//withScriptjs will embed the Google script that it needs to load for the map to work correctly 
import { GoogleMap, withScriptjs, withGoogleMap }  from 'react-google-maps'

//import material UI components

function Map() {
    return (
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{lat: 43.710121, lng:-74.973419}}
        />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));


const Details = (props) => {
    console.log("props in Details: ", props)
    const { id } = useParams()
    const listing = props.listings.find(listing => listing.id == id)

    return (
        <main style={{display:"flex", justifyContent:"center"}}>
            <div style={{display: "flex", flexDirection: "column", alignItems:"center", backgroundColor:"hotpink", width:"500px"}}>
                <div>
                    <h1>{listing.name}</h1>
                    <h2>{listing.address}</h2>
                    <h2>{listing.hours}</h2>
                    <p>{listing.description}</p>
                </div>
                <div style={{width: "", height: ""}}>
                    {/* to the wrapped map, we need to pass a prop called googleMapURL
                    eventually an API key will go in the {''} */}
                    <WrappedMap 
                        googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'}
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