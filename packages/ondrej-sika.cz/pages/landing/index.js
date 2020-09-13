import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

export default function Page() {
  return (
    <Article
      hideFooter={true}
      title="Landing Pages"
      hideNewsletter={true}
      markdown={`
- [Startups](/landing/startups)
`}
    />
  );
}
