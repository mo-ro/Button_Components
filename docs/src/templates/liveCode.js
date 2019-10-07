import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import React from "react";
import htmlReactParser from "html-react-parser";
import reactElementToJsxString from "react-element-to-jsx-string";
import * as Components from "./liveScope";

const languageTransformers = {
  html: html => htmlToJsx(html),
  jsx: jsx => wrapWithFragment(jsx)
};

function htmlToJsx(html) {
  try {
    const reactElement = htmlReactParser(removeNewlines(html));
    // The output of htmlReactParser could be a single React element
    // or an array of React elements. reactElementToJsxString does not accept arrays
    // so we have to wrap the output in React fragment.
    return reactElementToJsxString(<> {reactElement} </>);
  } catch (error) {
    return wrapWithFragment(html);
  }
}

function removeNewlines(string) {
  return string.replace(/(\r\n|\n|\r)/gm, "");
}

function wrapWithFragment(jsx) {
  return `<React.Fragment>${jsx}</React.Fragment>`;
}

const LiveCode = ({ code, language }) => {
  return (
    <LiveProvider
      scope={Components}
      code={code}
      transformCode={languageTransformers[language]}
    >
      <LivePreview />
      <LiveEditor ignoreTabKey={true} /> <LiveError />
    </LiveProvider>
  );
};

export default LiveCode;
