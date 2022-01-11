import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from "cookie"

import Home from './containers/HomeContainer'
import Details from './containers/DetailsContainer'
import Login from './containers/LoginContainer'
import AddListing from './containers/AddListingContainer'

//function to see if loggedIn cookies are set
const checkAuth = (props) => {
    const cookies = cookie.parse(document.cookie)
    console.log("cookies in checkAuth: ", cookies)
    return cookies.loggedIn === 'true' ? true : false
}

//ProtectedRoute component to wrap routes that only a logged-in user can access
const ProtectedRoute = ({children}) => {
    // set the function equal to variable auth
    const auth = checkAuth() 
    
    //if auth is true, i.e., user is logged in,
    //render children, i.e., addListing route
    //else go to the login page
    return   (auth === true) ? children : <Navigate to="/login"/>
}

//Router to establish all routes
const Router = () => {
    return (
        <Routes>
            {/* three routes to be accessed by anyone */}
            <Route path='/' element={<Home/>}/>
            <Route path='/details/:id' element={<Details/>}/>
            <Route path='/login' element={<Login/>}/>
            {/* addListing route protected */}
            <Route 
                path='/addListing' 
                element={
                    <ProtectedRoute>
                        <AddListing/>
                    </ProtectedRoute>
                    }
            />
        </Routes>
    )
}

//export to allow access to Router in other files
export default Router
