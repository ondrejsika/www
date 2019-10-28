import Course from "@app/ondrej-sika.cz/layouts/Course";

export default props => (
  <Course
    lang={props.site.lang}
    course_id="gitlab-ci"
    show_sessions={true}
    course_title="Školení Gitlab CI"
    logo="/static/gitlab-ci.svg"
    price_self_funded="5 999 CZK"
    price_company_funded="7 999 CZK"
    price_in_house="25 000 CZK"
    description={`
### K čemu se používá ?
Continuous Integration (zkráceně CI nebo CI/CD) je nástroj, který za Vás automatizuje rutijni úkoly jako je pouštění testů, kvality kódu a nebo nasazování. Umožní vám rychleji začleňovat změny do masteru a rychleji nasazovat. Výhodou Gitlab CI je velmi dobrá podpora Dockeru, můžete velmi jednoduše skládat Docker images a nebo pouštět testy v kontejnerech.
### Jak školení probíhá
Na školení formou workshopu si vysvětlíme proč je dobré CI používat, ukážeme si možnosti Gitlab CI a vyzkoušíme si napsat CI skript pro ukázkový projekt. Výsledkem bude CI skript pro jednoduchý projekt obsahující joby od buildu aplikace, přez testy až po deployment.
### Co Vás naučím
- Obecný úvod do CI
- Úvod do Gitlab CI
- Instalace Gitlab CI Runneru
- Práce s CI joby
- Tvorba CI pipelines
- Automatické nasazování
- Docker a CI
### Pro koho je školení určeno
Školení je primárně určeno vývojářům kteří používají Gitlab a chtějí začít používat Gitlab CI. Zároveň právě Gitlab CI může být důvod přechodu na Gitlab. Školení je také vhodné pro DevOps, kteří si chtějí ulehčit práci s automatizací nasazování.`}
    col1={`
#### Předchozí znalosti
- Základy práce s Linuxem
- Základy práce v terminálu
- Základní znalost Gitu výhodou - [Školení Git](/skoleni/git)
`}
    col2={`
#### Technické požadavky
- Přístup na internet (ideálně bez korporatni proxy, případně nastavenou proxy v Dockeru)
`}
    recommendations={["CMS", "vse"]}
  />
);
