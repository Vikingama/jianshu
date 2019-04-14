import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail";

class Jianshu extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Router>
                    <Route path="/" component={Home} exact />
                    <Route
                        path="/detail/:id"
                        component={Detail}
                    />
                </Router>
            </Fragment>
        );
    }
}

export default Jianshu;
