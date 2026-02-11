import ReactMarkdown from "react-markdown";
import React from "react";
import Link from "next/link";
import JsxParser from "react-jsx-parser";
import { TwitterTweetEmbed } from "react-twitter-embed";

function flatten(text, child) {
  return typeof child === "string"
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
}

function HeadingRenderer({ node, children, ...props }) {
  var childArray = React.Children.toArray(children);
  var text = childArray.reduce(flatten, "");
  var slug = text.toLowerCase().replace(/\W/g, "-");
  var tag = node.tagName || "h1";
  return React.createElement(tag, { ...props, id: slug }, children);
}

function LinkRenderer({ node, children, ...props }) {
  return <Link href={props.href}>{children}</Link>;
}

const ReactComponent = (props) => <>{props.children}</>;
const TwitterComponent = (props) => (
  <TwitterTweetEmbed
    tweetId={props.tweet_id}
    options={{ conversation: "none" }}
  />
);

const ReactRenderer = (props) => {
  return (
    <JsxParser
      jsx={props.value}
      components={{
        React: ReactComponent,
        Twitter: TwitterComponent,
      }}
    />
  );
};

let Markdown = (props) => {
  return (
    <ReactMarkdown
      children={props.source}
      components={{
        h1: HeadingRenderer,
        h2: HeadingRenderer,
        h3: HeadingRenderer,
        h4: HeadingRenderer,
        h5: HeadingRenderer,
        h6: HeadingRenderer,
        a: LinkRenderer,
      }}
    />
  );
};

export default Markdown;
