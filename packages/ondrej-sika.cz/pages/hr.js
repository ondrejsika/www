import React from "react";
import MainBar from "@app/ondrejsika-theme/components/MainBar";
import Markdown from "@app/common/components/Markdown";

import Head from "next/head";

const Install = () => (
  <div>
    <Head>
      <title>Nehledám práci, hledám spolupráci - Ondrej Sika</title>
    </Head>
    <MainBar header="Nehledám práci, hlednám spolupráci" />
    <div className="container pt-4 pb-2 post-body">
      <Markdown
        source={`
Dekuji za Vas zajem, ale na full time se nedohodneme, za uctuji se __25 000__ CZK bez DPH za MD.

Ale mohu Vam nabidnout jinou formu spoluprace:

- __Skoleni__ - Delam popularni DevOps skoleni. Nejvetsi zajem je Docker, Kubernetes, Terraform a Gitlab CI. Muzete vase vyvojare poslat na otevreny termin nebo muzeme skoleni usporadat u Vas ve firme.
- __Konzultace__ - Mohu Vam pomoci s konkretnim problemem jako pripravit infrastrukturu, migrace do Kubernetes, optimalizace gitlab CI pipeline. Vse budeme delat nad vasim kodem a vysledkem je okamzite pouzitelny.
- __DevOps Support__ - Potrebujete aby nekdo dohlizel na vasi infrastrukturu v AWS nebo na Kubernetes? Ja a muj team se Vam o to postarame.

### DevOps Live

Dale delam pravidelene live coding stremy [DevOps Live](/devopslive), pokud mate zajem o volne vstupeny pro vase vyvojare, dejte vedet.
`}
      />
    </div>
  </div>
);

export default Install;
