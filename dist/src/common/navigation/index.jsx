import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink, NavigationList, NavigationItem } from "../../ui";
import { withRouter } from "react-router";
@withRouter
export default class Navigation extends Component {
  render() {
    const { exude, location } = this.props
    console.log(location)
    if (exude.includes(location.pathname)) return null
    return (
      <NavigationList>
        <NavigationItem>
          <NavLink to={`/`} exact activeClassName={`active_link`}>
            Task List
          </NavLink>
        </NavigationItem>
        <NavigationItem>
          <NavLink to={`/done`} exact activeClassName={`active_link`}>
            Done List
          </NavLink>
        </NavigationItem>
      </NavigationList>
    );
  }
}
