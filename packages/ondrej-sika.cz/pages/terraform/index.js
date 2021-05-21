import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Terraform"
    ad="terraform"
    markdown={`
## Co je Terraform

Terraform je nástroj na práci s infrastrukturou jako kódem.

Tato stránka je ve vývoji, pro více informací jděte na oficiální stránky <https://terraform.io>

## Články o Terraformu zde na webu

- [Instalace Terraformu](/terraform/instalace)
- [Správa Cloudflare DNS pomocí Terraformu](/terraform/sprava-cloudflare-dns-pomoci-terraformu)
- [Správa Gitlabu pomocí Terraformu](/blog/sprava-gitlabu-pomoci-terraformu/) (blog post)
- [Dočasně prostředí pro vývojáře spravované Terraformem](/blog/prostredi-pro-vyvojare-spravovane-terraformem) (blog post)

`}
  />
);

export default Page;
