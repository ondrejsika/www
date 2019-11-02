import Course from "@app/ondrej-sika.cz/layouts/Course";

export default props => (
  <Course
    lang={props.site.lang}
    course_id="kubernetes"
    show_sessions={true}
    course_title="Školení Kubernetes"
    logo="/static/kubernetes.png"
    price_self_funded="11 999 CZK"
    price_company_funded="14 999 CZK"
    price_in_house="50 000 CZK"
    description={`
### Co je to Kubernetes
Kubernetes jsou dnes nejrozšířenější platformou na hostování Docker kontejnerů a jsou podporovány velkými hráči na trhu (Google, Amazon, Microsoft) skrz Cloud Native Computing Foundation. Kuberneres pro provoz používají všechny velikosti firem, od startupu po korporace.
### Jak školení probíhá
Školeni probíhá formou workshopů, vše si prakticky vyzkoušíme a osaháme. Ukážeme si jak spustit Kuberneres lokálně (pro vývoj) a na cloudové platformě Digital Ocean.
### Co Vás naučím
- Teoretický úvod do Kubernetes
- Instalace Minikube a kubectl (pro ty kteří nenainstalovali doma)
- Popis Kubernetes komponent
- Deployment do Kubernetes
- Práce s právy v Kubernetes clusteru
- Teoretický úvod do Helm balíčku
- Instalace / Deployment pomocí Helmu
- Psaní vlastního Helm balíčku
#### Pro koho je školení určeno
Školení je určeno pro lidi (vývojáři a devops), kteří mají zájem provozovat své Docker aplikace v Kuberneres.`}
    col1={`
#### Předchozí znalosti
- Základy práce s Linuxemm
- Základy práce v terminálu
- Základy práce s Dockerem
`}
    col2={`
#### Technické požadavky
- Nainstalovaný Kubernetes
- Přístup na internet - ideálně bez korporátní proxy, případně nastavenou proxy v prohlížeči
- [Priprava na skoleni Kubernetes](/skoleni/kubernetes/priprava-na-skoleni)
`}
    recommendations={["oxy", "oxyCTO"]}
    twitter_recommendations={[
      "petr-todorov-kubernetes",
      "pavel-mattivi-kubernetes"
    ]}
  />
);
