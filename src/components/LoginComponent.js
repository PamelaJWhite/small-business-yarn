import React from 'react'
//import material UI components
// import {Link} from 'react-router-dom'


const Login = (props) => {
    const login = (e) => {
        e.preventDefault()
       //set cookie to be logged in
        document.cookie = `loggedIn=true;max-age=1000`

        //props.logUserIn() to set logininfo state to true
        //this works - 
        //e.g., the props.logininfo changes 
        //from false to true in the Navigation component
        //However, when window.location.assign runs
        //the state in Navigation component goes back to false
        // props.logUserIn()

        //I stopped using this and instead
        //changed the / page to be different
        //contingent upon being logged in
        // window.location.replace("/admin")
        
        window.location.replace("/")
    }
    return (
        <div>
            <form onSubmit={(e) => login(e)}>
                <input placeholder="email"/>
                <input placeholder="password"/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login