import { OuterInputWrapper, OuterInput, IconWrapper, HelperText } from ".";
import styled from "styled-components";
import { APP_NAME } from "../../../config";
import React from "react";
import { animation } from "../../variables";
const OuterCheckItemWrapper = styled(OuterInputWrapper).attrs({
  className: `${APP_NAME}_OuterCheckItemWrapper`
})`
  &.${APP_NAME}_OuterCheckItemWrapper {
    margin-bottom: 10px !important;
    padding: 7px 45px 7px 45px !important;
  }
`;

const CheckItemIconWrapper = styled(IconWrapper).attrs({
  className: `${APP_NAME}_CheckItemIconWrapper`
})`
  &.${APP_NAME}_CheckItemIconWrapper {
    cursor: pointer !important;
    top: 4px !important;
    width: 25px !important;
    height: 25px !important;
    font-size: 24px !important;
    border-radius: 25px !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    transition: ${animation.fast};
    svg {
        font-size: 24px !important;
    }
    &:hover {
        transform: scale(1.2)
    }
  }
`;

const CheckListOuterInput = styled(OuterInput).attrs({
  className: `${APP_NAME}_CheckListOuterInput`
})`
  &.${APP_NAME}_CheckListOuterInput {
    height: 20px;
    font-size: 14px;
  }
`;

const CheckListInput = ({
  type = "text",
  error = null,
  icon = null,
  iconAfter = null,
  helperText = null,
  onChange = () => {},
  inputProps = {}
}) => (
  <OuterCheckItemWrapper>
    {icon && <CheckItemIconWrapper> {icon}</CheckItemIconWrapper>}
    <CheckListOuterInput {...inputProps} />
    {iconAfter && (
      <CheckItemIconWrapper after> {iconAfter}</CheckItemIconWrapper>
    )}
    {error || helperText ? (
      <HelperText error={error}>{error || helperText}</HelperText>
    ) : null}
  </OuterCheckItemWrapper>
);

export { OuterCheckItemWrapper, CheckListInput };
