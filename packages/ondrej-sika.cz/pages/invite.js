import React from "react";
import Article from "@app/ondrej-sika.cz/layouts/Article";

export default function InvitePage() {
  return (
    <Article
      title="Připojte se na Slack, LinkedIn a Facebook"
      hideNewsletter={true}
      markdown={`
Pokud se budete chtít připojit do komunity účastníků mých školení a konzultací, můžete se přidat do Slacku nebo do skupin na Facebooku a Linkedinu. Můžete se tam ptát mě i ostatních účastníků na názor nebo zkušenosti. Prostě řešit Vaše problémy s podobnými lidmi. Zároveň Vás budu informovat o novinkách na mé straně.

## Slack

Na Slack se můžete připojit pomocí odkazu zde: <https://sika.link/slack-sikapublic>

Pokud odkaz nebude fungovat (bohužel ho musím každých 20 dní aktualizovat), pošlete mi email s předmětem: [Invite me to Slack](mailto:ondrej@sika.io?subject=Invite%20me%20to%20Slack,%20Sika%20Public)

## LinkedIn

- Moje stránka: [Ondrej Sika](https://www.linkedin.com/company/ondrejsika)
- Skupina pro účastníky: [Ondrej Sika Training Attendees](https://www.linkedin.com/groups/8902190/)

## Facebook

- Moje stránka: [Ondrej Sika](https://www.facebook.com/ondrejsikafreelancer/)
- Skupina: [Ondrej Sika Skoleni - Ucastnici](https://www.facebook.com/groups/3484478441626937/)

## Newsletter

Chcete dostávat nové články do emailu? [Přihlaste se k newsletteru!](https://sika.link/newsletter/)
    `}
    />
  );
}
