import Layout from "@app/knuth-theme/layouts/Layout";
import Gauges from "@app/common/components/Gauges";

export default props => (
  <Layout
    site_name="ondrejsika.io"
    site_footer="2020 (c) Ondrej Sika"
    menu_links={[
      ["blog", "/"],
      ["contact", "/contact"],
      ["twitter", "https://twitter.com/ondrejsika"],
      ["github", "https://github.com/ondrejsika"]
    ]}
  >
    {props.children}
    <Gauges gauges_site_id={props.site.gauges_site_id} />
  </Layout>
);
