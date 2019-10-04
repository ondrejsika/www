import MainBar from "@app/ondrej-sika.cz/components/MainBar";
import Markdown from "@app/common/components/Markdown";

import Head from "next/head";

import site from "@app/ondrej-sika.cz/config";

let style = {
  fontSize: "1.4em",
  fontWeight: "bold"
};

const Install = () => (
  <div>
    <Head>
      <title>Hledám parťáky na spolupráci - Ondrej Sika</title>
    </Head>
    <MainBar MainBarHeader="Hledám parťáky na spolupráci"></MainBar>

    <style
      dangerouslySetInnerHTML={{
        __html: `
       .post-body img {
        width: 30%;
      }
    `
      }}
    />

    <div className="container pt-4 pb-2 post-body">
      <Markdown
        source={`
FAQ: Je tato nabidka aktualni? Ano.

## Hledam partaka na skoleni a konzultace DevOps

Shanim nekoho kdo mi pomuze se skolenimi a workshopy na DevOps temata. Skolim a konzultuji tyto nastroje a praci s nimi.

- Git
- Gitlab
- Gitlab CI
- Docker
- Kubernetes
- Terraform
- Ansible
- ELK / EFK
- Sentry

Pokud pracujes s jinymi technologiemi jako je napriklad AWS, Azure, ... nevadi. Urcite se domluvime.

Moji klienti jsou startupy i korporace. Napriklad O2, AirBank, Satoshi Labs, E.ON, AAA Auto, ...

### Nabizim

- Plat az 13 000 CZK za jeden skolici den
- Moznost rustu
- Prace na zajimavych projektech
- Maly (punk) team

### Pozadavky

- Prakticke zkusenosti s nastroji, ktere budes skolit
- Motivace a chut se ucit nove veci ohledne IT a DevOps.
- Cestina, Anglictina
- Samostatnost

### Vyhodou

- Praha – obcas se budem muset potkat osobne
- Student IT (CVUT)

Pokud te nabidka zaujala, napis mi email na <ondrej@ondrejsika.com>
`}
      />
    </div>
  </div>
);

export default Install;
