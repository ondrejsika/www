import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Git"
    ad="git"
    markdown={`
- [Instalace](/git/instalace)
- [Rebase](/git/rebase)
- [Hooks](/git/hooks)
`}
  />
);

export default Page;
