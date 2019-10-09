import styled from "styled-components";

const Button = styled.button.attrs(props => ({
  onClick: props.disabled ? undefined : props.onClick,
  className: props.disabled ? "disabled" : ""
}))``;

export default Button;
