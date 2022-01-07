import { connect } from 'react-redux'
import Map from '../components/MapComponent'

const mapStateToProps = (state) => {
    return {
        listings: state.listings
    }
}

export default connect(mapStateToProps)(Map)