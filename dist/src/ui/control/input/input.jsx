import styled from "styled-components";
import React from "react";
import { color, styles } from "../../variables";
// import Input from '@material-ui/core/Input';
import { APP_NAME } from "../../../config";
// import TextField from '@material-ui/core/TextField';
const InputUI = styled.input.attrs({})`
  padding: 10px 15px 10px 35px;
  border-radius: 25px;
  min-width: 195px;
  width: 100%;
  border: 1px solid ${color.primary};
  box-shadow: ${styles.boxShadow};
`;

const InputWrapper = styled.fieldset`
  padding: 0 5px;
  margin-bottom: 15px;
  min-width: 250px;
  position: relative;
`;

const IconWrapper = styled.span.attrs({
  className: `${APP_NAME}_IconWrapper`
})`
  &.${APP_NAME}_IconWrapper {
    position: absolute;
    ${({ after }) => after ? `right: 12px;` : `left: 12px;`}
    top: 8px;
    color: ${color.primary};
    svg {
      color: ${color.primary};
    }
  }
`;

const HelperText = styled.p.attrs({
  className: `${APP_NAME}_HelperText`
})`
  &.${APP_NAME}_HelperText {
    font-size: 12px;
    margin: 0 0 0 15px;
    padding: 0;
    width: 100%;
    position: absolute;
    bottom: -18px;
    left: 10px;
    margin: 0;
    word-break: break-all;
    color: ${({ error }) => (error ? color.danger : color.help)};
  }
`;

const OuterInputWrapper = styled.div.attrs({
  className: `${APP_NAME}_OuterInputWrapper`
})`
  &.${APP_NAME}_OuterInputWrapper {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 9px -6px,
      rgba(0, 0, 0, 0.3) 0px 11px 9px -11px,
      rgba(0, 0, 0, 0.3) 0px -4px 9px -6px,
      rgba(0, 0, 0, 0.3) 0px -6px 9px -11px !important;
    width: 100% !important;
    border: none !important;
    padding: 10px 45px 10px 45px !important;
    position: relative !important;
    display: flex !important;
    align-items: center !important;
    margin-bottom: 15px !important;
  }
`;

const OuterInput = styled.input.attrs({
  className: `${APP_NAME}_OuterInput`
})`
  &.${APP_NAME}_OuterInput {
    border: none !important;
    outline: none !important;
    width: 100% !important;
    background-color: #ffffff !important;
    border: none !important;
    box-shadow: none !important;
    font-size: 16px !important;
    padding: 0 0 0 10px !important;
    height: 24px;
    &:focus {
      outline: none !important;
      border: none !important;
    }
  }
`;
const OuterTextarea = styled.textarea.attrs({
  className: `${APP_NAME}_OuterTextarea`
})`
  &.${APP_NAME}_OuterTextarea {
    border: none !important;
    outline: none !important;
    width: 100% !important;
    background-color: #ffffff !important;
    border: none !important;
    box-shadow: none !important;
    font-size: 16px !important;
    padding: 0 0 0 10px !important;
    height: 165px;
    &:focus {
      outline: none !important;
      border: none !important;
    }
  }
`;
const InputOuter = ({
  type = "text",
  error = null,
  icon = null,
  iconAfter = null,
  helperText = null,
  inputProps = {}
}) => (
  <OuterInputWrapper>
    {icon && <IconWrapper> {icon}</IconWrapper>}
    {type === "textarea" ? (
      <OuterTextarea {...inputProps} />
    ) : (
      <OuterInput {...inputProps} />
    )}
    {iconAfter && <IconWrapper after> {iconAfter}</IconWrapper>}
    {error || helperText ? (
      <HelperText error={error}>{error || helperText}</HelperText>
    ) : null}
    
  </OuterInputWrapper>
);

const Input = ({
  type = "text",
  error = null,
  helperText = "",
  placeholder = "",
  onChange,
  value,
  icon
}) => (
  <InputWrapper>
    {icon && <IconWrapper> {icon}</IconWrapper>}
    <InputUI
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
      error={error}
    />
    {error || helperText ? (
      <HelperText error={error}>{error || helperText}</HelperText>
    ) : null}
  </InputWrapper>
);

export {
  Input,
  HelperText,
  IconWrapper,
  InputWrapper,
  InputUI,
  InputOuter,
  OuterInput,
  OuterInputWrapper
};
