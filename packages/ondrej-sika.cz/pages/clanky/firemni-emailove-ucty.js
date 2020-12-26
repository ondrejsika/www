import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Firemni emailove ucty"
    markdown={`
V clanku [Jak pouzivam email](/clanky/jak-pouzivam-email/) jsem popsal jak pouzivam email soukrome. Ted Vam ukazu jak jej pouzivam ve firme.

Pouzivam 2 domeny: \`sl.com\` pro primarni emaily (na Google Workspace) a \`sl.io\` pro ne tak dulezite ucty ([Poste.io](https://poste.io) na svem serveru). Vice jsem o tom psal v clanku [Jak usetrit za emaily na Google](/clanky/jak-usetrit-za-emaily-na-google). Zde pro zjednoduseni pouzivam ukazky jen s \`sl.com\`.

### Lide

- \`ondrej@sl.com\` - Verejny email core lidi (komunikace se zakazniky, ...). Nektere jsou napojene do Pipedrive.
- \`joedoe@sl.com\` - Verejny email ostatnich
- \`os@sl.com\` - Interni email (komunikace interne v teamu)

Klicovi lide (C level, founderi, ...) maji verejny email pouze jmeno, ostatni jmeno a prijmeni. Tento verejny email ma nekdo (napriklad ja) napojeny do Pipedrive, coz je CRM a k emailu ma pristup asistentka, sales, ... Tento email ma jen ten, kdo potrebuje verejne komunikovat za firmu.

Jinak kazdy clen teamu (zamestnanec) ma kratky email \`jp@...\` nebo \`jpr@...\` pokud nastal konflikt. Tyto emaily jsou pro vnitrni pouzivani, registraci firemnich sluzeb, ... Tyto emaily jsou osobni a nikdo je mezi sebou nesdili. Pokud se dava email klientum nebo ven, tak v te prvni forme.

### Web, produkty a sluzby

Delam ruzne veci, nabizim ruzne produkty a sluzby, a o kazdou se stara nekdo jiny nebo jiny team. Kazdy produkt, na kterem spolupracuje vice lidi ma svuj emailovy ucet, tak aby meli predled co je v jakem stavu. Nektere z techto uctu jsou take v Pipedrive.

- \`hello@sl.com\` - Genericky email, ktery je na webu. Libi se mi to vice nez \`info@sl.com\`
- \`training@sl.com\` - Velka cast meho byznysu jsou skoleni, veci kolem nich chci resit na jednom miste
- \`sales@sl.com\` - Sales email, ktery je napojeny do Pipedrive
- \`community@sl.com\` - Ucet pro komunikaci kolem meetupu, konferenci, ..., ktere poradame

### Monitoring

Jsme IT & DevOps firma, mame na starosti produkcni systemy nase i klientu. Proto mame celkem hezky vyresene emaily v monitoring systemu.

- \`mon@sl.com\` - Monitoring kritickych produkcnich systemu
- \`mon-infra@...\`, \`mon-app1@...\`, \`mon-client1@...\` - Monitoring emaily pro ruzne teamy
- \`mon-all@sl.com\` - Archiv pro vsechny monitoring eventy (forward z ostatnich monitoring uctu)

### Support

Monitoring emaily generuje monitoring, support emaily chodi od lidi. Support emaily pouze preposilame do Zendesku, kde je spravujeme.

- \`support@sl.com\` - Hromadny support email, ktery smeruje do Zendesku
- \`joe-support@sl.com\` - Joe's email pro support system u klientu. Typicky jen alias k internimu emailu.

### Accounts

Pokud potrebujeme registrovat globalne nejakou sluzbu jako je AWS, Twitter nebo Cloudflare, registrujeme to na \`accounts...\`

- \`accounts@sl.com\` - Email pro registraci ruznych sluzeb
- \`accounts-aws@...\`, \`accounts-twitter@...\`, ... - Email pro konkretni dulezitou sluzbu, napriklad AWS, Twitteru

Mame jeden globalni \`accounts@sl.com\` kam registrujeme vsechny sluzby, ke kterym muze mit pristup operations team (COO + assistentka).

Pro sluzby kde to neni mozne, napriklad Cloudflare (domeny), AWS (kriticka infrastruktura), vytvarime vlastni \`accounts-...@...\` a smerujeme to ke konkretnim lidem. Napriklad AWS na CEO + CTO, Twitter na C lever a team marketingu, ...

### Client's Accounts

Pokud potebuji pro nektereho klienta zalozit ucet na nejake sluzbe (napriklad Cloudflare), vytvorim pro to specialni email ucet.

- \`accounts-client1-aws@sl.com\` - Email pro klientovo AWS

### Maildev

Stejne jako pouzivam soukromy Maildev, mam nastaveny i firemni na domene \`all.os.com\`, ktery zahrnuje emaily \`*@all.sl.com\` (\`foo@all.sl.com\`, \`bar@all.sl.com\`, ...).

`}
  />
);

export default Page;
