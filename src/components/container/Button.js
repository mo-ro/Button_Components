import styled from "styled-components";
import { buttonColors } from "@const/buttonColor";

const Button = styled.button.attrs(props => ({
  onClick: props.disabled ? undefined : props.onClick,
  className: props.disabled ? "disabled" : ""
}))`
  ${props => (props.color ? buttonColors(props.color) : "")};
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
`;

export default Button;
