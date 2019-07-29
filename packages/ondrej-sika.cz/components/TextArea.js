const TextArea = props => (
  <div>
    <h3 className="pt-4 pb-2">{props.TextHeader}</h3>
    {(() => {
      if (props.TextParagraph) {
        return <p>{props.TextParagraph}</p>;
      }
    })()}
    {props.children}
  </div>
);

export default TextArea;
