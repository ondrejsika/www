import React from "react";
import Layout from "@app/bootstrap-theme/layouts/Layout";
import Gauges from "@app/common/components/Gauges";
import GoogleAnalytics from "@app/common/components/GoogleAnalytics";

export default (props) => (
  <Layout>
    <div className="container">{props.children}</div>
    <Gauges gauges_site_id={props.site.gauges_site_id} />
    <GoogleAnalytics
      google_analytics_site_id={props.site.google_analytics_site_id}
    />
  </Layout>
);
