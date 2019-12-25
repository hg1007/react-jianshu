import { fromJS } from 'immutable'

const defaultState = fromJS({
  topList:[{
      id:1,
      title:'社会热点',
      imgUrl:'/img/pic.png'
  },{
      id:2,
      title:'logo',
      imgUrl:'/img/logo.png'
  }]
})

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}