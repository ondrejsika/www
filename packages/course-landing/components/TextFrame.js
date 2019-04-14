const TextFrame = (props) => (
  <div class="card p-3 mb-4">
    <h3>{props.header}</h3>
    <p>{props.children}</p>
  </div>
)

export default TextFrame
