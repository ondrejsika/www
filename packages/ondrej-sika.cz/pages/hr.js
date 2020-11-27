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
Děkuji za Váš zájem. Na full time práci se spolu nedomluvíme, ale nabízím externí formu spolupráce, která má následující benefity:

- Vy/klient neztratí několik měsíců času zbytečně čekáním na zkušené DevOps specialisty, kterých je zoufalý nedostatek
- Vy/klient nasadí DevOps technologie rychle a efektivně v průběhu několika dnů/týdnů
- vyškolím Vaše/klientove týmy v různých DevOps technologiích
- nabídnu k tomu SLA support

Umím pomoct se širokou škálou open-source DevOps technologií, umím taky nastavit celou DevOps pipeline a umím to udělat rychle a efektivně. Konkrětně dělám:

- __Školení__ - Dělám populární DevOps školení. Největší zájem je o Docker, Kubernetes, Terraform a Gitlab CI. Můžete vaše vývojáře poslat na otevřený termín nebo můžeme školení uspořádat u Vás ve firmě.
- __Konzultace__ - Mohu Vám pomoci s konkrétním problémem jako připravit infrastrukturu, migrace do Kubernetes, optimalizace gitlab CI pipeline. Vše budeme dělat nad vaším kódem a výsledek je okamžitě použitelný.
- __DevOps Support__ - Potřebujete, aby někdo dohlížel na vaši infrastrukturu v AWS nebo na Kubernetes? Já a můj team se Vám o to postaráme.

### DevOps Live

Dále dělám pravidelené live coding streamy [DevOps Live](/devopslive), pokud máte zájem o volné vstupenky pro kolegy nebo známé, dejte vědět.
`}
      />
    </div>
  </div>
);

export default Install;
