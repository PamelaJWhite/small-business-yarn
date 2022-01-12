//an action is an object with keys on it
//must have a type key, must have a value key (sometimes payload)
//action creators are functions that return actions
//use export, not export default, because we're exporting more than one thing
export const addListing = (listing) => {
    return {
        type: "ADD_LISTING",
        value: listing
    }
}

export const removeListing = (index) => {
    return {
        type: "REMOVE_LISTING",
        value: index
    }
}

export const addUserName = (username) => {
    return {
        type: "CHANGE_USERNAME",
        value: username
    }
}

//we'll import these objects in the reducer