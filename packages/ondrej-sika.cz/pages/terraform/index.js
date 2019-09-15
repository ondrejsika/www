import Article from "@app/ondrej-sika.cz/layouts/Article";

export default () => (
  <Article
    title="Terraform"
    markdown={`
## Co je Terraform

Terraform je nastro na praci s infrastruktutou jako kodem.

Tato stranka je ve vyvoji, pro vice informaci jdete na oficialni stranky <https://terraform.io>

## Clanky o Terraformu zde na webu

- [Instalace Terraformu](/terraform/instalace)
- [Sprava Cloudflare DNS pomoci Terraformu](/terraform/sprava-cloudflare-dns-pomoci-terraformu)

`}
  />
);
