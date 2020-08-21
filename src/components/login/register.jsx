import React from "react";
import "../pages/Log";

export class Register extends React.Component {
  render() {
    return (
      <div className="container">
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
            <a href="/Log">
              <button
                className="btn nav-btn text-capitalize"
                href="#"
                type="button"
              >
                Register
								</button>
            </a>
        </div>
        </div>
      </div>
    );
  }
}

export default Register;