import React, { PureComponent } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import { enableBackTop, disableBackTop } from "./actionCreator";
import ListItem from "./components/ListItem";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import banner from "../../statics/banner.jpg";

class Home extends PureComponent {
    requestAnimation = () => {
        let scrollTop = document.documentElement.scrollTop,raf;
        if(scrollTop>0){
            document.documentElement.scrollTop = document.documentElement.scrollTop - (scrollTop / 10)
            raf = requestAnimationFrame(this.requestAnimation);
        }else{
            cancelAnimationFrame(raf);
        }
    }
    handleBackTop = () => {
        // let scrollTop = document.documentElement.scrollTop;
        // let interval = setInterval(() => {
        //     document.documentElement.scrollTop = document.documentElement.scrollTop - (scrollTop / 10);
        //     if (document.documentElement.scrollTop === 0) {
        //         clearInterval(interval);
        //     }
        // }, 30);
        this.requestAnimation();
    };
    componentDidMount() {
        window.addEventListener("scroll", this.props.changeBackTopShow, false);
    }
    componentWillUnmount() {
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
                if (i === 6) {
                    jsx.push(
                        <Link
                            to={"detail/" + i}
                            style={{
                                display: "block"
                            }}
                            key={i}
                        >
                            <ListItem key={i} />
                        </Link>
                    );
                } else {
                    jsx.push(
                        <Link
                            to={"detail/" + i}
                            style={{
                                display: "block",
                                borderBottom: "1px solid #dcdcdc"
                            }}
                            key={i}
                        >
                            <ListItem key={i} />
                        </Link>
                    );
                }
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
)(withRouter(Home));
