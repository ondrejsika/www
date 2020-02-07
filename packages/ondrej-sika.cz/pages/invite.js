import React from "react";
import Article from "@app/ondrej-sika.cz/layouts/Article";

export default function InvitePage() {
  return (
    <Article
      title="Připojte se na Slack, Linkedin a Facebook"
      hideNewsletter={true}
      markdown={`
Pokud se budete chti pripojit do komunity ucastniku mych skoleni a konzultaci, muzete se pridat do Slacku nebo do skupin na Facebooku a Linkedinu. Muzete se tam ptat me i ostatnich ucastniku na nazor nebo zkusenosti. Proste resit vase problemy s podobnymi lidmi. Zarove Vas budu informovat o novinkach na me strane.

## Slack

Na Slack se muzete pripojit pomoci odkazu zde: <https://sika.link/slack-sikapublic>

Pokud odkaz nebude fungovat (bohuzel ho musim kazdych 20 dni aktualizovat), poslete mi email s predmetem: [Invite me to Slack](mailto:ondrej@sika.io?subject=Invite%20me%20to%20Slack,%20Sika%20Public)

## LinkedIn

- Moje Stranka: [Ondrej Sika](https://www.linkedin.com/company/ondrejsika)
- Skupina pro ucastniky: [Ondrej Sika Training Attendees](https://www.linkedin.com/groups/8902190/)

## Facebook

- Moje Stranka: [Ondrej Sika](https://www.facebook.com/ondrejsikafreelancer/)
- Skupina: [Ondrej Sika Skoleni - Ucastnici](https://www.facebook.com/groups/3484478441626937/)

## Newsletter

Chcete dostávat nové články do emailu? [Přihlaste se k newsletteru!](https://sika.link/newsletter/)
    `}
    />
  );
}
