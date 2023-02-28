import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Články"
    markdown={`

  Zde jsou mé články a eseje na různá témata od osobního rozvoje, přes minimalismus po správu osobní IT ifrastruktury. Jsou určené pro široké publikum, ne jako zbytek mého webu, který je primárně určen pro lidi, kteří řeší vývoj a provozování software.

- [Z emailu do Slacku](/clanky/z-emailu-do-slacku)
- [Nástroje, které používám a zjednodušují mi práci a život](/clanky/toolchain)
- [Proč by každý měl mít svoji doménu](/clanky/proc-by-kazdy-mel-mit-svoji-domenu/)
- [Proč mít email na vlastní doméně](/clanky/proc-mit-email-na-vlastni-domene)
- [Jak používám email (adresy, pravidla, ...)](/clanky/jak-pouzivam-email/)
- [Firemní emailové účty](/clanky/firemni-emailove-ucty/)
- [Jak ušetřit za emaily na Google](/clanky/jak-usetrit-za-emaily-na-google)
- [Výběr osobní wiki](/clanky/vyber-osobni-wiki)
- [Digitální Detox](/clanky/digitalni-detox/)
- [Zajímavé osobní stránky](/clanky/zajimave-osobni-stranky)
- [Čaje](/clanky/caje)
- [Prvni kroky ve Fronted vývoji](/clanky/prvni-kroky-ve-frontend-vyvoji)
- [Bitcoin](/bitcoin)
- [ChatGPT](/chat-gpt)
- [Github Copilot](/github-copilot)
`}
  />
);

export default Page;
