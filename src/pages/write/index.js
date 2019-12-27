import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Login extends PureComponent {
    render() {
        if (this.props.loginState) {
            return (
                <div>写文章</div>
            )
        } else {
            return <Redirect to="/login"></Redirect>
        }
    }

}
const mapState = (state) => ({
    loginState: state.getIn(['login', 'login']),
})

export default connect(mapState, null)(Login)