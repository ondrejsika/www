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
  gauges_site_id: "61483a20e6dc4f2f7507c1d8",
  google_analytics_site_id: "G-3LJZDSZTCB",
  colors: {
    PRIMARY: "#202020",
    PRIMARY_LIGHT: "#565656",
    SECONDARY: "#7fcd91",
    SECONDARY_LIGHT: "white"
  }
};

export default site;
