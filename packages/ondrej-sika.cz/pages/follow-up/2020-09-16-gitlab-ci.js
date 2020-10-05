import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Follow Up: Gitlab CI, 16. 9. 2020"
    header="Follow Up: Gitlab CI"
    subheader="16. 9. 2020"
    hideNewsletter={true}
    markdown={`
## Materiály

### Repozitář s kurzy

- Gitlab CI - https://github.com/ondrejsika/gitlab-ci-training/

### Repozitáře, které jsme při školení vytvořili

- https://github.com/sika-training-examples/gitlab-ci--2020-09-16--kuberneres-deployment-example
- https://github.com/sika-training-examples/gitlab-ci--2020-09-16--example


### Další použité repozitáře

- Terraform Infrastruktura Demo Gitlabu - https://github.com/ondrejsika/terraform-demo-gitlab
- Skript na setup Gitlab Runneru - https://github.com/ondrejsika/gitlab-ci-runner
- Traefik s Let's Encrypt - https://github.com/ondrejsika/traefik-le

### Ukázky Gitlab CI

- Docker Compose deployment - https://github.com/ondrejsika/gitlab-ci-docker-compose-traefik--example
- Kubernetes deployment - https://github.com/ondrejsika/gitlab-ci-example-kubernetes

### Témata, které jsme nakousli

- Docker - Kontejnery
- Kubernetes - Kontejner orchestrator
- Terraform - Infrastructure as a code

Pokud byste měli zájem o nějaké další školení, můžete si vybrat zde:

- Všechny kurzy - [https://ondrej-sika.cz/seznam-skoleni/](/seznam-skoleni/)
- Veřejné termíny - [https://ondrej-sika.cz/verejne-terminy/](/verejne-terminy/)

### Ostatní zajímavé repozitáře

- [https://ondrej-sika.cz/repozitare/](/repozitare/) - Seznam zajímavých repozitářů
- https://github.com/ondrejsika - Všechny mé repozitáře na Githubu

Pokud se Vám bude něco líbit, budu rád za hvězdičky. Díky.

## Další kroky

- Budu rád, když mi napíšete doporučení na LinkedIn, přidejte si mne a já vám pošlu žádost - https://www.linkedin.com/in/ondrejsika/
- Přidejte se do komunit účastníkú mých školení, které buduji na Slacku, Facebooku a Linkedinu - https://join.sika.io
- Pokud jste ve zpětné vazbě nezaškrtly, že chcete newsletter, můžete se přihlásit zde - https://sika.link/newsletter/

Ať se Vám daří ve všem, nejen s Gitlab CI! O.
`}
  />
);

export default Page;
