import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Jianshu from "./Jianshu";
import { GlobalStyle } from "./style";

ReactDOM.render(
    <Fragment>
        <GlobalStyle />
        <Jianshu />
    </Fragment>,
    document.getElementById("root")
);
