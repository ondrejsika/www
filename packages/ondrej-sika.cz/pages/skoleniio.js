import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Skoleni.io"
    hideNewsletter={true}
    markdown={`
## O projektu Skoleni.io

Napad na Skoleni.io vznikl jako platforma, kde se mohou naprimo propojovat lektori a firmy hledajici IT skoleni.
`}
  />
);

export default Page;
