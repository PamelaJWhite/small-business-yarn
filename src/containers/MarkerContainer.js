import { connect } from 'react-redux'
import Marker from '../components/MarkerComponent'

const mapStateToProps = (state) => {
    return {
        listings: state.listings
    }
}

export default connect(mapStateToProps)(Marker)