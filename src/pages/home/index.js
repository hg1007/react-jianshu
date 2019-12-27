import React, { PureComponent } from 'react'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import Topic from './component/Topic'
import List from './component/List'
import Recommend from './component/Recommend'
import Writer from './component/Writer'
import { connect } from 'react-redux'
import { actionCreators } from './store'


class Home extends PureComponent {
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
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}

            </HomeWrapper>
        )
    }
    handleScrollTop() {
        window.scrollTo(0, 0)
    }
    componentDidMount() {
        this.props.getHomeInfo()
        this.bindEvent()
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }
    bindEvent() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}
const mapDispatch = (dispatch) => ({
    getHomeInfo() {
        const action = actionCreators.getHomeInfo()
        dispatch(action)
    },
    changeScrollTopShow(e) {
        if (document.documentElement.scrollTop > 100) {
            dispatch(actionCreators.toggleTopShow(true))
        } else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})
export default connect(mapState, mapDispatch)(Home)