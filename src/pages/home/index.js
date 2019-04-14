import React, { Component } from "react";
import { connect } from "react-redux";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import { enableBackTop, disableBackTop } from "./actionCreator";
import ListItem from "./components/ListItem";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import banner from "./../../statics/banner.jpg";

class Home extends Component {
    handleBackTop = () => {
        window.scrollTo(0, 0);
    };
    componentDidMount() {
        window.addEventListener("scroll", this.props.changeBackTopShow, false);
    }
    componentWillMount() {
        window.removeEventListener(
            "scroll",
            this.props.changeBackTopShow,
            false
        );
    }
    render() {
        const jsx = function() {
            let jsx = [];
            for (let i = 0; i < 7; i++) {
                jsx.push(<ListItem key={i} />);
            }
            return jsx;
        };
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src={banner} alt="banner" />
                    <Topic />
                    <div
                        style={{
                            borderTop: "1px solid #dcdcdc"
                        }}
                    >
                        {jsx()}
                    </div>
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {this.props.showBackTop ? (
                    <BackTop onClick={this.handleBackTop}>↑</BackTop>
                ) : null}
            </HomeWrapper>
        );
    }
}

const mapState = state => ({
    showBackTop: state.getIn(["home", "showBackTop"])
});
const mapDispatch = dispatch => ({
    changeBackTopShow() {
        if (document.documentElement.scrollTop > 400) {
            // 展示返回顶部按钮
            dispatch(enableBackTop());
        } else {
            dispatch(disableBackTop());
        }
    }
});

export default connect(
    mapState,
    mapDispatch
)(Home);
