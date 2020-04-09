const site = {
  former2_url:
    process.env.NODE_ENV == "development"
      ? "https://former2-ond-local.xsika.cz"
      : "https://former2-idontlikedolphins.xsika.cz",
  origin:
    process.env.NODE_ENV == "development"
      ? "http://127.0.0.1:3010"
      : process.env.SITE_ORIGIN || "https://ondrej-sika.cz",
  trainingcrm_url:
    process.env.NODE_ENV == "development"
      ? "https://trainingcrm-demo.sika.io"
      : process.env.TRAININGCRM_URL || "https://trainingcrm.sika.io",
  name: "ondrej-sika.cz",
  lang: "cs",
  gtm_id: "GTM-T5TVKRL",
  gauges_site_id: "5a892d8dba4ae31b28000034",
  google_analytics_site_id: "UA-39461955-14",
  recaptcha_site_key: "6LeLfOUUAAAAAIH5pSlU_m539RjHOkhHgClZnYoc",
  colors: {
    PRIMARY: "#131480",
    SECONDARY: "#c8bfb0",
    SECONDARY_LIGHT: "#fff"
  },
  sentry_dsn:
    process.env.NODE_ENV == "development"
      ? "https://2221aad8fc3e442e97db0fdb5c69f0d9@sentry.sikahq.com/3" // dev
      : "https://4cd544d697294d15917033597439064c@sentry.sikahq.com/4" // prod
};

export default site;
