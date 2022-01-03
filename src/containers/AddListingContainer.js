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
        //in this case, addCar() and removeCar()
        //we used the parameters car and index; what are those arguments 
        //or from where are those arguments coming?
         //----------------
         //key is the function
        //value is a new function
        //that calls the key function
        //wrapped in a dispatch function
        addListing : (listing) => dispatch(addListing(listing)),
        // removeCar : (index)=>dispatch(removeCar(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddListing)

