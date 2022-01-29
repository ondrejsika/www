import logo from "@app/data/pictures/courses/digitalocean-w.png";

const site = {
  name: "skoleni.digitalocean.cz",
  lang: "cs",
  location: "cz",
  gauges_site_id: "xx",
  google_analytics_site_id: "xx",
  trainingcrm_url:
    process.env.NODE_ENV == "development"
      ? "https://trainingcrm-demo.sika.io"
      : process.env.TRAININGCRM_URL || "https://trainingcrm.sika.io",

  x_course: "digitalocean",
  x_site_claim: "Nejlepší školení DigitalOceanu v ČR",
  x_logo: logo,
  x_contact_link: "https://ondrej-sika.cz/kontakt/?x_source=digitalocean.cz",
  x_inquiry_url:
    "https://ondrej-sika.cz/skoleni/digitalocean/?x_source=digitalocean.cz"
};

export default site;
