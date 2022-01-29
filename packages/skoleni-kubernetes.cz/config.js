import logo from "@app/data/pictures/courses/kubernetes.png";

const site = {
  lang: "cs",
  location: "cz",
  gauges_site_id: "5cefba676dcfe05a1102e239",
  google_analytics_site_id: "UA-39461955-21",
  trainingcrm_url:
    process.env.NODE_ENV == "development"
      ? "https://trainingcrm-demo.sika.io"
      : process.env.TRAININGCRM_URL || "https://trainingcrm.sika.io",

  x_course: "kubernetes",
  x_site_claim: "Nejlepší školení Kubernetes v ČR",
  x_logo: logo,
  x_contact_link:
    "https://ondrej-sika.cz/kontakt/?x_source=skoleni-kubernetes.cz",
  x_inquiry_url:
    "https://ondrej-sika.cz/skoleni/kubernetes/?x_source=skoleni-kubernetes.cz#form"
};

export default site;
