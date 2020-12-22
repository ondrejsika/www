import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Firemni emailove ucty"
    markdown={`
V clanku [Jak pouzivam email](/clanky/jak-pouzivam-email/) jsem popsal jak pouzivam email soukrome. Ted Vam ukazu jak jej pouzivam ve firme.

### Lide

- \`ondrej@sl.com\` - Verejny email core lidi (komunikace se zakazniky, ...)
- \`joedoe@sl.com\` - Verejny email ostatnich
- \`os@sl.com\` - Interni email (komunikace interne v teamu)

### Web + Moje Sluzby

- \`hello@sl.com\` - Genericky email, ktery je na webu
- \`training@sl.com\` - Velka cast meho byznysu jsou skoleni, veci kolem nich chci resit na jednom miste

### Monitoring

- \`mon@sl.com\` - Monitoring kritickych produkcnich systemu
- \`mon-infra@...\`, \`mon-app1@...\`, \`mon-client1@...\` - Monitoring emaily pro ruzne teamy
- \`mon-all@sl.com\` - Archiv pro vsechny monitoring eventy (forward z ostatnich monitoring uctu)

### Support

- \`support@sl.com\` - Hromadny support email, ktery smeruje do Zendesku
- \`joe-support@sl.com\` - Joe's email pro support system u klientu. Typicky jen alias k internimu emailu.

### Accounts

- \`accounts@sl.com\` - Email pro registraci ruznych sluzeb
- \`accounts-aws@...\`, \`accounts-twitter@...\`, ... - Email pro konkretni dulezitou sluzbu, napriklad AWS, Twitteru

### Client's Accounts

Pokud potebuji pro nektereho klienta zalozit ucet na nejake sluzbe (napriklad Cloudflare), vytvorim pro to specialni email ucet.

- \`accounts-client1-aws@sl.com\` - Email pro klientovo AWS

`}
  />
);

export default Page;
