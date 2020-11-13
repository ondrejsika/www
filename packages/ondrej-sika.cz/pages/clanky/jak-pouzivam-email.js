import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Jak pouzivam email (adresy, pravidla, ...)"
    markdown={`
__Na článku pracuji ...__

---

Pouzivam vice emailu, skoro jako kazdy. Mam v tom ale poradek, coz rozhodne kazdy rict nemuze.

Pouzivam emaily:

- Primarni - \`ondrej@os.com\`
- Hromadny pro vetsinu sluzeb \`ondrejsika@os.com\` a nebo \`a+...@os.com\`
- Pro komunikaci s urady - \`office@os.com\`
- Pracovni (freelance) - \`ondrej@sika.io\`
- Pracovni (firma A) - \`ondrej@sikalabs.com\`
- Pracovni (firma B) - \`ondrej@skoleni.io\`
- Maildev - \`*@all.os.com\`

Ne vsechny emaily jsou zkutecne, ale struktura je takova jak ji pouzivam ;)

### Primarni email

Primarni email pouzivam pro soukromou komunikaci.

Pouzivam jej take na registraci do sluzeb, kde me lide hledaji podle emailu a je to jeden ucet pro vice ucelu (soukromy, firma A, firma B), jako je napriklad Github, ClickUp nebo Notion. Vtechto sluzbach mam vice skupin nebo organizaci, ale vse registrovano pod jednim emailem. Pouzivam primarni, protoze lide me tam muzou hledat po emailu.

Ze sluzeb, ktere mam zaregistrovane na primarni email mi chodi notifikace (kalendar, ClickUp, ...), ty ovsem nechci mit v primarnim inboxu, tak je preposilam do hromadneho.

### Hromadny email

Chci mit primarni email pouze na dulezitou komunikaci, typicky od lidi a proto vsechno co s nikym sdilet nemusim jako je napriklad ucet do Alzy, nebo kdyz kupuju letenky, pouzivam na to hromadny email.

Hromadny email mam ve dvou formatech: \`ondrejsika@os.com\` a \`a+...@os.com\`

To \`a+...\` je pouze alias a pouzivam to jako \`a+alza@os.com\`, \`a+swiss@os.com\` nebo \`a+rohlik@os.com\`. Vyhodou je ze pak muzu lepe pouzivat filtry v emailu. Nektere sluzby to plus v emailu neumi, pak pouzivm variantu \`ondrejsika@os.com\`.

`}
  />
);

export default Page;
