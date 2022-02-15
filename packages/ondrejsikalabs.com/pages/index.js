import React from "react";
import Markdown from "@app/common/components/Markdown";
import Gauges from "@app/common/components/Gauges";
import GoogleAnalytics from "@app/common/components/GoogleAnalytics";
import Head from "next/head";
import site from "@app/ondrejsikalabs.com/config";

const Index = () => (
  <>
    <Head>
      <title>Ondrej Sika Labs</title>
    </Head>
    <div className="mt-4">
      <Markdown
        source={`
# Ondrej Sika Labs

__Company which supports [Ondrej Sika](https://sika.io)'s freelance activities, mostly IT & DevOps trainings and consulting.__
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
