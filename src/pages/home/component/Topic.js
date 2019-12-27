import React, { PureComponent } from 'react'
import { TopicWrapper, TopicItem } from '../style'
import { connect } from 'react-redux'

class Topic extends PureComponent {
    render() {
        return (
            <TopicWrapper>
                {this.props.list.map((item) => {
                    return (
                        <TopicItem key={item.get('id')}>
                            <img className="topicPic" src={item.get('imgUrl')} alt="hg"></img>
                            {/* <img className="topicPic" src={[require('../../../static/pic.png')]} alt="hg"></img> */}
                            {item.get('title')}
                        </TopicItem>
                    )
                })}

            </TopicWrapper>
        )
    }
}

const mapState = (state) => {
    return {
        list: state.getIn(['home', 'topList']),
    }
}
export default connect(mapState, null)(Topic)