import styled from "styled-components";
import React from "react";
import { color, styles } from "../../variables";

import { OuterInputWrapper, OuterInput, IconWrapper, HelperText } from "./";
import { APP_NAME } from "../../../config";

const TimeInputWrapper = styled(OuterInputWrapper).attrs({
  className: `${APP_NAME}_TimeInputWrapper`
})`
  &.${APP_NAME}_TimeInputWrapper {
    min-width: 95px !important;
    max-width: 100px !important;
    margin-bottom: 20px !important;
  }
`;

const TimeInputUI = styled(OuterInput).attrs({
  className: `${APP_NAME}_TimeInputUI`
})`
&.${APP_NAME}_TimeInputUI {
  max-width: 50px !important;
  min-width: 40px !important;
  margin: 0 !important;
  padding: 0 !important;

}
  
`;

const TimeInput = ({
  error = null,
  helperText = "",
  placeholder = "",
  onChange,
  value,
  icon
}) => (
  <TimeInputWrapper>
    {icon && <IconWrapper> {icon}</IconWrapper>}
    <TimeInputUI
      type={`number`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    {error || helperText ? (
      <HelperText error={error}>{error || helperText}</HelperText>
    ) : null}
  </TimeInputWrapper>
);

export { TimeInput };
