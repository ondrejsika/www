import Course from "@app/ondrej-sika.cz/layouts/Course";

export default props => (
  <Course
    lang={props.site.lang}
    course_id="docker"
    show_sessions={true}
    course_title="Školení Docker"
    logo="/static/docker.svg"
    price_self_funded="11 999 CZK"
    price_company_funded="14 999 CZK"
    price_in_house="50 000 CZK"
    description={`
### K čemu se používá?
Docker je dnes technologie, která proces vývoje, testování a provozování softwaru velmi zjednodušuje. Provozujte cokoliv a kdekoliv. Už nečekejte na nastavení vašeho serveru nebo na aktualizaci nějaké knihovny. Mějte prostředí jako součást Vaší aplikace.
### Jak školení probíhá
Na školení si formou workshopu ukážeme vše jak s Dockerem pracovat, od vytvoření vlastního kontejneru, po jeho provozování ve Swarmu. Vše si prakticky vyzkoušíme a osaháme.
### Co Vás naučím
- Teoretický úvod do Dockeru
- Instalace Dockeru (pro ty kteří nenainstalovali doma)
- Práce s kontejnery
- Práce s obrazy
- Docker Compose – vícekontejnerové aplikace v Dockeru
- Deployment do Swarmu
- Ukázka deploymentu do Kubernetes
### Pro koho je školení určeno
Školení je primárně určeno lidem, kteří nemají s Dockerem žádné (nebo malé) zkušenosti. Školení nepočítá s předchozími znalostmi Dockeru. Je vhodné pro vývojáře nebo devops (server administrátory), kteří chtějí Docker využívat v praxi nebo chtějí mít přehled, co Docker řeší a kde by jej mohli použít.
`}
    col1={`
#### Předchozí znalosti
- Základy práce s Linuxem
- Základy práce v terminálu
`}
    col2={`
#### Technické požadavky
- Nainstalovaný Docker
- Přístup na internet (ideálně bez korporatni proxy, případně nastavenou proxy v Dockeru)
- [Priprava na skoleni Dockeru](/skoleni/docker/priprava-na-skoleni)
`}
    recommendations={["sit", "vse"]}
    twitter_recommendations={[
      "jan-novotny-docker",
      "tomas-ligenza-docker",
      "lubos-klokner-docker"
    ]}
  />
);
