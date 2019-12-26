import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import Topic from './component/Topic'
import List from './component/List'
import Recommend from './component/Recommend'
import Writer from './component/Writer'
import { connect } from 'react-redux'
import { actionCreators } from './store'


class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner" src={[require("../../static/pic.png")]} alt="zzzhg"></img>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.getHomeInfo()
    }
}
const mapDispatch = (dispatch) => ({
    getHomeInfo() {
        const action = actionCreators.getHomeInfo()
        dispatch(action)
    }
})
export default connect(null, mapDispatch)(Home)