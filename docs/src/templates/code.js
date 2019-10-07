import LiveCode from "./liveCode";
import React from "react";

const Code = ({className, children, live}) => {
  console.log("code")
  const language = className ? className.replace(/language-/, '') : ''
  const code = children.trim()
  console.log(language, code);

  if(live) {
    return <LiveCode code={code} language={language} />
  } else {
    return children
  }
}

export default Code;