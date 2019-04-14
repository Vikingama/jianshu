import React, { Component } from "react";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import ListItem from "./components/ListItem";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import banner from "./../../statics/banner.jpg";

class Home extends Component {
    render() {
        const jsx = function() {
            let jsx = [];
            for (let i = 0; i < 7; i++) {
                jsx.push(
                    <ListItem key={i}/>
                );
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
            </HomeWrapper>
        );
    }
}

export default Home;
