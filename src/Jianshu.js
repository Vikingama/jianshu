import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail";
import NotFound from "./pages/notFound";

class Jianshu extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/detail/:id" component={Detail} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

export default Jianshu;
