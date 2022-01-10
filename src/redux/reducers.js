import { combineReducers } from 'redux'

const listings = (state = [], action) => {
    
    switch(action.type) {
        case "ADD_LISTING" : 
            return [ ...state, action.value]
        case "REMOVE_LISTING" :
            let newState = [...state]
            newState.splice(action.value, 1)
            return newState
    default :
        return state
    }
}
const logininfo = (state = false, action) =>{
    
    switch(action.type) {
        case "LOG_USER_IN" :
            console.log("state in logininfo reducer: ", state)
            let newState = state

            newState = true
            return newState
    default :
        return state
    }

}

const username = (state = [], action) =>{
    
    switch(action.type) {
        case "CHANGE_USERNAME" : 
            return [action.value]
    default :
        return state
    }

}


export default combineReducers({ username, logininfo, listings })