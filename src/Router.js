import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from "cookie"

import Home from './containers/HomeContainer'
import Details from './containers/DetailsContainer'
import Login from './containers/LoginContainer'
import Admin from './containers/AdminContainer'
import AddListing from './containers/AddListingContainer'
import Navigation from './containers/NavigationContainer'

const checkAuth = (props) => {
    const cookies = cookie.parse(document.cookie)
    console.log("cookies in checkAuth: ", cookies)
    return cookies.loggedIn === 'true' ? true : false
}
//took out {component: Component, ...rest} and replaced with {children}
const ProtectedRoute = ({children}) => {
    // set the function equal to variable setAuth
    //b/c can't use the function in the first part of the ternary operator in the return statement
    const auth = checkAuth() 
    console.log("checkAuth() in ProtecedRoute: ", checkAuth())
    console.log("auth in ProtectedRoute: ", auth)
    
    return   (auth === true) ? children : <Navigate to="/login"/>
    //I think I got it, but I'm not passing props?
        //well, the state data are getting to the admin page so...
            // ? <Component {...props} />
            // : <Navigate to={{pathname: '/login', state: {from: props.location}}} />
}
           
    //below works before v6 (I tried in my Protected Routes project)
    // return (
    //   <Route
    //     // spread the rest of the props that are needed in this component
    //     {...rest}
    //     // define the value of the render method as a ternary that checks to see if checkAuth returns true or false
    //     render={(props) => auth
    //         // if true render the component with all the props
    //         ? <Component {...props} />
    //         // if false, use the Redirect component to update the url to `/login` so they are redirected to the login component
    //         : <Navigate to={{pathname: '/login', state: {from: props.location}}} />}
    //   />
    // )


const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/details/:id' element={<Details/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route 
                path='/admin'
                element={
                    <ProtectedRoute>
                        <Admin/>  
                    </ProtectedRoute>
                }
            />
            <Route 
                path='/addListing' 
                element={
                    <ProtectedRoute>
                        <AddListing/>
                    </ProtectedRoute>
                    }
            />
            
            {/* <ProtectedRoute path='/newlisting' element={<NewListing/>}/> */}
        </Routes>
    )
}
export default Router
