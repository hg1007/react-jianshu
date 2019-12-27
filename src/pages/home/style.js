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
    width:280px;
    float:right;
`

export const TopicWrapper = styled.div`
    padding:20px 0 10px 0;
    overflow: hidden;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;
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


export const ListItem = styled.div`
    padding:10px 0;
    border-bottom:1px solid #dcdcdc;
    overflow:hidden
    .pic{
        float:right;
        width:125px;
        height:100px;
        display:block;
    }
`

export const ListInfo = styled.div`
    width:500px;
    float:left;
    .title{
        font-size:18px;
        line-height:27px;
        font-weight:600;
        color: black;
    }
    .desc{
        line-height:24px;
        font-size:13px;
        color:#999999;
        overflow:hidden; 
        text-overflow:ellipsis;
        display:-webkit-box; 
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2; 
        margin-top:20px;
        margin-right:10px;
    }
`

export const ListIcon = styled.div`
    width:500px;
    float:left;
    margin-top:10px;
    .marginR{
        color:#999999;
        font-size:12px;
        margin-right:20px;
        .num{
            margin-left:3px;
        }
    }
`

export const RecommendWrapper = styled.div`
    margin:30px 0;
    width:280px;
`
export const RecommendItem = styled.div`
    width:280px;
    height:50px;
    background:url(${(props) => props.imgUrl});
    background-size:contain;
`

export const WriterWrapper = styled.div`
    width:278px;
    border:1px solid #dcdcdc;
    border-radius:3px;
    height:300px;
    line-height:300px;
    text-align: center;
`

export const LoadMore = styled.div`
    margin:30px 0;
    width:100%;
    height:40px;
    line-height:40px;
    background:#a5a5a5;
    text-align:center;
    border-radius:20px;
    color:#fff;
    cursor:pointer;
`

export const BackTop = styled.div`
    position: fixed;
    right:100px;
    bottom:100px;
    width:60px;
    height:60px;
    text-align:center;
    font-size:14px;
    border:1px solid #000000;
    line-height:60px;
`