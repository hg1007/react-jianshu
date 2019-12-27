import { fromJS } from 'immutable'

const defaultState = fromJS({
    topList: [],
    descList: [],
    recommendList: [],
    descPage: 1,
    showScroll: false
})
const initHomeData = (state, action) => {
    return state.merge({
        topList: fromJS(action.topicList),
        descList: fromJS(action.descList),
        recommendList: fromJS(action.recommendList)
    })
}
const addArticleList = (state, action) => {
    return state.merge({
        descList: state.get('descList').concat(action.list),
        descPage: action.nextPage
    })
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'init_home_data':
            return initHomeData(state, action)
        case "add_article_list":
            return addArticleList(state, action)
        case "toggle_Top_Show":
            return state.set('showScroll', action.show)
        default:
            return state
    }
}