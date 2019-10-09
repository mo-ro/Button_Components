import styled from "styled-components";
import { buttonColors } from "@const/buttonColor";
import theme from "@const/theme";

const Button = styled.button.attrs(props => {
  return {
    onClick: props.disabled ? undefined : props.onClick,
    className: props.disabled ? "disabled" : ""
  };
})`
  color: ${props =>
    theme.colors[props.color] ? theme.colors[props.color].text : ""};
  background-color: ${props =>
    theme.colors[props.color] ? theme.colors[props.color].primary : ""};
  ${props => (props.color ? buttonColors(props.color) : "")};
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props =>
      theme.colors[props.color] ? theme.colors[props.color].hover : ""};
  }
`;

Button.defaultProps = {
  theme
};

export default Button;
