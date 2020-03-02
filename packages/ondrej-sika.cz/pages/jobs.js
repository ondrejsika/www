import React from "react";
import MainBar from "@app/ondrej-sika.cz/components/MainBar";
import Markdown from "@app/common/components/Markdown";

import Head from "next/head";

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

- [__Konzultant a Skolitel DevOps__](#hledam-partaka-na-skoleni-a-konzultace-devops) HOT!
- [Junion Frontend Developer (HTML & React)](#junion-frontend-developer--html---react-)
- [Technicky asistent & Junior DevOps Engineer](#technicky-asistent---junior-devops-engineer)

## Hledam partaka na skoleni a konzultace DevOps

Shanim nekoho kdo mi pomuze se skolenimi a workshopy na DevOps temata. Skolim a konzultuji tyto nastroje a praci s nimi.

- Git, Gitlab
- Gitlab CI
- Docker, Kubernetes
- Terraform, Ansible
- ELK / EFK
- Prometheus, Sentry

Pokud pracujes s jinymi technologiemi jako je napriklad AWS, Azure, ... nevadi. Urcite se domluvime.

Moji klienti jsou startupy i korporace. Napriklad O2, AirBank, Satoshi Labs, E.ON, AAA Auto, ...

### Nabizim

- Plat az 13 000 CZK za jeden skolici den
- Moznost rustu, budeme partneri ne zamestnanec vs zamestnavatel
- Prace na zajimavych projektech
- Maly (punkovy) team

### Pozadavky

- Prakticke zkusenosti s nastroji, ktere budes skolit
- Motivace a chut se ucit nove veci ohledne IT a DevOps
- Cestina, Anglictina
- Samostatnost

### Vyhodou

- Praha – obcas se budem muset potkat osobne
- Zkusenosti s prednasenim / lektorovanim


Pokud te nabidka zaujala, napis mi email na <ondrej@ondrejsika.com>. Napada te nekdo kdo by mel zajem? Doporuc mu prosim tuto nabidku, diky.

## Junion Frontend Developer (HTML & React)

Mas zajem pracovat na spouste webu v Next.js a v Reactu? Koukni na ne na [Github](https://github.com/ondrejsika/ondrejsikawebs). Zajima te Frontend, HTML, SEO, ...? Posun se v Reactu a ziskej zkusenosti z praxe na realnych projektech.

### Nabizim

- Zajimave financni ohodnoceni
- Moznost ucit se a rust
- Prace odkudkoliv

### Pozaduji

- Znalost HTML
- Znalost JavaScriptu
- Zakladni znalost Reactu a React komponent
- Zaklady SEO

### Vyhodou

- Znalost Next.js

Pokud te nabidka zaujala, napis mi email na <ondrej@ondrejsika.com>. Napada te nekdo kdo by mel zajem? Doporuc mu prosim tuto nabidku, diky.


## Technicky asistent & Junior DevOps Engineer

Zajimas se o DevOps, ale nemas jeste moc zkusenosti? Nevadi, pojd nejake ziskat.

Shanim nekoho kdo mi pomuze s:

- Implementaci DevOps pro klienty
- Pripravou skoleni
- Sprava promo webu ([ondrej-sika.cz](https://ondrej-sika.cz), [skoleni-docker.cz](https://skoleni-docker.cz), ...)

### Nabizim

- Moznost ucit se od nejlepsich
- Prace na zajimavych projektech

### Pozaduji

- Chut se ucit nove veci
- Zajem o DevOps

### Vyhodou

- Praha – obcas se budem muset potkat osobne
- Student IT (CVUT)

Pokud te nabidka zaujala, napis mi email na <ondrej@ondrejsika.com>. Napada te nekdo kdo by mel zajem? Doporuc mu prosim tuto nabidku, diky.

`}
      />
    </div>
  </div>
);

export default Install;
