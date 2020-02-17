import React from "react";
import Article from "@app/ondrej-sika.cz/layouts/Article";

const Page = () => (
  <Article
    title="Prometheus"
    markdown={`
- [Instalace Promethea, Alert Manageru a Grafany pro lokalni vyvoj](/prometheus/instalace-pro-lokalni-vyvoj)
`}
  />
);

export default Page;
