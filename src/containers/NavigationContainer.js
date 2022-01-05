import { connect } from 'react-redux'
import Navigation from '../components/NavigationComponent'

const mapStateToProps = (state) => {
    return {
        listings: state.listings,
        logininfo: state.logininfo,
        username: state.username
    }
}

export default connect(mapStateToProps)(Navigation)