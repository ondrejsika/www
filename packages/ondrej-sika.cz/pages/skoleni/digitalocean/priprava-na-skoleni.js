import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Příprava na Školenír Digital Oceanu"
    hideNewsletter={true}
    markdown={`
Na školení Digigtal Oceanu je potřeba:

- Účet na DigitalOcean (Pokud nemáte můžete použít můj referral: [Registrace + 50 USD kredit](https://sika.link/do-ref))
- Digitlal Ocean CLI (\`doctl\`) - [návod na instalaci](https://www.digitalocean.com/docs/apis-clis/doctl/how-to/install/)
- Nainstalovaný Terraform - [návod na instalaci](/terraform/instalace)

`}
  />
);

export default Page;
