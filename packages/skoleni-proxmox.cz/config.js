import logo from "@app/data/pictures/courses/proxmox-white.svg";

const site = {
  name: "skoleni-proxmox.cz",
  lang: "cs",
  location: "cz",
  gauges_site_id: "???",
  google_analytics_site_id: "???",
  trainingcrm_url:
    process.env.NODE_ENV == "development"
      ? "https://trainingcrm-demo.sika.io"
      : process.env.TRAININGCRM_URL || "https://trainingcrm.sika.io",

  x_course: "proxmox",
  x_site_claim: "Školení Proxmoxu v ČR",
  x_logo: logo,
  x_contact_link: "https://ondrej-sika.cz/kontakt/?x_source=skoleni-proxmox.cz",
  x_inquiry_url:
    "https://ondrej-sika.cz/skoleni/proxmox?x_source=skoleni-proxmox.cz#form"
};

export default site;
