import { fromJS } from 'immutable'

const defaultState = fromJS({
    topList: [],
    descList: [],
    recommendList: [],
    descPage:1
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'init_home_data':
            return state.merge({
                topList: fromJS(action.topicList),
                descList: fromJS(action.descList),
                recommendList: fromJS(action.recommendList)
            })
        case "add_article_list":
            return state.merge({
                descList:state.get('descList').concat(action.list),
                descPage: action.nextPage
            })
            // state.set('descList', state.get('descList').concat(action.list))
        default:
            return state
    }
}