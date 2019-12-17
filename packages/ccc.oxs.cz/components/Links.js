export default props => {
  return props.links.map(link => {
    let name = link[0];
    let url = link[1];
    return (
      <p>
        <a
          className="btn btn-outline-primary btn-block text-left"
          target="_blank"
          href={url}
        >
          {name}
        </a>
      </p>
    );
  });
};
