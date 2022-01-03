import React from 'react'
import { useParams } from 'react-router-dom'
//import material UI components


const Details = (props) => {
    console.log("props in Details: ", props)
    const { id } = useParams()
    const listing = props.listings.find(listing => listing.id == id)

    return (
        <div>
            <h1>DETAILS page</h1>
          
                <div>
                    <h2>{listing.name}</h2>
                    <ul>
                        <li>Description: {listing.description}</li>
                        <li>Hours: {listing.hours}</li>
                        <li>Address: {listing.address}</li>
                        <li>Map: {listing.map}</li>
                    </ul>
                </div>
        
        </div>
    )

}

export default Details