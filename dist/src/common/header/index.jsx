import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import UserHeaderRouter from "./user_header";
import HeaderRouter from "./header";
import { withRouter } from "react-router";
import { Header as HeaderUI } from "../../ui";

const mapStateToProps = ({ user }) => ({
  isLogin: user.isLogin
});

@withRouter
@connect(
  mapStateToProps,
  null
)
export class Header extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    const { isLogin } = this.props;
    return (
      <HeaderUI>{isLogin ? <UserHeaderRouter /> : <HeaderRouter />}</HeaderUI>
    );
  }
}

export default Header;
