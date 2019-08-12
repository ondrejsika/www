import "../css";
import Markdown from "@app/common/components/Markdown";
import Gauges from "@app/common/components/Gauges";
import GoogleAnalytics from "@app/common/components/GoogleAnalytics";
import Head from "next/head";
import site from "@app/archetype-web/config";

const Index = () => (
  <>
    <Head>
      <title>Ondrej Sika | sika.io</title>
    </Head>
    <div className="mt-4">
      <Markdown
        source={`
# Ondrej Sika

[+420 773 452 376](tel:+420773452376) ([Telegram](https://t.me/ondrejsika))
<br>
[ondrej@sika.io](mailto:ondrej@sika.io)
      `}
      />
      <Gauges gauges_site_id={site.gauges_site_id} />
      <GoogleAnalytics
        google_analytics_site_id={site.google_analytics_site_id}
      />
    </div>
  </>
);

export default Index;
