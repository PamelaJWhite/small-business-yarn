import React from 'react'
//import material UI components
import { Link } from 'react-router-dom'
import Navigation from '../containers/NavigationContainer'
import cookie from 'cookie'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';

const Home = (props) => {
    
    const cookies = cookie.parse(document.cookie)
    

    console.log("props in Home component: ", props)
    console.log("props.username in HomeComponent: ", props.username)
    
    
    return(
        <div style={{margin:"40px 70px"}}>
           
        <TableContainer >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Description</TableCell>
                        <TableCell align="right">Hours</TableCell>
                        <TableCell align="right">Address</TableCell>
                        {(props.username[0].name !== null) 
                            ? <TableCell align="right">
                                Delete
                            </TableCell> 
                            : console.log("no true cookies exist")
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.listings.map((listing, idx)=>(
                        <TableRow
                            key={listing.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <Link to={`/details/${listing.id}`}>
                                    {listing.name}
                                </Link>
                            </TableCell>
                            <TableCell align="right">{listing.description}</TableCell>
                            <TableCell align="right">{listing.hours}</TableCell>
                            <TableCell align="right">{listing.address}</TableCell>
                            {(props.username[0].name !== null) 
                                ? <TableCell align="right">
                                    <Grid item xs={8}>
                                        <DeleteIcon onClick={()=>props.removeListing(idx)}/>
                                    </Grid>
                                </TableCell>
                                : console.log("no true cookies exist")
                            }
                        </TableRow>
                    ))}
                    {/* This extra TableRow is in here so the line shows up at the bottom 
                    technically the top of this blank TableRow */}
                    <TableRow></TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    ); 
}

export default Home



// (
//     <div>
//         {/* this could solve my differential Nav bars problem: */}
//         {/* <Navigation/> */}
//         <h1> HOME/ LISTINGS page</h1>
//         {props.listings.map((listing, idx)=>(
//             <div>
//             <Link to={`/details/${listing.id}`}>
//                 {console.log("listing.id in Home map: ", listing.id)}
//                 <ul>
                    
//                     <li>Name: {listing.name}</li>
//                     <li>Description: {listing.description}</li>
//                     <li>Hours: {listing.hours}</li>
//                     <li>Address: {listing.address}</li>
//                 </ul>
//                 </Link>
//                     {(cookies.loggedIn === 'true') 
//                         ? <button onClick={()=>props.removeListing(idx)}>delete</button>
//                         : console.log("no true cookies exist")
//                     }
//                 </div>
//     ))}
//         {/* HOME PLACEHOLDER */}
//         {/* {console.log("in Home component, props.listing: ", props.listings)} */}
//     </div>
// )