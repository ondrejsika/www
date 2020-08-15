import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Moje certifikaty"
    hideNewsletter={true}
    markdown={`
## Udemy

- https://www.udemy.com/certificate/UC-db716601-7905-4d98-9f5b-e9cf8a8a9d32/
`}
  />
);

export default Page;
