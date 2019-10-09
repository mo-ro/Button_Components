import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Code from "./code";

// codeタグにreact-liveを使ったcodeコンポーネントを使用
const components = {
  code: Code
};
export default ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);
