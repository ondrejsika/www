import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Follow Up: Gitlab CI, SNK, 31. 7. 2020"
    header="Follow Up: Gitlab CI"
    subheader="SNK, 31. 7. 2020"
    hideNewsletter={true}
    markdown={`
## Materialy

### Repozitar s kurzy

- Git - https://github.com/ondrejsika/git-training/
- Gitlab CI - https://github.com/ondrejsika/gitlab-ci-training/

### Repozitare, ktere jsme pri skoleni vytvorili

- Ukazkovy projekt v Gitu - https://github.com/sika-training-examples/gitlab-ci-2019-11-26-example-project
- Zakladni prikazy v CI - https://github.com/sika-training-examples/gitlab-ci--snk--2020-07-31--ci-intro
- Sprava Ansible Infrastruktury - https://github.com/sika-training-examples/gitlab-ci--snk--2020-07-31--ansible-indrastructure
- Deployment pomoci Ansible - https://github.com/sika-training-examples/gitlab-ci--snk--2020-07-31--ansible-deployment
- Deployment pomoci Dockeru - https://github.com/sika-training-examples/gitlab-ci--snk--2020-07-31--docker-deployment

### Dalsi pouzite repozitate

- Terraform Infrastruktura Demo Gitlabu - https://github.com/ondrejsika/terraform-demo-gitlab
- Skript na setup Gitlab Runneru - https://github.com/ondrejsika/gitlab-ci-runner
- Traefik s Let's Encrypt - https://github.com/ondrejsika/traefik-le

### Ukazky Gitlab CI

- Docker Compose deployment - https://github.com/ondrejsika/gitlab-ci-docker-compose-traefik--example
- Kubernetes deployment - https://github.com/ondrejsika/gitlab-ci-example-kubernetes

### Temata, ktere jsme nakousli

- Docker - Kontejnery
- Kubernetes - Kontejner orchestrator
- Terraform - Infrastructure as a code

Pokud by jste meli zajem o nejake dalsi skoleni, muzete si vybrat zde:

- Vsechny kurzy - https://ondrej-sika.cz/seznam-skoleni
- Verejne terminy - https://ondrej-sika.cz/verejne-terminy/

### Ostatni zajimave repozitare

- https://ondrej-sika.cz/repozitare/ - Seznam zajimavych repozitaru
- https://github.com/ondrejsika - Vsechny me repozitare na Githubu

Pokud se Vam bude neco libit, budu rad za hvezdicky. Diky.

## Dalsi kroky

- Budu rad, kduz mi napisete doporuceni na LinkedIn, pridajte si me a ja vam poslu zadost - https://www.linkedin.com/in/ondrejsika/
- Pridejte se do komunit ucastniku mych skoleni, ktere buduji na Slacku, Facebooku a Linkedinu - https://join.sika.io
- Pokud jste ve zpetne vazbe nezaskrtly ze chcete newsletter, muzete se prihlasit zde - https://sika.link/newsletter/

At se Vam dari ne jen s Gitlab CI! O.
`}
  />
);

export default Page;
