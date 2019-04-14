import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail";

class Jianshu extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Route path="/" component={Home} exact />
                <Route path="/detail/:id" component={Detail} />
            </Router>
        );
    }
}

export default Jianshu;
