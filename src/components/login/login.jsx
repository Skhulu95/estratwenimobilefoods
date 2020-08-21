import React from "react";
import loginImg from "../../login.svg";
import "../pages/Log";

export class Login extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
            <a href="/">
              <button
                className="btn nav-btn text-capitalize"
                href="#"
                type="button"
              >
                login
								</button>
            </a>
        </div>
        </div>
      </div>
    );
  }
}

export default Login;