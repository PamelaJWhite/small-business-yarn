import { connect } from 'react-redux'
import Home from '../components/HomeComponent'
import { removeListing } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        listings: state.listings,
        username: state.username,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeListing : (index) => dispatch(removeListing(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

