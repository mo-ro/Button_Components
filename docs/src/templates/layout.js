import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Button from "../components/Button"
import Code from "./code";

// codeタグにreact-liveを使ったcodeコンポーネントを使用
const components = {
  Button,
  code: Code
}
export default ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
)