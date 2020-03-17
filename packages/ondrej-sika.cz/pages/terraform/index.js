import Article from "@app/ondrejsika-theme/layouts/Article";

export default () => (
  <Article
    title="Terraform"
    ad="terraform"
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
