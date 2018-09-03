import React, { Component } from "react";
import {
  Settings,
  PieChart,
  Notifications,
  FeaturedPlayList,
  ViewList
} from "@material-ui/icons";
import { withRouter } from 'react-router'
import {
  IconNavLink,
  AppCloseIcon,
  HeaderNavigationList,
  HeaderNavigationItem
} from "../../ui";
import { connect } from "react-redux";
import { app } from "../../redux/actions";
import { Tooltip } from '@material-ui/core'

const mapDispatchToProps = {
  open: app.open
};
@withRouter
@connect(
  null,
  mapDispatchToProps
)
export default class UserNavigation extends Component {
  closeApp = () => {
    this.props.open(false);
  };

  render() {
    return (
      <HeaderNavigationList>
        <HeaderNavigationItem>
          <IconNavLink to={`/`} exact activeClassName={`active_link`}>
            <ViewList />
          </IconNavLink>
        </HeaderNavigationItem>

        <HeaderNavigationItem>
          <IconNavLink to={`/done`} activeClassName={`active_link`}>
            <FeaturedPlayList />
          </IconNavLink>
        </HeaderNavigationItem>

        <HeaderNavigationItem>
          <Notifications />
        </HeaderNavigationItem>

        <HeaderNavigationItem>
          <IconNavLink to={`/statistic`} activeClassName={`active_link`}>
            <PieChart />
          </IconNavLink>
        </HeaderNavigationItem>

        <HeaderNavigationItem>
          <IconNavLink to={`/settings`} activeClassName={`active_link`}>
            <Settings />
          </IconNavLink>
        </HeaderNavigationItem>

        <HeaderNavigationItem>
          <AppCloseIcon onClick={this.closeApp} />
        </HeaderNavigationItem>
      </HeaderNavigationList>
    );
  }
}
