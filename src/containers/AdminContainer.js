import { connect } from 'react-redux'
import Admin from '../components/AdminComponent'
import { removeListing } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        listings: state.listings
    }
}

//make actions available to dispatch throughout the project
const mapDispatchToProps = (dispatch) => {
    return {
        removeListing: (idx) => dispatch(removeListing(idx))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
