import { connect } from 'react-redux'
import Login from '../components/LoginComponent'
import { logUserIn } from "../redux/actions"

const mapStateToProps = (state) => {
    return {
        listings: state.listings,
        logininfo: state.logininfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logUserIn: (idx) => dispatch(logUserIn(idx))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
