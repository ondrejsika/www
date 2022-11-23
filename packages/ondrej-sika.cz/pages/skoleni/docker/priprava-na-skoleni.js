import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Příprava na Školení Dockeru"
    before={
      <div className="alert alert-warning mb-4">
        <p className="mb-0">
          Pokud se Vam nepovede neco nainstalovat, nevadi, udelame to spolu.
          Pripadne mam pro kazdeho ucastnika pripravene VM kde je vse
          pripraveno. Pokud mate jakykoliv dotaz, napiste mi email na:{" "}
          <a href="mailto:ondrej@sika.io">ondrej@sika.io</a>.
        </p>
      </div>
    }
    markdown={`
Díky za Váš zájem o školení Dockeru.

Na školení Dockeru potřebujete

- Vlastní notebook
- Git
- Textovy editor (doporucuji VS Code)
- Nainstalovaný Docker - [návod na instalaci](/docker/instalace)
- Přístup na internet ideálně __bez korporátní proxy__, případne nastavenou proxy v Docker Desktop (na Mac stačí mít nastavenou systémovou proxy)

Doporučuji ješte doma (nebo na dobrém internetu) stáhnout Docker images, které budeme používat. Je to cca 5 GB a občas to bývá při stahování na školení na wifi hodně. Na tomto odkazu je seznam příkazů jak je stáhnout: <https://gist.github.com/ondrejsika/e9748d49120cb1a656d39558ad379f45>

Pokud budete mít jakýkoliv problém nebo dotaz, neváhejte napsat na <ondrej@sika.io>
`}
  />
);

export default Page;
