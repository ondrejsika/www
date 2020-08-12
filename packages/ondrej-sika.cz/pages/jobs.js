import React from "react";
import MainBar from "@app/ondrejsika-theme/components/MainBar";
import Markdown from "@app/common/components/Markdown";

import Head from "next/head";

const Install = () => (
  <div>
    <Head>
      <title>Hledám parťáky na spolupráci - Ondrej Sika</title>
    </Head>
    <MainBar header="Hledám parťáky na spolupráci"></MainBar>

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
FAQ: Je tato nabídka aktuální? Ano.

- [__Konzultant a Školitel DevOps__](#hledam-partaka-na-skoleni-a-konzultace-devops) HOT!
- [Junion Frontend Developer (HTML & React)](#junion-frontend-developer--html---react-)
- [Technický asistent & Junior DevOps Engineer](#technicky-asistent---junior-devops-engineer)

## Hledám parťáka na školení a konzultace DevOps

Sháním někoho kdo mi pomůže se školeními a workshopy na DevOps témata. Školím a konzultuji tyto nástroje a práci s nimi.

- Git, Gitlab
- Gitlab CI
- Docker, Kubernetes
- Terraform, Ansible
- ELK / EFK
- Prometheus, Sentry

Pokud pracuješ s jinými technologiemi jako je například AWS, Azure, ... nevadí. Určitě se domluvíme.

Moji klienti jsou startupy i korporace. Například O2, AirBank, Satoshi Labs, E.ON, AAA Auto, ...

### Nabízím

- Plat až 13 000 CZK za jeden školící den
- Možnost růstu, budeme partneři, ne zamestnanec vs zaměstnavatel
- Práce na zajímavých projektech
- Malý (punkový) team

### Požadavky

- Praktické zkušenosti s nástroji, které budeš školit
- Motivace a chuť se učit nové věci ohledně IT a DevOps
- Čeština, Angličtina
- Samostatnost

### Výhodou

- Praha – občas se budeme muset potkat osobně
- Zkušenosti s přednášením / lektorováním


Pokud tě nabídka zaujala, napiš mi email na <ondrej@ondrejsika.com>. Napadá tě někdo kdo by měl zájem? Doporuč mu prosím tuto nabidku, díky.

## Junion Frontend Developer (HTML & React)

Máš zájem pracovat na spoustě webu v Next.js a v Reactu? Koukni na ně na [Github](https://github.com/ondrejsika/ondrejsikawebs). Zajímá tě Frontend, HTML, SEO, ...? Posuň se v Reactu a získej zkušenosti z praxe na reálných projektech.

### Nabízím

- Zajímavé finanční ohodnocení
- Možnost učit se a růst
- Práce odkudkoliv

### Požaduji

- Znalost HTML
- Znalost JavaScriptu
- Základní znalost Reactu a React komponent
- Základy SEO

### Výhodou

- Znalost Next.js

Pokud tě nabídka zaujala, napiš mi email na <ondrej@ondrejsika.com>. Napadá tě někdo kdo by měl zájem? Doporuč mu prosím tuto nabídku, díky.


## Technický asistent & Junior DevOps Engineer

Zajímáš se o DevOps, ale nemáš jěště moc zkušeností? Nevadí, pojď nějaké získat.

Sháním někoho kdo mi pomůže s:

- Implementací DevOps pro klienty
- Přípravou školení
- Sprava promo webu ([ondrej-sika.cz](https://ondrej-sika.cz), [skoleni-docker.cz](https://skoleni-docker.cz), ...)

### Nabizim

- Možnost učit se od nejlepších
- Práce na zajímavých projektech

### Požaduji

- Chuť se učit nové věci
- Zájem o DevOps

### Výhodou

- Praha – občas se budeme muset potkat osobně
- Student IT (CVUT)

Pokud tě nabídka zaujala, napiš mi email na <ondrej@ondrejsika.com>. Napadá tě někdo kdo by měl zájem? Doporuč mu prosím tuto nabídku, díky.

`}
      />
    </div>
  </div>
);

export default Install;
