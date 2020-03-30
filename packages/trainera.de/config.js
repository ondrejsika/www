const site = {
  origin:
    process.env.NODE_ENV == "development"
      ? "http://127.0.0.1:3060"
      : process.env.SITE_ORIGIN || "https://trainera.de",
  name: "trainera.de",
  lang: "de",
  gauges_site_id: "XXX",
  google_analytics_site_id: "XXX",
  colors: {
    PRIMARY: "#098958",
    SECONDARY: "#7FCD91",
    SECONDARY_LIGHT: "#fff"
  }
};

export default site;
