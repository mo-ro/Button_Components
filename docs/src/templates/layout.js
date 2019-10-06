import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Button from "../components/Button"

const shortcodes = {Button}
export default ({ children }) => (
  <MDXProvider components={shortcodes}>{children}</MDXProvider>
)