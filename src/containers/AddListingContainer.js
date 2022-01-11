import { connect } from 'react-redux'
import AddListing from '../components/AddListingComponent'
import { addListing } from '../redux/actions'


const mapStateToProps = (state) => {
    return {
        listings: state.listings
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
        //in the dispatch function/ method
        //we call the functions that we imported
    
         //key is the function - addListing
        //value is a new function
        //that calls the key function
        //wrapped in a dispatch function
        addListing : (listing) => dispatch(addListing(listing)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddListing)

