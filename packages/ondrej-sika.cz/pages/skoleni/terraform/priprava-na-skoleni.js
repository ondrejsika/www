import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Příprava na Školení Terraformu"
    hideNewsletter={true}
    markdown={`
Na školení Terraformu je potřeba:

- Nainstalovaný Terraform - [návod na instalaci](/terraform/instalace)
- Účet na DigitalOcean (Pokud nemáte můžete použít můj referral: [Registrace + 50 USD kredit](https://sika.link/do-ref)) - Pouze pro otevrena skoleni (neni potreba na skoleni ve firmach)
`}
  />
);

export default Page;
