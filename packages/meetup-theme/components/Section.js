export default props => (
  <div className="container section mb-3">
    <h2>{props.heading}</h2>
    <div>{props.children}</div>
    <style jsx>{`
      .headerlarge h1 {
        font-size: 2.1em;
      }
    `}</style>
  </div>
);
