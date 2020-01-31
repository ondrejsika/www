import Layout from "@app/bootstrap-theme/layouts/Layout";
import Gauges from "@app/common/components/Gauges";

export default props => (
  <Layout>
    {props.children}
    <Gauges gauges_site_id={props.site.gauges_site_id} />
  </Layout>
);
