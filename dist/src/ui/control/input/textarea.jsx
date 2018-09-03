import styled from "styled-components";
import React from "react";
import { color, styles } from "../../variables";
import { InputWrapper, InputUI, IconWrapper, HelperText } from "./";

const TextAreaWrapper = styled(InputWrapper)``;

const TextAreaUI = styled.textarea`
  padding: 10px 15px 10px 35px;
  border-radius: 25px;
  min-width: 195px;
  resize: false;
  width: 100%;
  border: 1px solid ${color.primary};
  box-shadow: ${styles.boxShadow};
  min-height: 200px;
`;


const TextArea = ({
    type = "text",
    error = null,
    helperText = "",
    placeholder = "",
    onChange,
    value,
    icon
  }) => (
    <TextAreaWrapper>
      {icon && <IconWrapper> {icon}</IconWrapper>}
      <TextAreaUI
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        error={error}
      />
      {error || helperText ? (
        <HelperText error={error}>{error || helperText}</HelperText>
      ) : null}
    </TextAreaWrapper>
  );

  export {
    TextArea
  }