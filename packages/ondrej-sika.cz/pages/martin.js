import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

export default function InvitePage() {
  return (
    <Article
      title="Martin Jurco"
      subheader="#operations #scaling #marketing #sales"
      hideNewsletter={true}
      markdown={`
Martin je moje prava ruka co se tyka operativy, skalovani, marketingu a obchodu.

Potkali jsme se spolu na Slush Poolu a diky nemu nemusim resit agendu a muzu delat to v cem jsem dobry - DevOps.
      `}
    />
  );
}
