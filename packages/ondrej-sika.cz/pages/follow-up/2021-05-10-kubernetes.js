import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Follow Up: Mavenir Kubernetes, 10. 05. 2021"
    header="Follow Up: Mavenir Kubernetes"
    subheader="10. 05. 2021"
    hideNewsletter={true}
    markdown={`
## Materiály

### Repozitář s kurzy

- Kubernetes - https://github.com/ondrejsika/kubernetes-training/

### Video zaznam z kurzu

- https://www.youtube.com/watch?v=Go2jhTKqcso (den 1)
- https://www.youtube.com/watch?v=KyF2UsbQzD4 (den 2)
- https://www.youtube.com/watch?v=VL981sPQu_4 (den 3)
- https://www.youtube.com/watch?v=zR9TYz54zBk (den 4)

### Další zajímavé odkazy a repozitáře

- [DevOps Live](/devopslive) - Live streamy na témata z DevOps
- [Kubernetes na mém blogu](/blog/tag/kubernetes/)
- [https://ondrej-sika.cz/repozitare/](/repozitare) - Seznam zajímavých repozitářů
- https://github.com/ondrejsika - Všechny mé repozitáře na Githubu

### Další použité repozitáře

- Terraform Infrastruktura Demo Gitlabu - https://github.com/ondrejsika/terraform-demo-gitlab
- Traefik Ingress for Kubernets - https://github.com/ondrejsika/kubernetes-ingress-traefik
- Demo Kubernetes Cluster on DigitalOcean - https://github.com/ondrejsika/terraform-do-kubernetes-example
- Prometheus on Kubernetes - https://github.com/ondrejsika/ondrejsika-k8s-prom

### Témata, které jsme nakousli

- Terraform - Infrastructure as a code, [Školení Terraformu](/skoleni/terraform)
- RKE & Rancher - On premise Kubernetes [Školení Rancheru](/skoleni/rancher)
- DigitalOcean - Cloudova Platforma, [Školení DigitalOcean](/skoleni/digitalocean)

Pokud byste měli zájem o nějaké další školení, můžete si vybrat zde:

- Všechny kurzy - [https://ondrej-sika.cz/seznam-skoleni/](/seznam-skoleni/)
- Veřejné termíny - [https://ondrej-sika.cz/verejne-terminy/](/verejne-terminy/)

Pokud se Vám bude něco líbit, budu rád za hvězdičky. Díky.

## DevOps Live

Začal jsem streamovat live coding na témata z DevOps, pokud by Vás to zajímalo více, koukněte na stránku [DevOps Live](/devopslive).

## Další kroky

- Budu rád, když mi napíšete doporučení na LinkedIn a na Twitter
  - Linkedin: přidejte si mne a já vám pošlu žádost - https://www.linkedin.com/in/ondrejsika/
  - Twitter: Tweetnete něco s \`@ondrejsika\`.
- Přidejte se do komunit účastníků mých školení, které buduji na Slacku, Facebooku a Linkedinu - https://join.sika.io
- Pokud jste ve zpětné vazbě nezaškrtly, že chcete newsletter, můžete se přihlásit zde - https://sika.link/newsletter/

Ať se Vám daří ve všem, nejen s Kubernetes!
<br>O.
`}
  />
);

export default Page;
