import styled from "styled-components";
import logo from "../../statics/logo.png";

// HeaderWrapper 此时就是一个带样式的 div...
export const HeaderWrapper = styled.div`
    position: relative;
    min-width: 900px;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.a`
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 56px;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;
export const Nav = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 0 100px;
    width: 80%;
    min-width: 770px;
    box-sizing: border-box;
    /* 通过伪元素清浮动，如果父元素不清浮动会引起内容塌陷，快忘完了 */
    ::after {
        clear: both;
        content: "";
        display: block;
        width: 0;
        height: 0;
    }
`;
export const NavItem = styled.span`
    padding: 0 15px;
    height: 56px;
    cursor: pointer;
    font-size: 17px;
    line-height: 56px;
    &.left {
        float: left;
        color: #333;
    }
    &.right {
        float: right;
        color: rgb(150, 150, 150);
    }
    &.active {
        color: rgb(217, 118, 97);
    }
`;
export const SearchBar = styled.input.attrs({
    type: "text",
    placeholder: "搜索"
})`
    margin: 9px 0 0 30px;
    padding: 0 15px;
    width: 130px;
    height: 38px;
    background: rgb(238, 238, 238);
    border: none;
    border-radius: 20px;
    color: black;
    font-size: 14px;
    outline: none;
    transition: all 0.5s;
    &:focus {
        width: 210px;
    }
    &::placeholder {
        color: #999;
    }
`;
export const Addition = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 130px;
    height: 56px;
    line-height: 56px;
    color: rgb(217, 118, 97);
    span {
        padding: 0 7px;
        color: rgb(217, 118, 97);
        cursor: pointer;
    }
`;
export const SearchInfo = styled.div`
    position: absolute;
    top: 58px;
    left: 300px;
    padding: 15px;
    width: 234px;
    border-radius: 5px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
`;
export const SearchControl = styled.button`
    float: right;
    margin: 0;
    padding: 0;
    border: none;
    color: #999;
    cursor: pointer;
    outline: none;
`;
export const SearchUl = styled.ul`
    margin: 0 0 -8px 0;
    padding: 28px 0 0 0;
    width: 100%;
    list-style: none;
`;
export const SearchLi = styled.li`
    display: inline-block;
    margin: 0 8px 8px 0;
    padding: 2px;
    border: 1px solid #999;
    border-radius: 3px;
    color: #787878;
    cursor: pointer;
    font-size: 8px;
`;
