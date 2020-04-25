import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Příprava na Školení Rancheru"
    hideNewsletter={true}
    markdown={`
Na školení Rancheru je potřeba:
- Nainstalovaný Terraform - [návod na instalaci](/terraform/instalace)
- Nainstalovaný Rancher CLI & RKE - [návod na instalaci](/rancher/instalace-rancher-cli-a-rke)
- Účet na DigitalOcean (Pokud nemáte můžete použít můj referral: [Registrace + 100 USD kredit](https://sika.link/do-ref))
- Přístup na internet - ideálně bez korporátní proxy, případně nastavenou proxy v prohlížeči
`}
  />
);

export default Page;
