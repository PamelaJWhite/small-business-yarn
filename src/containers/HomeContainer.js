import { connect } from 'react-redux'
import Home from '../components/HomeComponent'
import { removeListing } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        listings: state.listings,
        username: state.username,
        logininfo: state.logininfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        //call the functions that we imported
         //key is the function
        //value is a new function
        //that calls the key function
        //wrapped in a dispatch function
        removeListing : (index) => dispatch(removeListing(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

