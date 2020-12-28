import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Skoleni.io"
    hideNewsletter={true}
    markdown={`
## O projektu Skoleni.io

Nápad na Školení.io vznikl jako platforma, kde se mohou napřímo propojovat lektoři a firmy hledající IT školení.
`}
  />
);

export default Page;
