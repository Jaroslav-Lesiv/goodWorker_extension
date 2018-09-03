import { APP_NAME } from "../../../config";
import styled from 'styled-components'
import shadows from "@material-ui/core/styles/shadows";

const List = styled.ul.attrs({
  className: `${APP_NAME}_List`
})`
  &.${APP_NAME}_List {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    background-color: #ffffff;
    width: 100%;
    padding: 4px 0;
    box-shadow: ${shadows[1]};
    overflow: hidden;
    max-width: 200px;
    border-radius: 3px;
    ${({ position, top, bottom, left, right }) =>
      position === "absolute"
        ? `position: absolute; 
            right: ${right || 0}; 
            bottom: ${bottom || 0};`
        : `position: static`};

  }
`;


export {
    List
}