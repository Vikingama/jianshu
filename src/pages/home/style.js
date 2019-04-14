import styled from "styled-components";
import recommend from "../../statics/recommend.png";

export const HomeWrapper = styled.div`
    margin: 0 auto;
    width: 960px;
    min-height: 240px;
    overflow: hidden;
`;
export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    .banner-img {
        width: 625px;
        height: 270px;
        vertical-align: top;
    }
`;
export const HomeRight = styled.div`
    float: right;
    width: 280px;
`;
export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
`;
export const TopicItem = styled.div`
    float: left;
    margin: 0 19px 10px 0;
    padding-right: 7px;
    height: 32px;
    background: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    color: #000;
    font-size: 14px;
    line-height: 32px;
    overflow: hidden;
    .topic-img {
        margin-right: 7px;
        width: 34px;
        height: 34px;
        vertical-align: middle;
    }
`;
export const ItemWrapper = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    &:last-of-type {
        border-bottom: none;
    }
    .item-img {
        float: right;
        display: block;
        width: 125px;
        height: 100px;
        border-radius: 3px;
    }
`;
export const ItemInfo = styled.div`
    float: left;
    padding-right: 10px;
    width: 500px;
    box-sizing: border-box;
    .info-h3 {
        color: #333;
        font-size: 18px;
        font-weight: bold;
        line-height: 27px;
    }
    .info-p {
        color: #999;
        font-size: 13px;
        line-height: 18px;
        text-indent: 27px;
    }
`;
export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`;
export const RecommendItem = styled.div`
    margin-bottom: 10px;
    width: 280px;
    height: 50px;
    background-image: url(${recommend});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 3px;
    color: white;
    cursor:pointer
    line-height: 50px;
    text-align: center;
    &:nth-of-type(1) {
        background-position: 0 0;
    }
    &:nth-of-type(2) {
        background-position: 0 -50px;
    }
    &:nth-of-type(3) {
        background-position: 0 -100px;
    }
    &:nth-of-type(4) {
        background-position: 0 -150px;
    }
    &:nth-of-type(5) {
        margin-bottom: 0;
        background-position: 0 -200px;
    }
`;
export const WriterWrapper = styled.div`
    width: 278px;
    height: 198px;
    background-image: url(${recommend});
    background-position: 0 -250px;
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    line-height: 198px;
    text-align: center;
`;
