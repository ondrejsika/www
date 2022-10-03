import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";
import BlogBox from "@app/ondrejsika-theme/components/BlogBox";
import Markdown from "@app/common/components/Markdown";

const Page = () => (
  <Article
    title="Follow Up: Gitlab CI, 03. 10. 2022"
    header="Follow Up: Gitlab CI"
    subheader="03. 10. 2022"
    hideNewsletter={true}
    noBlogBoxContent={
      <>
        <BlogBox>
          <Markdown
            source={`
Prosim, vyplnte mi zpetnou vazbu zde: https://tally.so/r/n0QKp9
`}
          />
        </BlogBox>
        <BlogBox>
          <Markdown
            source={`
## Materiály

### Repozitář s kurzy

- Gitlab CI - https://github.com/ondrejsika/gitlab-ci-training/

### Repozitáře, které jsme při školení vytvořili

- (Final) Project with (CI/CD) Pipeline - https://github.com/sika-training-examples/2022-10-03--gitlab-ci--project-with-pipeline
- Pipeline Examples - https://github.com/sika-training-examples/2022-10-03--gitlab-ci--examples

Vsechny repozitare, ktere vznikly na skolenich jsou na https://github.com/sika-training-examples

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

- [slu](https://github.com/sikalabs/slu) - SikaLabs Utils
- [training-cli](https://github.com/sikalabs/training-cli) - CLI for help during training
- [https://ondrej-sika.cz/repozitare/](/repozitare/) - Seznam zajímavých repozitářů
- https://github.com/ondrejsika - Všechny mé repozitáře na Githubu

Pokud se Vám bude něco líbit, budu rád za hvězdičky. Díky.

## Další kroky

- Budu rád, když mi napíšete doporučení na LinkedIn, přidejte si mne a já vám pošlu žádost - https://www.linkedin.com/in/ondrejsika/
- Přidejte se do komunit účastníkú mých školení, které buduji na Slacku, Facebooku a Linkedinu - https://join.sika.io
- Pokud jste ve zpětné vazbě nezaškrtly, že chcete newsletter, můžete se přihlásit zde - https://sika.link/newsletter/

Ať se Vám daří ve všem, nejen s Gitlab CI!,
<br>O.
`}
          />
        </BlogBox>
      </>
    }
  />
);

export default Page;
