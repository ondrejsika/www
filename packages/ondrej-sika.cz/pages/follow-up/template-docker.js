import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Follow Up: Docker, %%%DATE_HUMAN%%%"
    header="Follow Up: Docker"
    subheader="%%%DATE_HUMAN%%%"
    hideNewsletter={true}
    markdown={`
## Materiály

### Repozitář s kurzy

- Docker - https://github.com/ondrejsika/docker-training/

### Další použité repozitáře

- Traefik s Let's Encrypt - https://github.com/ondrejsika/traefik-le

### Témata, které jsme nakousli

- Terraform - Infrastructure as a code, [Školení Terraformu](/skoleni/terraform)
- DigitalOcean - Cloudova Platforma, [Školení DigitalOcean](/skoleni/digitalocean)

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

Ať se Vám daří ve všem, nejen s Dockerem!
<br>O.
`}
  />
);

export default Page;
