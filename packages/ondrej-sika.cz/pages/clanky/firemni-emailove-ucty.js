import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Firemní emailové účty"
    markdown={`
V článku [Jak používám email](/clanky/jak-pouzivam-email/) jsem popsal jak používám email soukromě. Teď Vám ukážu jak jej používám ve firmě.
Používám 2 domény: \`sl.com\` pro primární emaily (na Google Workspace) a \`sl.io\` pro méně důležité účty ([Poste.io](https://poste.io) na svém serveru). Více jsem o tom psal v článku [Jak ušetřit za emaily na Google](/clanky/jak-usetrit-za-emaily-na-google). Zde pro zjednodušení používám ukázky jen s \`sl.com\`.

### Lidé

- \`ondrej@sl.com\` - Veřejný email core lidí (komunikace se zákazníky, ...). Některé jsou napojené do Pipedrive.
- \`joedoe@sl.com\` - Veřejný email ostatních kolegů
- \`os@sl.com\` - Interní email (komunikace interně v teamu)

Klíčoví lidé (C level, foundeři, ...) mají veřejný email pouze jméno, ostatní jméno a příjmení. Tento veřejný email má někdo (například já) napojený do Pipedrive, což je CRM a k emailu má přístup asistentka, sales, atd. Tento email má jen ten, kdo potřebuje veřejně komunikovat za firmu.

Jinak každý člen teamu (zaměstnanec) má krátký email \`jp@...\` nebo \`jpr@...\` pokud nastal konflikt. Tyto emaily jsou pro vnitřní používání, registraci firemních služeb, atd. Jsou osobní a nikdo je mezi sebou nesdílí. Pokud se dává email klientům nebo ven, tak v té první formě.

### Web, produkty a služby

Dělám různé věci, nabízím různé produkty a služby, a o každou se stará někdo jiný nebo jiný team. Každý produkt, na kterém spolupracuje více lidí má svůj emailový účet, tak aby měli všichni přehled o tom, co je v jakém stavu. Některé z těchto účtů jsou také v Pipedrive.

- \`hello@sl.com\` - Generický email, který je na webu. Líbí se mi to více než \`info@sl.com\`
- \`training@sl.com\` - Velká část mého byznysu jsou školení, věci kolem nich chci řešit na jednom místě
- \`sales@sl.com\` - Sales email, který je napojený do Pipedrive
- \`community@sl.com\` - Účet pro komunikaci kolem meetupů a konferencí které pořádáme

### Monitoring

Jsme IT & DevOps firma, máme na starosti produkční systémy naše i klientů. Proto máme celkem hezky vyřešené emaily v monitoring systému.

- \`mon@sl.com\` - Monitoring kritických produkčních systému
- \`mon-infra@...\`, \`mon-app1@...\`, \`mon-client1@...\` - Monitoring emaily pro různé teamy
- \`mon-all@sl.com\` - Archiv pro všechny monitoring eventy (forward z ostatních monitoring účtů)

### Support

Monitoring emaily generuje monitoring, support emaily chodí od lidí. Support emaily pouze přeposíláme do Zendesku, kde je spravujeme.

- \`support@sl.com\` - Hromadný support email, který směřuje do Zendesku
- \`joe-support@sl.com\` - Joe's email pro support systém u klientů. Typicky jen alias k internímu emailu.

### Accounts

Pokud potřebujeme registrovat globálně nějakou službu jako je AWS, Twitter nebo Cloudflare, registrujeme to na \`accounts...\`

- \`accounts@sl.com\` - Email pro registraci různých služeb
- \`accounts-aws@...\`, \`accounts-twitter@...\` - Email pro konkrétní důležitou službu, například AWS, Twitteru

Máme jeden globální \`accounts@sl.com\` kam registrujeme všechny služby, ke kterým může mít přístup operations team (COO + asistentka).

Pro služby kde to není možné, například Cloudflare (domény), AWS (kritická infrastruktura), vytváříme vlastní \`accounts-...@...\` a směřujeme to ke konkrétním lidem. Například AWS na CEO + CTO, Twitter na C level a team marketingu.

### Client's Accounts

Pokud potřebuji pro některého klienta založit účet na nějaké službě, například Cloudflare, vytvořím pro to speciální email účet.

- \`accounts-client1-aws@sl.com\` - Email pro klientovo AWS

### Maildev

Stejně jako používám soukromý Maildev, mám nastavený i firemní na doméně \`all.os.com\`, který zahrnuje emaily \`*@all.sl.com\` (\`foo@all.sl.com\`, \`bar@all.sl.com\`, ...).
`}
  />
);

export default Page;
