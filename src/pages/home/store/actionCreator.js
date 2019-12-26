import axios from 'axios'
import { fromJS } from 'immutable'


export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const data = res.data.data;
            const action = {
                type: 'init_home_data',
                topicList: data.topList,
                descList: data.descList,
                recommendList: data.recommendList
            }
            dispatch(action)
        })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const data = res.data.data
            const action = {
                type: 'add_article_list',
                list: fromJS(data),
                nextPage: page + 1
            }
            dispatch(action)
        })
    }
}