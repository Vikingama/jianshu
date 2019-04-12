import React, { Component } from "react";
import { connect } from "react-redux";
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchBar,
    Addition,
    SearchInfo,
    SearchControl,
    SearchUl,
    SearchLi
} from "./style";
import { handleInputFocus, handleInputBlur } from "./actionCreator";

const getListArea = show => {
    if (show) {
        return (
            <SearchInfo>
                <SearchControl>换一换</SearchControl>
                <SearchUl>
                    <SearchLi>1234</SearchLi>
                </SearchUl>
            </SearchInfo>
        );
    } else {
        return null;
    }
};

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo href="/" />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载 APP</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">Aa</NavItem>
                    <SearchBar
                        onFocus={this.props.handleInputFocus}
                        onBlur={this.props.handleInputBlur}
                    />
                    {getListArea(this.props.focused)}
                </Nav>
                <Addition>
                    <span>注册</span>/<span>写文章</span>
                </Addition>
            </HeaderWrapper>
        );
    }
}

const mapStateToProps = state => {
    return {
        focused: state.getIn(["header", "focused"])
    };
};
const mapDispatchToProps = dispatch => {
    return {
        handleInputFocus() {
            dispatch(handleInputFocus());
        },
        handleInputBlur() {
            dispatch(handleInputBlur());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
