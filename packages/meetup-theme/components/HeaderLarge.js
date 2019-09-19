export default props => (
  <div className="container headerlarge">
    <h1>{props.heading}</h1>
    <style jsx>{`
      .headerlarge h1 {
        font-size: 3em;
      }
    `}</style>
  </div>
);
