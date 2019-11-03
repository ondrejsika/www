const site = {
  former2_url:
    process.env.NODE_ENV == "development"
      ? "https://former2-ond-local.xsika.cz"
      : "https://former2-idontlikedolphins.xsika.cz",
  origin:
    process.env.NODE_ENV == "development"
      ? "http://127.0.0.1:3011"
      : process.env.SITE_ORIGIN || "https://sika-kraml",
  name: "sika-kraml.de",
  lang: "de",
  default_title: "Sika Kraml DE - IT Schulungen, Workshops und Beratung",
  gauges_site_id: "5cf669363520f122cf0441d0",
  google_analytics_site_id: "UA-39461955-44"
};

export default site;
