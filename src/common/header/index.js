import React, { PureComponent, Fragment } from "react";
import { Link } from "react-router-dom";
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
import {
    handleInputFocus,
    handleInputBlur,
    getTrendsList,
    handleMouseEnter,
    handleMouseLeave,
    changeTrends
} from "./actionCreator";
import { handleUserLogout } from "../../pages/login/actionCreator";

class Header extends PureComponent {
    render() {
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>
                <Nav>
                    <Link to="/">
                        <NavItem className="left active">首页</NavItem>
                    </Link>
                    <NavItem className="left">下载 APP</NavItem>
                    {this.props.loginSatus ? (
                        <NavItem
                            className="right"
                            onClick={this.props.handleLogout}
                        >
                            退出
                        </NavItem>
                    ) : (
                        <Link to="/login">
                            <NavItem className="right">登录</NavItem>
                        </Link>
                    )}
                    <NavItem className="right">Aa</NavItem>
                    <SearchBar
                        onFocus={() => {
                            this.props.handleInputFocus(this.props.trends);
                        }}
                        onBlur={this.props.handleInputBlur}
                    />
                    {getListArea(this.props)}
                </Nav>
                <Addition>
                    {this.props.loginSatus ? (
                        <Link to="/write">
                            <span>写文章</span>
                        </Link>
                    ) : (
                        <Fragment>
                            <span>注册</span>
                            <Link to="/write">
                                <span>写文章</span>
                            </Link>
                        </Fragment>
                    )}
                </Addition>
            </HeaderWrapper>
        );
    }
}

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
const mapStateToProps = state => {
    return {
        focused: state.getIn(["header", "focused"]),
        trends: state.getIn(["header", "trends"]),
        page: state.getIn(["header", "page"]),
        totalPage: state.getIn(["header", "totalPage"]),
        mouseIn: state.getIn(["header", "mouseIn"]),
        loginSatus: state.getIn(["login", "login"])
    };
};
const mapDispatchToProps = dispatch => {
    return {
        handleInputFocus(trends) {
            trends.size === 0 && dispatch(getTrendsList());
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
        },
        handleLogout() {
            dispatch(handleUserLogout());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
