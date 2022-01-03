//an action is an object with keys on it
//must have a type key, must have a value key (sometimes payload)
//action creators are functions that return actions
//use export, not export default, because we're exporting more than one thing
export const addListing = (listing) => {
    return {
        type: "ADD_LISTING",
        //this will not be ford or a specific name
        //but later will be a variable that we pass in as props
        value: listing
    }
}

export const removeListing = (index) => {
    return {
        type: "REMOVE_LISTING",
        value: index
    }
}

export const logUserIn = (logininfo) => {
    return {
        type: "LOG_USER_IN",
        value: logininfo
    }
}

//we'll import these objects in the reducer