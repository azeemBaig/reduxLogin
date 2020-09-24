import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/reducer";
import { Redirect } from "react-router-dom";

import "./loginForm.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { email, password } = this.state;
    let { isLoginPending, isLoginSuccess, isLoginError } = this.props;
    if (isLoginSuccess === true) {
      return <Redirect to={"/home"} />;
    }
    return (
      <div
        className="container"
        style={{ margin: "10% auto" }}
        onSubmit={this.onSubmit}
      >
        <form className="form-style">
          <div className="form-group">
            <label>Email address</label>
            <input
              onChange={(e) => this.setState({ email: e.target.value })}
              className="form-control"
              type="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              onChange={(e) => this.setState({ password: e.target.value })}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          {isLoginPending && (
            <div class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          )}
          {isLoginSuccess && <div>Welcome Back...</div>}
          {isLoginError && (
            <div
              className="alert alert-danger"
              style={{ margin: "10px auto" }}
              role="alert"
            >
              Wrong Email & Password
            </div>
          )}
        </form>
      </div>
    );
  }
  onSubmit = (e) => {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password);
  };
}

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    isLoginError: state.isLoginError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
