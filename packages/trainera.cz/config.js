const site = {
  former2_url:
    process.env.NODE_ENV == "development"
      ? "https://former2-ond-local.xsika.cz"
      : "https://former2-idontlikedolphins.xsika.cz",
  origin:
    process.env.NODE_ENV == "development"
      ? "http://127.0.0.1:3010"
      : process.env.SITE_ORIGIN || "https://ondrej-sika.cz",
  name: "trainera.cz",
  lang: "cs",
  gauges_site_id: "5a892d8dba4ae31b28000034",
  google_analytics_site_id: "UA-39461955-14",
  recaptcha_site_key: "6LeLfOUUAAAAAIH5pSlU_m539RjHOkhHgClZnYoc",
  colors: {
    PRIMARY: "#098958",
    SECONDARY: "#7FCD91",
    SECONDARY_LIGHT: "#fff"
  }
};

export default site;
