import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Jianshu from "./Jianshu";
import { GlobalStyle } from "./style";
import { store } from "./store";

ReactDOM.render(
    <Provider store={ store }>
        <Fragment>
            <GlobalStyle />
            <Jianshu />
        </Fragment>
    </Provider>,
    document.getElementById("root")
);
