import styled from "styled-components";
import theme from "@const/theme";

const getThemeColors = (color, theme) => {
  return `
    color: ${theme.colors[color].text};
    background-color: ${theme.colors[color].primary};

    &:hover {
      background-color: ${theme.colors[color].hover}
    }
  `;
};

const Button = styled.button.attrs(props => {
  return {
    onClick: props.disabled ? undefined : props.onClick,
    className: props.disabled ? "disabled" : ""
  };
})`
  ${props =>
    theme.colors[props.color] ? getThemeColors(props.color, theme) : ""};
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  line-height: 1;
  transition: background-color 0.2s;
  overflow: hidden;
  position: relative;
  margin-right: 8px;
  ${props =>
    props.shari &&
    `
    &::after {
      background-color: #fff;
      bottom: 0;
      content: "";
      display: block;
      height: 8px;
      left: 0;
      position: absolute;
      width: 100%;
  }`}
`;

Button.defaultProps = {
  theme
};

export default Button;
