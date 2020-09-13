import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

export default function Page() {
  return (
    <Article
      title="Pomáhám startupům jako je ten Váš"
      hideNewsletter={true}
      markdown={`
## Zrychlim dorucovani novych featur do produkce

TODO

## Zlepsim moznost testovani

TODO

## TODO ...

TODO
`}
    />
  );
}
