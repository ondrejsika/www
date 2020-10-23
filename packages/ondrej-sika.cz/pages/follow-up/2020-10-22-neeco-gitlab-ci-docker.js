import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Follow Up: Gitlab CI &amp; Docker, Neeco, 22. 10. 2020"
    header="Follow Up: Gitlab CI &amp; Docker"
    subheader="Neeco, 22. 10. 2020"
    hideNewsletter={true}
    markdown={`
## Materilály

### Repozitář s kurzy

- Gitlab CI - https://github.com/ondrejsika/gitlab-ci-training/
- Docker - https://github.com/ondrejsika/docker-training/

### Repozitáře, které jsme při školení vytvořili

- Ukázkova pipeline - https://github.com/sika-training-examples/gitlab-ci--neeco--2020-10-22--docker-kubernetes-pipeline

### Další použité repozitáře

- Terraform Infrastruktura Demo Gitlabu - https://github.com/ondrejsika/terraform-demo-gitlab
- Skript na setup Gitlab Runneru - https://github.com/ondrejsika/ondrejsika-gitlab-runner
- Kubernetes Cluster na DigitalOceanu - https://github.com/ondrejsika/terraform-do-kubernetes-example
- Kubernetes Ingress pomocí Traefiku - https://github.com/ondrejsika/ondrejsika-k8s-ingress
- One Image (Helm package for Kubernetes) - https://github.com/ondrejsika/one-image-helm

### Ukázky Gitlab CI

- Docker Compose deployment - https://github.com/ondrejsika/gitlab-ci-docker-compose-traefik--example
- Kubernetes deployment - https://github.com/ondrejsika/gitlab-ci-example-kubernetes

## Clanky, ktere jsem zminoval

- [Správa Gitlabu pomocí Terraformu](/blog/docker-vs-podman-v-cem-se-lisi/)
- [Podman: "Docker" pod non-root uzivatelem](/blog/podman-docker-pod-non-root-uzivatelem/)
- [Docker vs Podman: V čem se liší](/blog/sprava-gitlabu-pomoci-terraformu/)
- [12 Factor Apps](https://12factor.net/)

### Témata, které jsme nakousli

- Kubernetes - Orchestrace kontejneru, [Školení Kubernetes](/skoleni/kubernetes)
- Terraform - Infrastructure as a code, [Školení Terraformu](/skoleni/terraform)
- Digital Ocean - Cloudova Platforma, [Školení Digital Ocean](/skoleni/digitalocean)
- AWS - Cloudova Platforma, školení pripravuji

Pokud byste měli zájem o nějaké další školení, můžete si vybrat zde:

- Všechny kurzy - [https://ondrej-sika.cz/seznam-skoleni/](/seznam-skoleni/)
- Veřejné termíny - [https://ondrej-sika.cz/verejne-terminy/](/verejne-terminy/)

### Ostatní zajímavé repozitáře

- [https://ondrej-sika.cz/repozitare/](/repozitare) - Seznam zajímavých repozitářů
- https://github.com/ondrejsika - Všechny mé repozitáře na Githubu

Pokud se Vám bude něco líbit, budu rád za hvězdičky. Díky.

## Další kroky

- Budu rád, když mi napíšete doporučení na LinkedIn a na Twitter
  - Linkedin: přidejte si mne a já vám pošlu žádost - https://www.linkedin.com/in/ondrejsika/
  - Twitter: Tweetnete něco s \`@ondrejsika\`.
- Přidejte se do komunit účastníků mých školení, které buduji na Slacku, Facebooku a Linkedinu - https://join.sika.io
- Pokud jste ve zpětné vazbě nezaškrtly, že chcete newsletter, můžete se přihlásit zde - https://sika.link/newsletter/

Ať se Vám daří ve všem, nejen s Gitlab CI! O.
`}
  />
);

export default Page;
