import styled, { keyframes } from "styled-components";
import React from "react";
import { header, app, animation, color } from "../variables";
import { APP_WIDTH, APP_HEIGHT, APP_NAME } from "../../config/index";
import shadows from "@material-ui/core/styles/shadows";
import { Typography } from "@material-ui/core";
const show = keyframes`
  from {
    transform: translateX(${app.offset}px)
  }

  to {
    transform: translateX(0)
  }
`;

const hide = keyframes`
  from {
    transform: translateX(0)
  }

  to {
    transform: translateX(${app.offset}px)
  }
`;

const Application = styled.div.attrs({
  id: APP_NAME
})`
  &#${APP_NAME} {
    position: fixed;
    transform: translateX(${app.offset}) px;
    top: 30px;
    right: 30px;
    width: ${APP_WIDTH}px;
    height: ${APP_HEIGHT}px;
    background: #ffffff;
    border-radius: 4px;
    overflow: hidden;
    animation: ${({ isOpen }) =>
      isOpen === null
        ? `${hide} 0s ease-in-out`
        : isOpen
          ? `${show} ${animation.fast} ease-in-out`
          : `${hide} ${animation.fast} ease-in-out;`};
    animation-fill-mode: forwards;
    z-index: 10000;
    box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, 0.6);
    border-right: 1px solid #3a83ed;
    border-left: 1px solid #3a83ed;
    box-sizing: border-box;
    * {
      box-sizing: border-box;
    }
  }
`;
const HeaderNavigationList = styled.ul.attrs({
  id: `${APP_NAME}_HeaderNavigationList`
})`
  &#${APP_NAME}_HeaderNavigationList {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0;
    margin: 0;
    li:last-child {
      margin-left: 20px;
    }
  }
`;

const Hr = styled.hr.attrs({
  className: `${APP_NAME}_Hr`
})`
  &.${APP_NAME}_Hr {
    width: 100%;
    color: ${color.text_color};
    padding: 0 2px;
    border: 0;
    border-bottom: 1px solid ${color.text_color};
    margin: 2px 0;
    display: flex;
  }
`;
const MainUI = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: inherit;
  flex-direction: column;
  position: relative;
  height: 100%;
`;

const Header = styled.header.attrs({
  id: `${APP_NAME}_Header`
})`
  &#${APP_NAME}_Header {
    min-height: ${header.minHeight}px;
    width: 100%;
    padding: 0 15px;
    background-color: ${header.background};
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: ${shadows[2]};
    color: #ffffff;
    margin-bottom: 10px;
  }
`;

const HeaderTitle = styled.h2.attrs({
  id: `${APP_NAME}_HeaderTitle`
})`
  &#${APP_NAME}_HeaderTitle {
    color: #ffffff !important;
    font-size: 18px !important;
    margin: 0 !important;
    font-weight: 600 !important;
    font-weight: 600 !important;
    text-transform: uppercase !important;
  }
`;
export {
  MainUI,
  Wrapper,
  Application,
  Header,
  HeaderTitle,
  HeaderNavigationList,
  Hr
};
