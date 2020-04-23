const site = {
  origin:
    process.env.NODE_ENV == "development"
      ? "http://127.0.0.1:3060"
      : process.env.SITE_ORIGIN || "https://trainera.de",
  name: "trainera.de",
  lang: "en",
  gauges_site_id: "XXX",
  google_analytics_site_id: "XXX",
  recaptcha_site_key: "6LeLfOUUAAAAAIH5pSlU_m539RjHOkhHgClZnYoc",
  colors: {
    PRIMARY: "#098958",
    SECONDARY: "#7FCD91",
    SECONDARY_LIGHT: "#fff"
  }
};

export default site;
