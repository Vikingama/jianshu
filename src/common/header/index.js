import React, { Component } from "react";
import { connect } from "react-redux";
// import { toJS } from "immutable";
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
import {
    handleInputFocus,
    handleInputBlur,
    getTrendsList,
    handleMouseEnter,
    handleMouseLeave,
    changeTrends
} from "./actionCreator";

const getListArea = props => {
    const {
        focused,
        trends,
        page,
        totalPage,
        mouseIn,
        handleMouseEnter,
        handleMouseLeave,
        changeTrends
    } = props;
    const clickTrendsItem = () => {};
    const currentTrends = [];
    const jsTrends = trends.toJS();
    if (jsTrends.length) {
        for (let i = (page - 1) * 10; i < page * 10; i++) {
            currentTrends.push(jsTrends[i]);
        }
    }
    if ((focused || mouseIn) && jsTrends.length) {
        return (
            <SearchInfo
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <SearchControl
                    onClick={() => {
                        changeTrends(page, totalPage);
                    }}
                >
                    换一换
                </SearchControl>
                <SearchUl>
                    {currentTrends.map((item, index) => (
                        <SearchLi onClick={clickTrendsItem} key={index}>
                            {item}
                        </SearchLi>
                    ))}
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
                    {getListArea(this.props)}
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
        focused: state.getIn(["header", "focused"]),
        trends: state.getIn(["header", "trends"]),
        page: state.getIn(["header", "page"]),
        totalPage: state.getIn(["header", "totalPage"]),
        mouseIn: state.getIn(["header", "mouseIn"])
    };
};
const mapDispatchToProps = dispatch => {
    return {
        handleInputFocus() {
            dispatch(getTrendsList());
            dispatch(handleInputFocus());
        },
        handleInputBlur() {
            dispatch(handleInputBlur());
        },
        handleMouseEnter() {
            dispatch(handleMouseEnter());
        },
        handleMouseLeave() {
            dispatch(handleMouseLeave());
        },
        changeTrends(page, totalPage) {
            if (page >= totalPage) {
                page = 1;
            } else {
                page = page + 1;
            }
            dispatch(changeTrends(page));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
