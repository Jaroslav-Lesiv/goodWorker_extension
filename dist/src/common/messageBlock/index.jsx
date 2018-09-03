import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { message } from "../../actions/message";
import styled from "styled-components";
import Slide from "@material-ui/core/Slide";
import { Typography } from "@material-ui/core";

const mapDispatchToProps = {
    setMessage: message.setMessage,
    clearMessage: message.clearMessage
  };
  
  const mapStateToProps = ({ message }) => ({
    status: message.status,
    message: message.message
  });
  
@connect(mapStateToProps, mapDispatchToProps)
export default class Message extends Component {
    constructor() {
        super()
        this.timer = null
    }

    componentWillReceiveProps = ({ message }) => {
        if (message && (this.props.message !== message)) {
            this.clearMessageTimer()
        }
    }

    clearMessageTimer = () => {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
            this.props.clearMessage()
        }, 6000)
    }
  render() {
    const { status, message } = this.props;
    return (
      <MessageWrapper>
        <Slide in={Boolean(message)} direction="left"  mountOnEnter unmountOnExit>
          <MessageContent status={status}>{message}</MessageContent>
        </Slide>
      </MessageWrapper>
    );
  }
}

Message.defaultProps = {
  status: "success",
  message: "none"
};
const MessageContent = styled(Typography)`
  text-align: center  !important;
  font-size: 15px !important;
    font-weight: 500 !important;
  color: ${({ status }) => status === 'success' ? 'rgb(46,204,113)' : status === 'error' ? 'rgb(231,76,60)' : 'rgb(230,126,34)'}  !important;
  padding: 10px 15px !important;
 border: 1px solid ${({ status }) => status === 'success' ? 'rgb(46,204,113)' : status === 'error' ? 'rgb(231,76,60)' : 'rgb(230,126,34)'} ;
 border-radius: 4px !important;
`;
const MessageWrapper = styled.div`
  min-height: 30px;
  margin-top: auto !important;
`;
