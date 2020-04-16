import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Priprava na Skoleni Terraformu"
    hideNewsletter={true}
    markdown={`
Na skoleni Terraformu je potreba:

- Nainstalovany Terraform - [navod na instalaci](/terraform/instalace)
- Ucet na DigitalOcean (Pokud nemate muzete pouzit muj referal: [Registrace + 50 USD kredit](https://sika.link/do-ref))
`}
  />
);

export default Page;
