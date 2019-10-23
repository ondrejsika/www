import Article from "@app/ondrej-sika.cz/layouts/Article";

export default () => (
  <Article
    title="Příprava na Školení Dockeru"
    markdown={`
Díky za Váš zájem o školení Dockeru.

Na školení Dockeru potřebujete

- Vlastní notebook
- Nainstalovaný Docker - [návod na instalaci](/docker/instalace)
- Přístup na internet ideálně __bez korporátní proxy__, případne nastavenou proxy v Docker Desktop (na Mac stačí mít nastavenou systémovou proxy)

Pokud budete mít jakýkoliv problém nebo dotaz, neváhejte napsat na <ondrej@sika.io>
`}
  />
);
