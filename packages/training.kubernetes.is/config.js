const site = {
  lang: "en",
  location: "is",
  gauges_site_id: "xx",
  google_analytics_site_id: "xx",
  trainingcrm_url:
    process.env.NODE_ENV == "development"
      ? "https://trainingcrm-demo.sika.io"
      : process.env.TRAININGCRM_URL || "https://trainingcrm.sika.io"
};

export default site;
