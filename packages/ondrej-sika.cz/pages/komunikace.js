import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = (props) => (
  <Article
    title="Forma Komunikace"
    markdown={`
## Primarne komunikujte emailem

- <ondrej@sika.io> - Muj pracovni email
- <tech@sikalabs.com> - Inbox technickeho teamu (vcetne me),
rychlejsi reakce kdyz jsem na skoleni, ...

Pokud mate nejaky dotaz, co urcite nemusim resit ja, tak posilejte na <tech@sikalabs.com>.

## Telefonem pouze urgentni veci

Vetsinou mam rezim nerusit, ten Vam hovor automaticky polozim.
Zavolejte jeste jednou. __Telefonem prosim pouze urgentni veci__.

## SMS, iMessage, ...

Mam hodne kanalu, ale mam vyple notifikace. __Napiste email__, ten sleduji pravidelne.

## Slack

Slack nekontroluji pravidelne, mozna nemam zapnute notifikace. Pokud nebudu
odpovidat, __poslete mail__.

`}
  />
);
export default Page;
