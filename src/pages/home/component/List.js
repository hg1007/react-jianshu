import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'

import {
    ListItem,
    ListInfo,
    ListIcon,
    LoadMore
} from '../style'


class List extends PureComponent {
    render() {
        return (
            <div>
                {
                    this.props.list.map((item, index) => {
                        return (
                            <Link key={index} to={"/detail/" + item.get('id')}>
                                <ListItem>
                                    <img src={item.get('imgUrl')} alt="" className="pic"></img>
                                    <ListInfo>
                                        <h3 className="title">{item.get('title')}</h3>
                                        <p className="desc"> {item.get('desc')} </p>
                                    </ListInfo>

                                    <ListIcon>
                                        <span className="marginR">
                                            <i className='iconfont'>&#xe620;</i><span className="num">{item.get('num')}</span>
                                        </span>
                                        <span className="marginR">
                                            <i className='iconfont'>&#xe630;</i><span className="num">{item.get('num1')}</span>
                                        </span>
                                        <span className="marginR">
                                            <i className='iconfont'>&#xe6f3;</i><span className="num">{item.get('num2')}</span>
                                        </span>
                                    </ListIcon>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={() => this.props.getMoreList(this.props.page)}>更多</LoadMore>
            </div>
        )
    }
}
const mapState = (state) => {
    return {
        list: state.getIn(['home', 'descList']),
        page: state.getIn(['home', 'descPage']),
    }
}
const mapDispatch = (dispatch) => ({
    getMoreList(page) {

        dispatch(actionCreators.getMoreList(page))
    }
})
export default connect(mapState, mapDispatch)(List)