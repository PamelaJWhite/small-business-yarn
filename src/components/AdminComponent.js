//12/27/21 I'm not using this component anymore

import React from 'react'
//import material UI components
// import {Link} from 'react-router-dom'
// import Details from '../containers/DetailsContainer'
import Home from '../containers/HomeContainer'

const Admin = (props) => {
    return (
        <div>
            {/* there's got to be a way to render the Details component information here, 
            instead of re-writing it all */}
            {props.listings.map((listing, idx)=>(
                // console.log("in Home map: ", listing, idx)
                <ul>
                    <Home></Home>
                    <li>
                        <button onClick={()=>props.removeListing(idx)}>DELETE</button>
                        </li>
                </ul>
        ))}

        {/* ugh... but this doesn't include the delete button in the map :/
        <Details/>
        <button>delete</button> */}
         
           
        </div>
    )
}

export default Admin