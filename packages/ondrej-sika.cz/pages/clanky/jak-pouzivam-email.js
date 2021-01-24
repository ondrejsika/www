import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Jak používám email (adresy, pravidla, ...)"
    markdown={`
Používám více emailů, skoro jako každý. Mám v tom ale pořádek, což rozhodně každý říct nemůže.
Používám tyto emaily (účty):

- Primární - \`ondrej@os.com\`
- Hromadný pro většinu služeb \`os@os.com\` a nebo \`os+...@os.com\`
- Pro komunikaci s úřady - \`gov@os.com\`
- Pracovní (freelance) - \`ondrej@sika.io\`
- Pracovní (firma A) - \`ondrej@sikalabs.com\`
- Pracovní (firma B) - \`ondrej@skoleni.io\`
- Maildev - \`*@all.os.com\`
- Archiv - \`archived@os.com\`

A tyto aliasy:

- \`todo@os.com\` (alias emailu \`os@os.com\`) - Forward do Todoistu
- \`quick@os.com\` (alias emailu \`os@os.com\`) - Složka pro rychlý přístup k jízdenkám, bookingu, ...

Ne všechny emaily jsou skutečné, ale struktura je taková jak ji používám ;)

### Primární email

Primární email používám pro soukromou komunikaci.

Používám jej také na registraci do služeb, kde mě lidé hledají podle emailu a je to jeden účet pro více účelů (soukromý, firma A, firma B), jako je například Github, ClickUp nebo Notion. V těchto službách mám více skupin nebo organizací, ale vše registrováno pod jedním emailem. Používám primární, protože lidé mě tam můžou hledat po emailu.

Ze služeb, které mám zaregistrované na primární email mi chodí notifikace (kalendář, ClickUp, ...), ty ovšem nechci mít v primárním inboxu, tak je přeposílám do hromadného.

### Hromadný email

Chci mít primární email pouze na důležitou komunikaci, typický od lidí a proto všechno co s nikým sdílet nemusím, jako je například účet do Alzy, nebo když kupuju letenky, používám na to hromadný email.

Hromadný email používám ve dvou variantách: \`os@os.com\` a \`os+...@os.com\`

To \`os+...\` je pouze alias a používám to jako \`os+alza@os.com\`, \`os+swiss@os.com\` nebo \`os+rohlík@os.com\`. Výhodou je, že pak mužů lépe používat filtry v emailu. Některé služby to ´plus´ v emailu neumí, pak používám variantu \`os@os.com\`.

### Úřední email

Email \`gov@os.com\` používám pro komunikaci s úřady jako je FU, CSSZ, zdravotní pojišťovna. Vše co má co do činění se státem.

### Firemní emaily

Asi jako každý, když něco řeším za danou firmu, používám její email.

### Maildev

Maildev je skvělá utilita nejen pro vývojáře. Je to webová aplikace, která přijímá jakékoliv emaily, které ji přijdou (na IP a port 25) a rovnou je zobrazuje na webu. Pokud mám na server nacílenou nějakou doménu, například \`all.os.com\` tak pak tento server akceptuje emaily ve tvaru \`*@all.os.com\` (například \`foo@all.os.com\`, \`bar@all.os.com\`, ...). Tohle používám, když chci vyzkoušet nějakou službu (klidně vícekrát) nebo když chci projít email "pay wall". A samozřejmě když někam posílám testovací emaily při vývoji.

Maildev je open source: <https://github.com/maildev/maildev>

### Archiv

Do toho emailu posílám dokumenty co chci archivovat. Všechny smlouvy, úřední dopisy, potvrzení o podání DPH, ... Zároveň tento email přeposílám do DMS (document managemet system), kde tyto soubory třídím a archivuji. Ale když potřebuji, vše najdu v tomto inboxu.

U několika lidí (kterým jsem nastavoval email flow), jsme místo další schránky udělali jen alias k primárnímu mailboxu a pravidlo že se to ukládá do složky \`archiveD\` (protože \`archive\` je by default zabraná).

### Todo

Todo alias používám tak, že když z nějakého emailu chci udělat task v Todoistu, tak jej jednoduše přepošlu. Nemusím si pamatovat generovanou adresu na kterou to mám posílat.

### Quick

Alias \`quick@os.com\` mám nasměrovaný do složky \`quick\` v hromadném účtu, kam si manuálně přeposílám jízdenky, letenky, ... všechny emaily co potřebuju mít rychle k dispozici.
`}
  />
);

export default Page;
