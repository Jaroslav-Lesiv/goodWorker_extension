import { withRouter } from "react-router";
import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import { Block, HeaderTitle } from "../../ui";
import Slide from "@material-ui/core/Slide";

const HeaderRouter = ({}) => (
  <Switch>
    <Route path="/" exact component={AuthHeader} />
  </Switch>
);

const AuthHeader = ({}) => (
  <Slide direction="right" in={true} mountOnEnter unmountOnExit>
    <Block>
      <HeaderTitle>
        Auth
      </HeaderTitle>
    </Block>
  </Slide>
);

export default withRouter(HeaderRouter);
