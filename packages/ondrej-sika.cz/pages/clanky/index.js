import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Články"
    markdown={`

  Zde jsou mé články a eseje na různá témata od osobního rozvoje, přes minimalismus po správu osobní IT ifrastruktury. Jsou určené pro široké publikum, ne jako zbytek mého webu, který je primárně určen pro lidi, kteří řeší vývoj a provozování software.

- [Ze emailu do Slacku](/clanky/z-emailu-do-slacku)
- [Nástroje, které používám a zjednodušují mi práci a život](/clanky/toolchain)
- [Proč by každý měl mít svoji doménu](/clanky/proc-by-kazdy-mel-mit-svoji-domenu/)
- [Proč mít email na vlastní doméně](/clanky/proc-mit-email-na-vlastni-domene)
- [Primární, Soukromý a firemní email](/clanky/primarni-soukromy-a-firemni-email/)
- [Výběr osobní wiki](/clanky/vyber-osobni-wiki)
- [Digitální Detox](/clanky/digitalni-detox/)
- [Zajímavé osobní stránky](/clanky/zajimave-osobni-stranky)
- [Čaje](/clanky/caje)
- [Prvni kroky ve Fronted vyvoji](/clanky/prvni-kroky-ve-frontend-vyvoji)
- [Bitcoin](/bitcoin)
`}
  />
);

export default Page;
