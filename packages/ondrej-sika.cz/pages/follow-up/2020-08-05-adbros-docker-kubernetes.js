import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Follow Up: Docker &amp; Kubernetes, Adbros, 5. 8. 2020"
    header="Follow Up: Docker &amp; Kubernetes"
    subheader="Adbros, 5. 8. 2020"
    hideNewsletter={true}
    markdown={`
## Materialy

### Repozitar s kurzy

- Docker - https://github.com/ondrejsika/docker-training/
- Kubernetes - https://github.com/ondrejsika/kubernetes-training/

### Repozitare, ktere jsme pri skoleni vytvorili

- Ukazkovy projekt v PHP - https://github.com/sika-training-examples/k8s--adbros--2020-08-06--example-php-project

### Dalsi pouzite repozitare

- Terraform Infrastruktura Demo Gitlabu - https://github.com/ondrejsika/terraform-demo-gitlab
- Skript na setup Gitlab Runneru - https://github.com/ondrejsika/gitlab-ci-runner
- Traefik s Let's Encrypt - https://github.com/ondrejsika/traefik-le

### Ukazky Gitlab CI

- Docker Compose deployment - https://github.com/ondrejsika/gitlab-ci-docker-compose-traefik--example
- Kubernetes deployment - https://github.com/ondrejsika/gitlab-ci-example-kubernetes

### Temata, ktere jsme nakousli

- Terraform - Infrastructure as a code, [Skoleni Terraformu](/skoleni/terraform)
- Digital Ocean - Cloudova Platforma, [Skoleni Digital Ocean](/skoleni/digitalocean)
- AWS - Cloudova Platforma, skoleni pripravuji

Pokud by jste meli zajem o nejake dalsi skoleni, muzete si vybrat zde:

- Vsechny kurzy - https://ondrej-sika.cz/seznam-skoleni
- Verejne terminy - https://ondrej-sika.cz/verejne-terminy/

### Ostatni zajimave repozitare

- https://ondrej-sika.cz/repozitare/ - Seznam zajimavych repozitaru
- https://github.com/ondrejsika - Vsechny me repozitare na Githubu

Pokud se Vam bude neco libit, budu rad za hvezdicky. Diky.

## Dalsi kroky

- Budu rad, kduz mi napisete doporuceni na LinkedIn a na Twitter
  - Linkedin: pridajte si me a ja vam poslu zadost - https://www.linkedin.com/in/ondrejsika/
  - Twitter: Tweetnete neco s \`@ondrejsika\`.
- Pridejte se do komunit ucastniku mych skoleni, ktere buduji na Slacku, Facebooku a Linkedinu - https://join.sika.io
- Pokud jste ve zpetne vazbe nezaskrtly ze chcete newsletter, muzete se prihlasit zde - https://sika.link/newsletter/

At se Vam dari ne jen s Gitlab CI! O.
`}
  />
);

export default Page;
