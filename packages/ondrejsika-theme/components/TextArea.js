import React from "react";

const TextArea = props => (
  <div>
    <h2 className="pt-4 pb-2">{props.TextHeader}</h2>
    {(() => {
      if (props.TextParagraph) {
        return <p>{props.TextParagraph}</p>;
      }
    })()}
    {props.children}
  </div>
);

export default TextArea;
