const site = {
  former2_url:
    process.env.NODE_ENV == "development"
      ? "https://former2-ond-local.xsika.cz"
      : "https://former2-idontlikedolphins.xsika.cz",
  origin:
    process.env.NODE_ENV == "development"
      ? "http://127.0.0.1:3038"
      : process.env.SITE_ORIGIN || "https://trainera.io",
  name: "trainera.io",
  lang: "en",
  gauges_site_id: "XXX",
  google_analytics_site_id: "XXX"
};

export default site;
