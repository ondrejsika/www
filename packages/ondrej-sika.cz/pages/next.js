import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Co dál"
    hideNewsletter={true}
    markdown={`
## Propojme se na LinkedInu

Přidejte si mě na [/in/ondrejsika](https://www.linkedin.com/in/ondrejsika/)

## Pojďte na školení

Vyberte si z mých [firemních školení](/skoleni/) nebo jďete na [otevřený termín](/verejne-terminy/).

## DevOps Live

Pravidelně každých 14 dní dělám DevOps Live - livestream na témata z DevOps. Více infromací na [devopslive.cz](/devopslive).

Pošlete i kolegům, pokud mě napíšete email, tak Vám dám free ticket.
`}
  />
);

export default Page;
