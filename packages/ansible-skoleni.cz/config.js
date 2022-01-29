import logo from "@app/data/pictures/courses/ansible.png";

const site = {
  name: "ansible-skoleni.cz",
  lang: "cs",
  location: "cz",
  gauges_site_id: "5cecd2020c3be10989c5bffc",
  google_analytics_site_id: "UA-39461955-26",
  trainingcrm_url:
    process.env.NODE_ENV == "development"
      ? "https://trainingcrm-demo.sika.io"
      : process.env.TRAININGCRM_URL || "https://trainingcrm.sika.io",

  x_course: "ansible",
  x_site_claim: "Školení Ansible v ČR",
  x_logo: logo,
  x_contact_link: "https://ondrej-sika.cz/kontakt/?x_source=ansible-skoleni.cz",
  x_inquiry_url:
    "https://ondrej-sika.cz/skoleni/ansible/?x_source=ansible-skoleni.cz#form"
};

export default site;
