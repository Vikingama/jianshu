import React, { Component } from "react";
import { TopicWrapper, TopicItem } from "../style";
import topic from "../../../statics/topic.gif";

class Topic extends Component {
    render() {
        const jsx = function() {
            let jsx = [];
            for (let i = 0; i < 7; i++) {
                jsx.push(
                    <TopicItem key={i}>
                        <img className="topic-img" src={topic} alt="topic" />
                        社会热点
                    </TopicItem>
                );
            }
            return jsx;
        };
        return (
            <TopicWrapper>
                {jsx()}
                <span
                    style={{
                        height: "32px",
                        color: "#999",
                        cursor: "pointer",
                        fontSize: "16px",
                        lineHeight: "32px"
                    }}
                >
                    更多热门专题 >>
                </span>
            </TopicWrapper>
        );
    }
}

export default Topic;
