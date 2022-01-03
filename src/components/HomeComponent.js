import React from 'react'
//import material UI components
import { Link } from 'react-router-dom'
import Navigation from '../containers/NavigationContainer'
import cookie from 'cookie'

const Home = (props) => {
    const cookies = cookie.parse(document.cookie)

    console.log("props.listings in Home component: ", props.listings)
    console.log("props in Home component: ", props)
    
    return (
        <div>
            {/* this could solve my differential Nav bars problem: */}
            {/* <Navigation/> */}
            <h1> HOME/ LISTINGS page</h1>
            {props.listings.map((listing, idx)=>(
                <div>
                <Link to={`/details/${listing.id}`}>
                    {console.log("listing.id in Home map: ", listing.id)}
                    <ul>
                        
                        <li>Name: {listing.name}</li>
                        <li>Description: {listing.description}</li>
                        <li>Hours: {listing.hours}</li>
                        <li>Address: {listing.address}</li>
                    </ul>
                    </Link>
                        {(cookies.loggedIn === 'true') 
                            ? <button onClick={()=>props.removeListing(idx)}>delete</button>
                            : console.log("no true cookies exist")
                        }
                    </div>
        ))}
            {/* HOME PLACEHOLDER */}
            {/* {console.log("in Home component, props.listing: ", props.listings)} */}
        </div>
    )
}

export default Home