import styled from "styled-components";
import React from "react";
import { animation } from "../variables";
import Tooltip from "@material-ui/core/Tooltip";

const TooltipIcon = ({ label, dir = `left`, icon }) => (
  <Tooltip title={label} placement={dir}>
    {icon}
  </Tooltip>
);

export {
    TooltipIcon
}