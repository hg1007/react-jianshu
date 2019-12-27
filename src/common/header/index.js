import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, Search, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem } from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { actionCreators as  loginActionCreators} from '../../pages/login/store'
import { Link } from 'react-router-dom'

class Header extends Component {
  getListArea(show) {
    const { focused, list, page, handleMouseEnter, handleMouseLeave, mouseIn, handleChangePage, totalPage } = this.props
    const pageList = []
    const jsList = list.toJS()
    if (jsList.length) {
      for (let i = (page - 1) * 3; i < page * 3; i++) {
        pageList.push(<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>)
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
                <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <i className='iconfont spin' ref={(icon) => { this.spinIcon = icon }}>&#xe851;</i>
              换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <div>
            {
              pageList
            }
          </div>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    const { focused, handInputFocus, handInputBlur, list, login,logout } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo></Logo>
        </Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载</NavItem>
          <NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
          {login ? <NavItem className='right' onClick={logout}> 退出 </NavItem> : <Link to="/login"><NavItem className='right'> 登陆 </NavItem></Link>}
          <Search>
            <CSSTransition timeout={500} in={focused} classNames='slide'>
              <NavSearch className={focused ? 'focus' : ''} onFocus={() => handInputFocus(list)} onBlur={handInputBlur}></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focus iconfont zoom' : 'iconfont zoom'}>&#xe60b;</i>
            {this.getListArea(focused)}
          </Search>
          <Addition>
            <Button className='reg'>注册</Button>
            <Link to="/write">
            <Button className='writting'><i className='iconfont'>&#xe6b3;</i>写文章</Button>
            </Link>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  }
}
// const getListArea = (show) => {
//   if (show) {
//     return (
//       <SearchInfo>
//         <SearchInfoTitle>
//           热门搜索
//               <SearchInfoSwitch>换一批</SearchInfoSwitch>
//         </SearchInfoTitle>
//         <div>
//           <SearchInfoItem>教育</SearchInfoItem>
//           <SearchInfoItem>教育</SearchInfoItem>
//           <SearchInfoItem>教育</SearchInfoItem>
//           <SearchInfoItem>教育</SearchInfoItem>
//           <SearchInfoItem>教育</SearchInfoItem>
//           <SearchInfoItem>教育</SearchInfoItem>
//           <SearchInfoItem>教育</SearchInfoItem>

//         </div>
//       </SearchInfo>
//     )
//   } else {
//     return null
//   }
// }
// const Header = (props) => {
//   return (
//     <HeaderWrapper>
//       <Logo></Logo>
//       <Nav>
//         <NavItem className='left active'>首页</NavItem>
//         <NavItem className='left'>下载</NavItem>
//         <NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
//         <NavItem className='right'>登录</NavItem>
//         <Search>
//           <CSSTransition timeout={500} in={props.focused} classNames='slide'>
//             <NavSearch className={props.focused ? 'focus' : ''} onFocus={props.handInputFocus} onBlur={props.handInputBlur}></NavSearch>
//           </CSSTransition>
//           <i className={props.focused ? 'focus iconfont' : 'iconfont'}>&#xe60b;</i>
//           {getListArea(props.focused)}
//         </Search>
//         <Addition>
//           <Button className='reg'>注册</Button>
//           <Button className='writting'><i className='iconfont'>&#xe6b3;</i>写文章</Button>

//         </Addition>
//       </Nav>
//     </HeaderWrapper>
//   )
// }

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
    login: state.getIn(['login', 'login'])
    // state.get('header').get('focused')

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handInputFocus(list) {
      if (list.size === 0) {
        dispatch(actionCreators.getList())
      }
      const action = actionCreators.searchFocus()
      dispatch(action)

    },
    handInputBlur() {
      const action = actionCreators.searchBlur()
      dispatch(action)
    },
    handleMouseEnter() {
      const action = actionCreators.mouseEnter()
      dispatch(action)
    },
    handleMouseLeave() {
      const action = actionCreators.mouseLeave()
      dispatch(action)
    },
    handleChangePage(page, totalPage, spin) {

      let angle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (angle) {
        angle = parseInt(angle, 10)
      } else {
        angle = 0
      }
      spin.style.transform = 'rotate(' + (angle + 360) + 'deg)'
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    },
    logout(){
      dispatch(loginActionCreators.logout())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)