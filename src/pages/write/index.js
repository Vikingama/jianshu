import React, { PureComponent } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Write extends PureComponent {
    render() {
        if (this.props.loginSatus) {
            return (
                <div
                    style={{
                        margin: "120px auto",
                        width: "380px",
                        height: "300px",
                        fontSize: "48px",
                        lineHeight: "300px",
                        textAlign: "center"
                    }}
                >
                    写文章
                </div>
            );
        } else {
            return <Redirect to="/login" />;
        }
    }
}

const mapState = state => ({
    loginSatus: state.getIn(["login", "login"])
});

export default connect(
    mapState,
    null
)(Write);
