import Router from "next/router";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (gtm_id, url) => {
  window.gtag("config", gtm_id, {
    page_path: url
  });
  console.log(`GTM (${gtm_id}): Pageview: ${url}`);
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value
  });
};

export const init = (gtm_id) => {
  Router.events.on("routeChangeComplete", (url) => pageview(gtm_id, url));
};
