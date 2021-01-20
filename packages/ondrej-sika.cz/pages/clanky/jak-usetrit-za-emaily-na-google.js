import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Jak ušetřit za emaily na Google"
    markdown={`

Používám Google Workspace (dříve G Suite), protože je to stabilní poskytovatel u kterého jsem si jistý že mě emaily dojdou a že když bude jakýkoliv problém, kritická infrastruktura jako email bude fungovat.
Email na Google ovšem není nejlevnější. Pokud potřebujete jeden účet, cena 5 USD/mo je prakticky zdarma, pokud potřebujete účtů 50, najednou je cena 50 * 5 USD/mo = 250 USD/mo což už není nejlevnější.

Ukážu Vám řešení, které používám.

Používám 2 domény: \`sikalabs.com\` a \`sikalabs.io\`. Doména \`sikalabs.com\` je na Google a \`sikalabs.io\` na mém serveru ([poste.io](https://poste.io)).

Primární doménu na Googlu používám pro klíčové a kritické účty, svůj server potom na ty ostatní. Na mém serveru mě netrápí počet účtů a správa je pro mě výrazně jednodušší.

Účty pro klíčové lidi a služby mám na Google, například \`ondrej@\`, \`sales@\`, ... a platím za ně. Naopak ostatní věci mám na svém serveru, například \`externalteammember@\`, \`twitter@\`, \`invoice@\`, ...

Pro účty, které existují na primární doméně a ne na té sekundární mám nastavené přeposílání, když někdo napíše na \`ondrej@sikalabs.io\`, email se automaticky přepošle na \`ondrej@sikalabs.com\`.
`}
  />
);

export default Page;
