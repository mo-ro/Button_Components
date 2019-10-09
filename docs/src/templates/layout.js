import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Code from "./code";
import { ThemeProvider } from "styled-components";
import theme from "@const/theme";

// codeタグにreact-liveを使ったcodeコンポーネントを使用
const components = {
  code: Code
};
export default ({ children }) => (
  <MDXProvider components={components}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </MDXProvider>
);
