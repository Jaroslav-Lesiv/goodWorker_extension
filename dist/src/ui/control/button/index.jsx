import { animation } from "../../variables";
import styled from "styled-components";
import shadows from "@material-ui/core/styles/shadows";

import { color as _color } from "../../variables";
const ButtonUI = styled.button`
  padding: ${({ small }) =>
    small ? "5px 10px !important" : "10px 30px !important"};
  margin: 0 auto;
  border: none;
  border-radius: 25px;
  background-color: ${({ color }) =>
    color === "primary" ? `${_color.primary}` : "#ffffff"};
  color: ${({ color }) =>
    color === "primary" ? "#ffffff" : `${_color.primary}`} !important;
  font-weight: 600;
  box-shadow: ${shadows[2]};
  transition: ${animation.fast};
  min-width: ${({ small }) => (small ? "100px" : "160px")};
  cursor: pointer;
  &:hover {
    box-shadow: 0px 1px 6px 1px rgba(15,157,88, .5);
    transform: scale(1.08);
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #d1d1d1;
    color: #a5a5a5;
    box-shadow: none;
  }
`;

export { ButtonUI };
