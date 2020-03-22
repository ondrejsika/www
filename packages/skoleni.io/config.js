const site = {
  former2_url:
    process.env.NODE_ENV == "development"
      ? "https://former2-ond-local.xsika.cz"
      : "https://former2-idontlikedolphins.xsika.cz",
  origin:
    process.env.NODE_ENV == "development"
      ? "http://127.0.0.1:3058"
      : process.env.SITE_ORIGIN || "https://skoleni.io",
  name: "skoleni.io",
  lang: "cs",
  gauges_site_id: "xx",
  google_analytics_site_id: "xx"
};

export default site;
