import React from "react";
import Layout from "@app/bootstrap-theme/layouts/Layout";
import Gauges from "@app/common/components/Gauges";

export default props => (
  <Layout>
    <div className="container">{props.children}</div>
    <Gauges gauges_site_id={props.site.gauges_site_id} />
  </Layout>
);
