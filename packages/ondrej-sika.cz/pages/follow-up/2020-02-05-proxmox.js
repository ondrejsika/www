import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Follow Up: Proxmox, 05. 02. 2020"
    header="Follow Up: Proxmox"
    subheader="05. 02. 2020"
    hideNewsletter={true}
    markdown={`
# Materiály

#### Repozitář s kurzem

https://github.com/ondrejsika/proxmox-training/

#### Další použité repozitáře

- Setup infrastruktury pro skoleni - https://github.com/ondrejsika/terraform-do-proxmox-example

# Témata, které jsme nakousli

#### Terraform

Infrastructure as a code

- [Školení Terraformu](/skoleni/terraform)
- [Hashicorp Czech Community](https://hashicorp.cz) (komunita a meetupy)

#### DigitalOcean

Cloudova Platforma

- [Školení DigitalOcean](/skoleni/digitalocean)
- [DigitalOcean Czech Community](https://digitalocean.cz) (komunita a meetupy)

Pokud byste měli zájem o nějaké další školení, můžete si vybrat zde:

- Všechny kurzy - [https://ondrej-sika.cz/seznam-skoleni/](/seznam-skoleni/)
- Veřejné termíny - [https://ondrej-sika.cz/verejne-terminy/](/verejne-terminy/)

# Ostatní zajímavé repozitáře

- [https://ondrej-sika.cz/repozitare/](/repozitare) - Seznam zajímavých repozitářů
- https://github.com/ondrejsika - Všechny mé repozitáře na Githubu

Pokud se Vám bude něco líbit, budu rád za hvězdičky. Díky.

# Další kroky

- Budu rád, když mi napíšete doporučení na LinkedIn a na Twitter
  - Linkedin: přidejte si mne a já vám pošlu žádost - https://www.linkedin.com/in/ondrejsika/
  - Twitter: Tweetnete něco s \`@ondrejsika\`.
- [Přidejte se](https://join.sika.io) do komunit účastníků mých školení, které buduji na __Slacku__ a __Linkedinu__
- [Přihlašte se k odběru](https://sika.link/newsletter/) mého newsletteru a buďte v obraze!

# Proxmox Komunita

Nas slacku mam kanal \`#proxmox\`, pripojte se a budte v obraze, co se kolem proxmoxu u nas deje.

# Devopsaci.cz

Snazim se sdruzovat devopsaky na jednom miste a budovat komunitu. Pokud te to zajima, koukni na [Devopsaci.cz](https://devopsaci.cz).

<div style="height:50px"></div>

Ať se Vám daří ve všem, nejen s Promethem!
<br>O.

PS: Pokud budete mit jakykoliv dotaz, nevahejte napsat!
`}
  />
);

export default Page;
