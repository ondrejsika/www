import "../css";
import Markdown from "@app/common/components/Markdown";
import Gauges from "@app/common/components/Gauges";
import GoogleAnalytics from "@app/common/components/GoogleAnalytics";
import Head from "next/head";
import site from "@app/archetype-web/config";
import DevelopmentBar from "@app/common/components/DevelopmentBar";

const Index = props => (
  <>
    <Head>
      <title>Ondrej Sika | sika.io</title>
      {(() => {
        if (!process.env.NODE_ENV == "development") {
          return (
            <meta http-equiv="refresh" content="3; url=https://which.sika.io" />
          );
        } else {
          return <DevelopmentBar />;
        }
      })()}
      }
      <meta
        name="google-site-verification"
        content="KKm2K2qwgCk2Pc9F5eefmYl6UYoATpMPSBRzpa78w4Q"
      />
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
