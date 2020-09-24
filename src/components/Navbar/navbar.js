import React, { Component } from "react";
import { logout } from "../../redux/reducer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class NavBar extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    this.props.logout();
  };
  render() {
    let { isLoginPending, isLoginSuccess, isLoginError } = this.props;
    if (isLoginSuccess === false) {
      return <Redirect to={"/"} />;
    }
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2"></div>
          <div className="mx-auto order-0">
            <div className="navbar-brand mx-auto">Dashboard</div>
          </div>
          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a
                  className="nav-link btn btn-outline-success my-2 my-sm-0"
                  onClick={this.handleLogout}
                >
                  logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
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
    logout: () => dispatch(logout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
