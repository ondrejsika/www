import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Příprava na Školení Promethea"
    markdown={`
Díky za Váš zájem o školení Promethea. Školení pokrývá práci s Promethem, Alert Managerem a Grafanou.

Na školení Promethea potřebujete:

- Vlastní notebook
- Docker nebo nainstalovaný Prometheus, Alert Manager, Push Gateway a Grafanau
- Případně můžete pracovat v Cloudu přes SSH, ale dopodručuji lokální instalaci (Docker nebo nativní aplikace)

Binárky (Linux, Mac, Windows) pro Prometheus, Alert Manager a Push Gateway naleznete zde: <https://prometheus.io/download/>

Grafanu nainstalujete podle návodu zde: <https://grafana.com/docs/grafana/latest/installation/>

Pokud budete mít jakýkoliv problém nebo dotaz, neváhejte napsat na <ondrej@sika.io>
`}
  />
);

export default Page;
