import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

export default function InvitePage() {
  return (
    <Article
      title="SikaLabs Open Source"
      hideNewsletter={true}
      markdown={`
## Na opensource zakladech stavime, do opensource prispivame

Cely nas stack se kterym pracujeme (krome cloudu), je Open Source, verime v
otevrenost a radi prispejeme. Hodne veci mame k dispozici verejne na Githubu na:

- https://github.com/ondrejsika
- https://github.com/sikalabs

## Nase Zajimavve Open Source Projekty

### Tergum

Tergum je nastroj na jednoduche zalohovani z vice zdroju do vice ulozist.
Muzete zalohovat databazi a souboru do s3, lokalne nebo na jiny server.

Vice info na Githubu: https://github.com/sikalabs/tergum
      `}
    />
  );
}
