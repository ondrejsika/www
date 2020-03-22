import React from "react";
import styled from "styled-components";

const P = styled.p`
  font-size: 18px;
`;

const TextArea = props => (
  <div>
    <h2 className="pt-4 pb-2">{props.TextHeader}</h2>
    {(() => {
      if (props.TextParagraph) {
        return <P>{props.TextParagraph}</P>;
      }
    })()}
    {props.children}
  </div>
);

export default TextArea;
