const site = {
  origin:
    process.env.NODE_ENV == "development"
      ? "http://127.0.0.1:3059"
      : process.env.SITE_ORIGIN || "https://ondrejsika.is",
  name: "ondrejsika.is",
  lang: "en",
  location: "is",
  gauges_site_id: "XXX",
  google_analytics_site_id: "XXX"
};

export default site;
