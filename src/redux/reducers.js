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

const username = (state = [], action) =>{
    
    switch(action.type) {
        case "CHANGE_USERNAME" : 
            return [action.value]
    default :
        return state
    }

}


export default combineReducers({ username, listings })