const site = {
  former2_url:
    process.env.NODE_ENV == "development"
      ? "https://former2-ond-local.xsika.cz"
      : "https://former2-idontlikedolphins.xsika.cz",
  origin:
    process.env.NODE_ENV == "development"
      ? "http://127.0.0.1:3010"
      : process.env.SITE_ORIGIN || "https://sikalabs.com",
  trainingcrm_url:
    process.env.NODE_ENV == "development"
      ? "https://trainingcrm-demo.sika.io"
      : process.env.TRAININGCRM_URL || "https://trainingcrm.sika.io",
  name: "sikalabs.com",
  lang: "cs",
  gtm_id: "xxx",
  gauges_site_id: "xxx",
  google_analytics_site_id: "xxx",
  recaptcha_site_key: "xxx",
  colors: {
    PRIMARY: "#131480",
    SECONDARY: "#c8bfb0",
    SECONDARY_LIGHT: "#fff"
  },
  sentry_dsn:
    process.env.NODE_ENV == "development"
      ? "xxx" // dev
      : "xxx" // prod
};

export default site;
