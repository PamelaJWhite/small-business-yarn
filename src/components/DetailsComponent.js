import React from 'react'
import { useParams } from 'react-router-dom'
//import material UI components


const Details = (props) => {
    console.log("props in Details: ", props)
    const { id } = useParams()
    const listing = props.listings.find(listing => listing.id == id)

    return (
        <main>
            <div style={{display: "flex", flexDirection: "column", alignItems:"center"}}>
                <div>
                    <h1>{listing.name}</h1>
                    <h2>{listing.address}</h2>
                    <h2>{listing.hours}</h2>
                    <p>{listing.description}</p>
                </div>
                <div>
                    this is a map
                </div>
            </div>
        </main>
    )

}

export default Details