import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Login from "./pages/login";
import Write from "./pages/write";
import NotFound from "./pages/notFound";

class Jianshu extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/detail/:id" component={Detail} exact />
                    <Route path="/login" component={Login} exact />
                    <Route path="/write" component={Write} exact />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

export default Jianshu;
