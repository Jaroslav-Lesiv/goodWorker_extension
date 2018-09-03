import { withRouter } from "react-router";
import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import { Block, HeaderTitle, HeaderNavigationItem } from "../../ui";
import Slide from "@material-ui/core/Slide";
import {Home, Timer, ArrowBack } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import UserNavigation from "./user_navigation";

const UserHeaderRouter = ({}) => (
  <React.Fragment>
    <Switch>
      <Route path="/" exact component={HomeHeader} />
      <Route path="/done" exact component={DoneHeader} />
      <Route path="/create" component={CreateHeader} />
      <Route path="/statistic" component={StatisticHeader} />
      <Route path="/settings" component={SettingsHeader} />
    </Switch>
    <UserNavigation />
  </React.Fragment>
);
const CreateHeader = ({ history }) => (
  <Slide direction="right" in={true} mountOnEnter unmountOnExit>
    <Block>
      <HeaderNavigationItem
        onClick={history.goBack}
      >
        <ArrowBack />
      </HeaderNavigationItem>

      <HeaderTitle>Create Task</HeaderTitle>
    </Block>
  </Slide>
);
const HomeHeader = ({}) => (
  <Slide direction="up" in={true} mountOnEnter unmountOnExit>
    <Block justify={`flex-start`}>
      <HeaderTitle>Task List</HeaderTitle>
    </Block>
  </Slide>
);
const DoneHeader = ({}) => (
  <Slide direction="up" in={true} mountOnEnter unmountOnExit>
    <Block>
      <HeaderTitle>Done Task</HeaderTitle>
    </Block>
  </Slide>
);
const StatisticHeader = ({}) => (
  <Slide direction="up" in={true} mountOnEnter unmountOnExit>
    <Block>
      <HeaderTitle>Statistic</HeaderTitle>
    </Block>
  </Slide>
);
const SettingsHeader = ({}) => (
  <Slide direction="up" in={true} mountOnEnter unmountOnExit>
    <Block>
      <HeaderTitle>Setting</HeaderTitle>
    </Block>
  </Slide>
);

export default withRouter(UserHeaderRouter);
