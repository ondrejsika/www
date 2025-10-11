import Layout from "@app/bootstrap-theme/layouts/Layout";
import Gauges from "@app/common/components/Gauges";

const OndrejsikalabsLayout = (props) => (
  <Layout>
    <div className="container">{props.children}</div>
    <Gauges gauges_site_id={props.site.gauges_site_id} />
  </Layout>
);

OndrejsikalabsLayout.displayName = "OndrejsikalabsLayout";

export default OndrejsikalabsLayout;
