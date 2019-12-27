import styled from 'styled-components'
import logoPic from '../../static/logo.png'

export const HeaderWrapper = styled.div`
    height:56px;
    border-bottom:1px solid #f0f0f0;
    position: relative
`
export const Logo = styled.div`
    height:56px;
    position:absolute;
    top:0;
    left:0;
    width:100px;
    display:block;
    background:url(${logoPic});
    background-size:contain;
`

export const Nav = styled.div`
    width:960px;
    height:100%;
    margin:0 auto;
    box-sizing:border-box;
    padding-right:70px;
`
export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color: #969696;
    }
    &.active{
        color: #ea6f5a;
    }
`

export const Search = styled.div`
    float:left;
    position:relative;
    .slide-enter{
        transition: all 0.5s ease
    }
    .slide-enter-done{
        width:240px;
    }
    .slide-exit{
        transition: all 0.5s ease
    }
    .slide-exit-done{
        width:160px;
    }
   .zoom {
    &.focus {
        color: white;
        background:#777;
     }
       position: absolute;
       right:5px;
       bottom:5px;
       width:30px;
       line-height:30px;
       text-align:center;
       border-radius:15px;
      
   }   
`
export const SearchInfo = styled.div`
    position:absolute;
    left:0;
    top:56px;
    width:240px;
    padding: 0 20px;
    background:white;
    box-shadow: 0 0 8px rgba(0,0,0,0.2);
`
export const SearchInfoSwitch = styled.span`
    font-size:13px;
    float:right;
    cursor:pointer;
    .spin{
        display:block;
        float:left;
        margin-right:2px;
        font-size:12px;
        transition:all .5s ease-in;
        transform-origin: center center;
    }
`
export const SearchInfoItem = styled.a`
    font-size:12px;
    padding:0 5px;
    line-height:20px;
    border:1px solid #ddd;
    color:#969696;
    border-radius:2px;
    display:block;
    float:left;
    margin-right:10px;
    margin-bottom:15px;
`
export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696
`
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width:160px;
    height:38px;
    border:none;
    outLine:none;
    border-radius:19px;
    margin-top:9px;
    padding:0 30px 0 20px;
    box-sizing:border-box;
    background:#eee;
    font-size:14px;
    margin-left: 20px;
    color:#666
    &::placeholder{
        color:#999
    }
    &.focus {
        width:240px;
    }
`
export const Addition = styled.div`
    position:absolute;
    top:0;
    right:0;
    height:56px;

`
export const Button = styled.div`
    float:right;
    line-height:38px;
    border-radius:19px;
    margin-top:9px;
    border:1px solid rgba(236,97,73,.7);
    margin-right:20px;
    padding:0 20px;
    font-size:14px;
    &.reg{
        color: rgba(236,97,73,.7)
    }
    &.writting{
        color:#fff;
        background:rgba(236,97,73,.7)
    }
`