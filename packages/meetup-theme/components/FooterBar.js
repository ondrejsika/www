export default props => (
  <div className="container footerbar text-center monospace">
    <p>
      2019 - 2020 &copy; <strong>Salzburg DevOps Meetups</strong> by{" "}
      <a
        href={`https://sika.io/?utm_source=landingpage&utm_medium=meetups&utm_campaign=${props.site_name}&utm_content=footer`}
      >
        Ondrej Sika
      </a>{" "}
      and{" "}
      <a
        href={`https://trainera.io/?utm_source=landingpage&utm_medium=meetups&utm_campaign=${props.site_name}&utm_content=footer`}
      >
        Trainera
      </a>
    </p>
  </div>
);
