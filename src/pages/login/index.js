import React, { PureComponent } from "react";
import { Redirect } from "react-router-dom";
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

export default connect(
    mapState,
    mapDispatch
)(Login);
