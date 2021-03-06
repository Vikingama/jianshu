import React, { PureComponent } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
    LoginBackground,
    LoginWrapper,
    LoginTitle,
    LoginPhone,
    LoginPwd,
    LoginBtn
} from "./style";
import { handleUserLogin } from "./actionCreator";

class Login extends PureComponent {
    state = {
        phone: "",
        pwd: ""
    };
    handlePhoneInput = e => {
        // e.persist();
        this.setState({
            phone: e.target.value
        });
    };
    handlePwdInput = e => {
        // e.persist();
        this.setState({
            pwd: e.target.value
        });
    };
    handleLogin = e => {
        // e.persist();
        const { phone, pwd } = this.state;
        if (phone.length !== 0 && pwd.length !== 0) {
            this.props.handleUserLogin(this.state);
        }
    };
    render() {
        if (this.props.loginSatus) {
            return <Redirect to="/" />;
        } else {
            return (
                <LoginBackground>
                    <LoginWrapper>
                        <LoginTitle>登录</LoginTitle>
                        <LoginPhone
                            value={this.state.phone}
                            onChange={this.handlePhoneInput}
                        />
                        <LoginPwd
                            value={this.state.pwd}
                            onChange={this.handlePwdInput}
                        />
                        <LoginBtn onClick={this.handleLogin}>登录</LoginBtn>
                    </LoginWrapper>
                </LoginBackground>
            );
        }
    }
}

const mapState = state => ({
    loginSatus: state.getIn(["login", "login"])
});
const mapDispatch = dispatch => ({
    handleUserLogin({ phone, pwd }) {
        dispatch(handleUserLogin(phone, pwd));
    }
});

// 如果某些组件依赖于路由的更新要重新渲染，可以用 withRouter 包裹 connect...
export default connect(
    mapState,
    mapDispatch
    // 使用 react-loadable 包装之后，组件不能正确的的获取路由参数，需要使用 withRouter 包装一下
)(withRouter(Login));
