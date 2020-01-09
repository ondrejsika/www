const site = {
  former2_url:
    process.env.NODE_ENV == "development"
      ? "https://former2-ond-local.xsika.cz"
      : "https://former2-idontlikedolphins.xsika.cz",
  origin:
    process.env.NODE_ENV == "development"
      ? "http://127.0.0.1:3037"
      : process.env.SITE_ORIGIN || "https://bootstrap-web.sikadev.com",
  name: "bootstrap-web",
  lang: "en",
  gauges_site_id: "5e17419ade0e572fb4c2f3a4",
  google_analytics_site_id: "XXX"
};

export default site;
