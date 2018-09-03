import { List } from "./list";
import { Item } from "./item";
// import { Grow } from "@material-ui/core";
import { MoreHoriz } from "@material-ui/icons";
import { Hr } from "../../root";
import { isEmpty } from "../../../helper";
import React, { Component } from "react";
import styled from "styled-components";
import { Grow } from "@material-ui/core";

const Button = styled.button`
  border: none;
  padding: 10px;
  margin: 0 10px;
  font-size: 24px;
  height: 24px;
  width: 24px;

`;

export default class TaskControlList extends Component {
  state = {
    isOpen: false
  };

  toogle = () => {
    this.setState(state =>  ({ isOpen: !state.isOpen }) );
  };

  render() {
    const { options = [], icon = <MoreHoriz /> } = this.props;
    const { isOpen } = this.state
    return (
      <React.Fragment>
        <Button onClick={this.toogle}>
          {icon}
          <Grow in={isOpen} mountOnEnter unmountOnExit>
          <List position={`absolute`}>
            {options.map(
              option =>
                isEmpty(option) ? (
                  <Item>
                    <Hr />
                  </Item>
                ) : (
                  <Item onClick={option.onClick}>
                    {option.icon && option.icon}
                    {option.label}
                    {option.afterIcon && option.afterIcon}
                  </Item>
                )
            )}
          </List>
        </Grow>
        </Button>
        
      </React.Fragment>
    );
  }
}

export { TaskControlList };
