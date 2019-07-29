import ReactMarkdown from "react-markdown";
import React from "react";

function flatten(text, child) {
  return typeof child === "string"
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
}

function HeadingRenderer(props) {
  var children = React.Children.toArray(props.children);
  var text = children.reduce(flatten, "");
  var slug = text.toLowerCase().replace(/\W/g, "-");
  return React.createElement("h" + props.level, { id: slug }, props.children);
}

let Markdown = props => {
  return (
    <ReactMarkdown
      source={props.source}
      escapeHtml={false}
      renderers={{ heading: HeadingRenderer }}
    />
  );
}

export default Markdown
