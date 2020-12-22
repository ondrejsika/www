import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Jak usetrit za emaily na Google"
    markdown={`
Pouzivam Google Workspace (drive G Suite), protoze je to stabilni poskytovatel u ktereho jsem si jisty ze me emaily dojdou a ze kdyz bude jakykoliv problem, kriticka infrastruktura jako email bude fungovat.

Email na Google ovsem neni nejlevnejsi. Pokud potrebujete jeden ucet, cena 5 USD/mo je prakticky zdarma, pokud potrebujete uctu 50, najednou je cena 50 * 5 USD/mo = 250 USD/mo coz uz neni nejlevnejsi.

Ukazu Vam reseni, ktere pouzivam.

Pouzivam 2 domeny: \`sikalabs.com\` a \`sikalabs.cz\`. Domena \`sikalabs.com\` je na Google a \`sikalabs.cz\` na mem serveru ([poste.io](https://poste.io)).

Primarni domenu na Googlu pouzivam pro klicova a kriticke ucty, svuj server potom na ty ostatni. Na mem serveru me netrapi pocet uctu a sprava je pro me vyrazne jednodussi.

Ucty pro klicove lidi a sluzy mam na Google, napriklad \`ondrej@\`, \`sales@\`, ... a platim za ne. Naopak ostatni veci mam na svem serveru, napriklad \`externalteammember@\`, \`twitter@\`, \`invoice@\`, ...

Pro ucty, ktere existuji na primarni domene a ne na te sekundarni mam nastavene preposilani, kdyz nekdo napise na \`ondrej@sikalabs.cz\`, email se automaticky preposle na \`ondrej@sikalabs.com\`.
`}
  />
);

export default Page;
