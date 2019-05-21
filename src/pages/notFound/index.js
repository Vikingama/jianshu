import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";

class NotFound extends PureComponent {
    render() {
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
                @.@...
            </div>
        );
    }
}

export default withRouter(NotFound);
