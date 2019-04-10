import React, { Component } from "react";
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchBar,
    Addition
} from "./style";

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
                    <SearchBar />
                    <Addition>
                        <span>注册</span>/<span>写文章</span>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        );
    }
}

export default Header;
