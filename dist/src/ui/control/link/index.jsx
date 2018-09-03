import { NavLink as DefaultNavLink } from "react-router-dom";
import styled from "styled-components";
import { color, animation } from "../../variables";
import shadows from "@material-ui/core/styles/shadows";
import { APP_NAME } from "../../../config";

const HeaderNavigationItem = styled.li.attrs({
  id: `${APP_NAME}_HeaderNavigationItem`
 })`
  &#${APP_NAME}_HeaderNavigationItem {
    list-style: none !important;
    margin:  0 0 0 7px !important;
    display: inline-flex !important;

    width: 40px !important;
    height: 40px !important;
    align-items: center !important;
    justify-content: center !important;
    border-radius: 25px !important;
    cursor: pointer !important;
    &:hover {
      color: #ffffff !important;
      background-color: rgba(0,0,0,.2) !important;
      svg {
        transform: scale(1.2) !important;
      }
    }
    svg {
      transition: ${animation.fast} !important;
    }
  }
 `

const IconNavLink = styled(DefaultNavLink).attrs({
  id: `${APP_NAME}_IconNavLink`
})`
  &#${APP_NAME}_IconNavLink {
    color: ${({ color }) => color || '#ffffff'} !important;
    text-decoration: none !important;
    border-radius: 25px !important;
    border: none !important;
    width: 40px !important;
    height: 40px !important;
    padding: 5px !important;
    font-size: 14px !important;
    text-transform: uppercase !important;
    font-weight: 600 !important;
    svg {
      margin: 3px !important;
    }
    &.active_link {
      color: #ffffff !important;
      cursor: default !important;
      background-color: rgba(0,0,0,.4) !important;
      &:hover {
        color: #ffffff !important;
        background-color: rgba(0,0,0,.4) !important;
      }
    }
    &:hover {
      color: #ffffff !important;
      background-color: rgba(0,0,0,.2) !important;
    }

  }`
const NavLink = styled(DefaultNavLink).attrs({
  id: `${APP_NAME}_NavLink`
})`
  &#${APP_NAME}_NavLink {
    text-decoration: none;
    border-radius: 25px;
    border: none;
    padding: 7px 15px;
    box-shadow: ${shadows[2]};
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    transition: ${animation.fast};
    color: ${({ control_type }) =>
      control_type === "primary"
        ? "#ffffff"
        : control_type === "danger"
          ? "#ffffff"
          : color.text_color};
    background-color: ${({ control_type }) =>
      control_type === "primary"
        ? color.primary
        : control_type === "danger"
          ? color.danger
          : "#ffffff"};
    &.active_link {
      color: #ffffff;
      background-color: ${color.primary};
    }
    &:hover {
      color: #ffffff;
      background-color: ${color.primary};
    }
  }
`;

export { NavLink, IconNavLink, HeaderNavigationItem };
