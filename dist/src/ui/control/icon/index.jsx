import { ExitToApp } from "@material-ui/icons";
import styled from "styled-components";
import React from "react";
import { animation } from "../../variables";

const AppCloseIcon = styled(ExitToApp)`
  font-size: 24px;
  color: #ffffff;
  cursor: pointer;
  z-index: 10000;
  transition: ${animation.fast} !important;
  &:hover {
    transform: scale(1.2) !important;
  }
`;

export { AppCloseIcon };
