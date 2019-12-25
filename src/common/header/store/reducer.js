import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false,
    list: [],
    mouseIn: false,
    totalPage: 1,
    page: 1
})

export default (state = defaultState, action) => {
    // if (action.type === constants.SEARCH_FOCUS) {
    //     return state.set('focused', true)
    // } else if (action.type === constants.SEARCH_BLUR) {
    //     return state.set('focused', false)
    // } else if (action.type === constants.CHANGE_LIST) {
    //     return state.set('list', action.data)
    // }
    switch (action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused', true);
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        case constants.CHANGE_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
        case constants.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case constants.CHANGE_PAGE:
            return state.set('page', action.page);
        default:
            return state
    }
}