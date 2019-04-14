import React, { Component } from "react";
import { RecommendWrapper, RecommendItem } from "../style";
class Recommend extends Component {
    render() {
        return (
            <RecommendWrapper>
                <RecommendItem>7 日热门</RecommendItem>
                <RecommendItem>30 日热门</RecommendItem>
                <RecommendItem>优选连载</RecommendItem>
                <RecommendItem>简书版权</RecommendItem>
                <RecommendItem>简书大学堂</RecommendItem>
            </RecommendWrapper>
        );
    }
}

export default Recommend;
