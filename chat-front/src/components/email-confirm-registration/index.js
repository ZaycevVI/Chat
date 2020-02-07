import React from 'react'
import { Icon } from "antd";

function EmailConfirmRegistration() {
    return (
        <div className="registration">
          <Icon
            type="exclamation-circle"
            style={{ color: "blue", fontSize: "20px" }}
          />
          <h3>Confirm your account</h3>
          <p>
            Activation link was sent to your email. Pls, follow the link and
            confirm registration procedure.
          </p>
        </div>
    )
}

export default EmailConfirmRegistration
