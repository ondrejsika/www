import React from "react";

const FooterBar = props => (
  <div className="container footerbar monospace text-center mt-5">
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
      <br />
      Follow us on <a href={props.meetupcom_url}>Meetup.com</a>
    </p>
  </div>
);

export default FooterBar;
