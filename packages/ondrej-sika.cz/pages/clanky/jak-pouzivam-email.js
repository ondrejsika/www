import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Jak pouzivam email (adresy, pravidla, ...)"
    markdown={`
Pouzivam vice emailu, skoro jako kazdy. Mam v tom ale poradek, coz rozhodne kazdy rict nemuze.

Pouzivam tyto emaily (ucty):

- Primarni - \`ondrej@os.com\`
- Hromadny pro vetsinu sluzeb \`os@os.com\` a nebo \`os+...@os.com\`
- Pro komunikaci s urady - \`gov@os.com\`
- Pracovni (freelance) - \`ondrej@sika.io\`
- Pracovni (firma A) - \`ondrej@sikalabs.com\`
- Pracovni (firma B) - \`ondrej@skoleni.io\`
- Maildev - \`*@all.os.com\`
- Archiv - \`archived@os.com\`

A tyto aliasy:

- \`todo@os.com\` (alias emailu \`os@os.com\`) - Forward do Todoistu
- \`quick@os.com\` (alias emailu \`os@os.com\`) - Slozka pro rychly pristup k jizdenkam, bookingu, ...

Ne vsechny emaily jsou zkutecne, ale struktura je takova jak ji pouzivam ;)

### Primarni email

Primarni email pouzivam pro soukromou komunikaci.

Pouzivam jej take na registraci do sluzeb, kde me lide hledaji podle emailu a je to jeden ucet pro vice ucelu (soukromy, firma A, firma B), jako je napriklad Github, ClickUp nebo Notion. Vtechto sluzbach mam vice skupin nebo organizaci, ale vse registrovano pod jednim emailem. Pouzivam primarni, protoze lide me tam muzou hledat po emailu.

Ze sluzeb, ktere mam zaregistrovane na primarni email mi chodi notifikace (kalendar, ClickUp, ...), ty ovsem nechci mit v primarnim inboxu, tak je preposilam do hromadneho.

### Hromadny email

Chci mit primarni email pouze na dulezitou komunikaci, typicky od lidi a proto vsechno co s nikym sdilet nemusim jako je napriklad ucet do Alzy, nebo kdyz kupuju letenky, pouzivam na to hromadny email.

Hromadny email pouzivam ve dvou variantach: \`os@os.com\` a \`os+...@os.com\`

To \`os+...\` je pouze alias a pouzivam to jako \`os+alza@os.com\`, \`os+swiss@os.com\` nebo \`os+rohlik@os.com\`. Vyhodou je ze pak muzu lepe pouzivat filtry v emailu. Nektere sluzby to plus v emailu neumi, pak pouzivm variantu \`os@os.com\`.

### Uredni email

Email \`gov@os.com\` pouzivam pro komunikaci s urady jako je FU, CSSZ, zdravotni pojistovna. Vse co ma co docineni se statem.

### Firemni emaily

Asi jako kazdy, kdyz neco resim za danou firmu, pouzivam jeji email.

### Maildev

Maildev je skvela utilita ne jen pro vyvojare. Je to webova aplikace, ktera prijima jakekoliv emaily, ktere ji prijdou (na IP a port 25) a rovnou je zobrazuje na webu. Pokud mam na server nacilenou nejakou domenu, napriklad \`all.os.com\` tak pak tento server akceptuje emaily ve tvaru \`*@all.os.com\` (napriklad \`foo@all.os.com\`, \`bar@all.os.com\`, ...). Tohle pouzivam, kdyz chci vyzkouset nejakou sluzbu (klidne vicekrat) nebo kdyz chci projit email "pay wall". A samozrejme kdyz nekam posilam testovaci emaily pri vyvoji.

Maildev je open source: <https://github.com/maildev/maildev>

### Archiv

Do toho emailu posilam dokumenty co chci archivovat. Vsechny smlouvy, uredni dopisy, potvrzeni o podani DPH, ... Zaroven tento email preposilam do DMS (documment managemet system), kde tyto soubory tridim a archivuji. Ale kdyz potrebuji, vse najdu v tomto inboxu.

U nekolika lidi (kterym jsem nastavoval email flow), jsme misto dalsi schranky udelali jen alias k primarnimu mailboxu a pravidlo ze se to uklada do slozky \`archiveD\` (protoze \`archive\` je by default zabrana).

### Todo

Todo alias pouzivam tak, ze kdyz z nejakeho emailu chci udelat task v Todoistu, tak jej jednoduse preposlu. Nemusim si pamatovat generovanou adresu na kterou to mam posilat.

### Quick

Alias \`quick@os.com\` mam nasmerovany do slozky \`quick\` v hromadnem uctu, kam si manualne preposilam jizdenky, letenky, ... vsechny emaily co potrebuju mit rychle k dispozici.
`}
  />
);

export default Page;
