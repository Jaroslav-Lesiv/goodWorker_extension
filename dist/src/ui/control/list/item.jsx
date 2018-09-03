import { APP_NAME } from "../../../config";
import { color as _color } from "../../variables";
import styled from "styled-components";

const Item = styled.li.attrs({
  className: `${APP_NAME}_Item`
})`
  &.${APP_NAME}_Item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${({ color }) => color || _color.text_color};
    padding: 4px 10px;
    margin: 0;
    color: ${_color.text_color};
    &:hover {
      background-color: rgba(0,0,0,.1);
    }
  }
`;

export { Item };
