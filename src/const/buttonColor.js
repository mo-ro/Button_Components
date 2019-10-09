const colors = {
  primary: {
    color: "#000",
    backgroundColor: "#84bf4d",
    backgroundHoverColor: "#219C7F"
  },
  secondary: {
    color: "#fff",
    backgroundColor: "#219C7F",
    backgroundHoverColor: "#39D5B8"
  },
  white: "#fff",
  black: "#000"
};

export const buttonColors = color => {
  if (colors[color]) {
    return `
    color: ${colors[color].color};
    background-color: ${colors[color].backgroundColor};

    &:hover {
      background-color: ${colors[color].backgroundHoverColor}
    }
    `;
  }
};

export const getButtonColor = color => {
  return buttonColors[color];
};
