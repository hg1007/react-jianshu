import React, { PureComponent } from 'react'
import { LoginWrapper , LoginBox,Input,Btn } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {Redirect} from 'react-router-dom'

class Login extends PureComponent {
    render() {
        if(!this.props.loginState){
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder="账号" ref={(input)=>{this.account=input}}></Input>
                    <Input placeholder="密码" type="password" ref={(input)=>{this.password=input}}></Input>
                    <Btn onClick={()=>this.props.login(this.password,this.account)}>登录</Btn>
                </LoginBox>
            </LoginWrapper>
        )
        }else{
            return <Redirect to="/"></Redirect>
        }
    }
    componentDidMount(){
     }
}
const mapState=(state)=>({
    loginState: state.getIn(['login', 'login']),
})
const mapDispatch=(dispatch)=>({
    login(password,account){
        console.log('!!!!!!!!!',account)
        dispatch(actionCreators.login(account.value,password.value))
    }
})
export default connect(mapState, mapDispatch)(Login)