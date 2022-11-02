import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="DevOps365"
    subheader={
      <span style={{ fontSize: "1.5em" }}>
        Neomezeny pristup ke mym skolenim po cely rok
      </span>
    }
    markdown={`
## Co je DevOps365?

Rozhodl jsem se udelat rocni predplatne mych skoleni, kurzu a konzultaci. Mam varianty pro jednotlivce i pro firmy.

## DevOps365

DevOps365 umuznuje navstivit kazde me verejne skoleni, at uz offline nebo online. Soucasti je take pristup na vsechny DevOps Live streamy a pristup na DevOps MasterMindy. To je vse v cene.

V cene je take 90 minut konzultace mesicne zdarma.

Cena je pro jednotlivce **50 000 CZK**, pro teamy je **200 000 CZK** az pro 6 lidi.

Je to drahe? Rozhodne to neni levne, ale Vazim si svych kurzu. Na druhou stranu, vemte to takhle. Pokud mate zajem o Docker + Kubernetes + Terraform, vsechny dalsi kurzy v danem roce mate zdarma. A samozrejme muzete jit na jakykoliv kurz opakovane - opakovani je matka moudrosti. Nebo jej naprikad jen sledovat online :)

## DevOps365 Online

Pokud preferujete pouze online variaty, mam pro Vas DevOps365 online za cenu **39 000 CZK**. Firemni varianty resim individualne.

Pokud mate zajem, piste na <ondrej@sika.io>
    `}
  />
);

export default Page;
