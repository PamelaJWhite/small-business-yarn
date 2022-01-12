import { connect } from 'react-redux'
import Login from '../components/LoginComponent'
import { addUserName } from "../redux/actions"

const mapStateToProps = (state) => {
    return {
        listings: state.listings,
        username: state.username
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUserName: (username) => dispatch(addUserName(username))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
