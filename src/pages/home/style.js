import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width:960px;
    margin: 0 auto;
    overflow:hidden;
`

export const HomeLeft = styled.div`
    width:625px;
    margin-left: 15px;
    padding-top:30px;
    float:left;
    .banner{
        width:625px;
        height:270px;
    }
`

export const HomeRight = styled.div`
    width:240px;
    float:right;
`

export const TopicWrapper = styled.div`
    padding:20px 0 10px 0;
    overflow: hidden;
    margin-left:-18px;
`
export const TopicItem = styled.div`
    background:#f7f7f7;
    height:32px;
    padding-right:10px;
    line-height:32px;
    font-size:14px;
    color:#000;
    margin-left:18px;
    border:1px #dcdcdc solid;
    float:left;
    margin-bottom: 18px;
    .topicPic{
        width:32px;
        height:32px;
        display:block;
        float:left;
        margin-right:10px;
    }
`