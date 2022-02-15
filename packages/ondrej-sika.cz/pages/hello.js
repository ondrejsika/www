import React from "react";
import LandingPage from "@app/ondrejsika-theme/layouts/LandingPage";

const Page = (props) => <LandingPage site={props.site} />;
Page.getInitialProps = () => {
  return {
    meta: {
      noNavbar: true,
      noFooter: true
    }
  };
};

export default Page;
