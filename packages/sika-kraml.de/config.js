const site = {
  former2_url:
    process.env.NODE_ENV == "development"
      ? "https://former2-ond-local.xsika.cz"
      : "https://former2-idontlikedolphins.xsika.cz",
  origin:
    process.env.NODE_ENV == "development"
      ? "http://127.0.0.1:3010"
      : process.env.SITE_ORIGIN || "https://ondrej-sika.cz",
  name: "sika-kraml.de",
  lang: "de",
  gauges_site_id: "5cf669363520f122cf0441d0",
  google_analytics_site_id: "UA-39461955-44"
};

export default site;
