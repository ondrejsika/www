import React from "react";
import MainBar from "@app/ondrejsika-theme/components/MainBar";
import Head from "next/head";
import Markdown from "@app/common/components/Markdown";

const Index = () => (
  <div>
    <Head>
      <title>Doporučte mě prosím - Ondrej Sika</title>
    </Head>
    <MainBar header="Doporučte mně prosím" />
    <div className="container pt-4">
      <Markdown
        source={`
Doufám, že se Vám konzultace nebo školení líbilo a že bylo pro Tebe
přínosné.

Budu moc rád, když mi napíšete doporučení na Linkedin a na Twitter.

#### Linkedin

Přidejte si mě ([/in/ondrejsika](https://www.linkedin.com/in/ondrejsika/)) a já vám pošlu žádost.

#### Twitter

Tweetněte jaký byl kurz a zmiňte můj Twitter handle \`@ondrejsika\`. Výhodou Twitteru je, že referenci mohu vložit do stránky, u Linkedinu bohužel ne.
    `}
      />
    </div>
  </div>
);

export default Index;
