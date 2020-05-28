import React from "react";
import { NextSeo } from "next-seo";

const Seo = props => (
  <NextSeo
    title={props.title}
    description={props.description}
    canonical={props.canonical}
    openGraph={{
      url: `${props.oGraphUrl}`,
      title: `${props.oGraphTitle}`,
      description: `${props.oGraphDescription}`,
      images: [
        {
          url: `${props.imageUrl}`,
          width: 800,
          height: 600,
          alt: `${props.imageAlt}`
        },
        {
          url: `${props.imageUrl2}`,
          width: 900,
          height: 800,
          alt: `${props.imageAlt2}`
        }
      ],
      site_name: `${props.siteName}`
    }}
    twitter={{
      site: `@${props.site}`,
      handle: `@${props.twitterHandle}`,
      cardType: `${props.cardType}`
    }}
  />
);

export default Seo;
