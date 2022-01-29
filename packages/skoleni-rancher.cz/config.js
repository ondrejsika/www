import logo from "@app/data/pictures/courses/rancher-white.png";

const site = {
  lang: "cs",
  location: "cz",
  gauges_site_id: "XXX",
  google_analytics_site_id: "XXX",
  trainingcrm_url:
    process.env.NODE_ENV == "development"
      ? "https://trainingcrm-demo.sika.io"
      : process.env.TRAININGCRM_URL || "https://trainingcrm.sika.io",

  x_course: "rancher",
  x_site_claim: "Nejlepší školení Rancheru v ČR",
  x_logo: logo,
  x_contact_link: "https://ondrej-sika.cz/kontakt/?x_source=skoleni-rancher.cz",
  x_inquiry_url:
    "https://ondrej-sika.cz/skoleni/git/?x_source=skoleni-rancher.cz#form"
};

export default site;
