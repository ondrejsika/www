import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => {
  return (
    <Article
      title="Prvni kroky ve Fronted vyvoji"
      markdown={`
Zde je seznam kurzu, ukazek a zdroju ktere jsou podle me a [Zuzky](https://zuzjes.com) vhodne pro zacatecniky ve vyvoji modedniho frontendu.

## Temata ktera maji smysl

- ES6 (pripadne TypeScript)
- React + Next.js
- Styled Components
- ZEIT (now)
- Bootstrap & React Bootstrap

## Online kurzy a tutorialy

- [ES6 for everyone](https://es6.io/), 50 USD, asi nejrozsahlejsi online kurz na moderni JavaScript
- [Next.js Tutorial](https://nextjs.org/learn/basics/getting-started), zdarma
- Dalsi Kurzy od Wes Bos - https://wesbos.com/courses/, placene

## Offline kurzy

#### Daniel Staigerwald

- https://javascript-skoleni.com/
- https://typescript.fun/cz

#### Ondrej Sika & Zuzana Jeschke

- [https://ondrej-sika.cz/skoleni/react](/skoleni/react) - Skoleni React & Next.js, kurz je v procesu priprav
    `}
    />
  );
};

export default Page;
