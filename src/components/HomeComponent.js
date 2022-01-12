//import outside functionality stuff
import React from 'react'
import { Link } from 'react-router-dom'

//import styling stuff
//import material UI components
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';

//return table of listings
//dynamically render delete functionality if user has logged in
const Home = (props) => {

    return(
        <div style={{margin:"40px 100px"}}>
        <TableContainer >
            <Table sx={{ minWidth: 600 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{width:"60px", color:"grey"}}>Name</TableCell>
                        <TableCell align="left" style={{color:"grey"}}>Description</TableCell>
                        <TableCell align="left" style={{width:"60px", color:"grey"}}>Hours</TableCell>
                        <TableCell align="left"style={{width:"120px", color:"grey"}}>Address</TableCell>
                        {(props.username[0].name !== null) 
                            ? <TableCell align="left" style={{color:"grey"}}>
                                Delete
                            </TableCell> 
                            : console.log("no user name")
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
                            <TableCell align="left">{listing.description}</TableCell>
                            <TableCell align="left">{listing.hours}</TableCell>
                            <TableCell align="left">{listing.address}</TableCell>
                            {(props.username[0].name !== null) 
                                ? <TableCell align="left">
                                    <Grid item xs={8}>
                                        <DeleteIcon className="deleteIcon" style={{fill:"red"}} onClick={()=>props.removeListing(idx)}/>
                                    </Grid>
                                </TableCell>
                                : console.log("no username")
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