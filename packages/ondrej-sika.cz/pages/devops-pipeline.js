import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Open source DevOps pipeline"
    subheader="DevOps je sada nastroju a technik, diky kterym budete dorucovat novou fukncionalitu a zmeny k zakaznikum automaticky, rychleji a bez starostne. DevOps Vam umozni venovat vice casu vyvojem nez nasazovanim a provozovanim a vy se muzete zamerit na jadro vaseho businessu. Zavedenim DevOps take elimujete nutnost rucnich zasahu a usetrite naklady na tuto manualni praci a vyhnete se chybam."
    markdown={`
Ja pouzivam tyto nastroje jak ve sve tak v DevOps pipeline pro klienty.

- Git - Verzovaci system
- Gitlab - Collaborativni a DevOps Platforma
- Gitlab CI - Automatizace
- Ansible - Congig management
- Docker - Container Engine
- Kubernetes - Container Orchestrator
- Prometheus, Alert Manager, Grafana - Monitoring & Alerting
- Sentry - Error Tracking
- ELK / EFK - Log Management
- Rancher, RKE - On Premise Kubernetes
- Terraform - Infrastructure Management
- Public Cloud: AWS, DigitalOcean, Azure, GCP
- Private Cloud: Proxmox, OpenStack

## Git

Git je moderní verzovaci nástroj, který se stal de facto standardem mezi vývojáři. Používají jej na denní bázy jednotlivci, startupy i korporace. Git vám nabízí jednoduchou kolaboraci na projektu s více lidmi a práci na více částech současně aniž byste si zasahovali do rozdělaných věcí nebo je jinak narušovali.

## Gitlab

Gitlab je kolaborativni platforma pokryvajici velkou cast zivotniho cyklu DevOps. Primarne jde o server pro hostovani Git repozitaru a spolupraci nad kodem. Gitlab take obsahuje velmi dobre CI, Issues management nebo Wiki.

## Gitlab CI

Continuous Integration (zkráceně CI nebo CI/CD) je nástroj, který za Vás automatizuje rutinní úkoly jako je pouštění testů, kvality kódu a nebo nasazování. Umožní Vám rychleji začleňovat změny do masteru a rychleji nasazovat. Výhodou Gitlab CI je velmi dobrá podpora Dockeru, můžete velmi jednoduše skládat Docker images a nebo pouštět testy v kontejnerech.

## Ansible

Ansible je nástroj na hromadnou správu konfiguraci a nasazování. Vy deklarujete vysledný stav serveru a služeb a Ansible se postará o provedení. Nemusíte řešit v jakém stavu je server nebo aplikace ted, Ansible vám zařídí požadovaný výsedek (výhoda deklarativní syntaxe, napřiklad shell script je imperativní - proveď to a to ...). Veškerou konfiguraci máte verzovanou Gitem a nestane se vám, ze ztratíte přehled, kde máte co nasazené nebo ze vynecháte nějaký důležitý krok. Ansible vám pomůže nasazovat aplikace a spravovat servery rychleji a bezpečněji.

## Docker

Docker je nastroj, který proces vývoje, testování a provozování softwaru velmi zjednodušuje. Provozujte cokoliv a kdekoliv. Už nečekejte na nastavení vašeho serveru nebo na aktualizaci nějaké knihovny. Mějte prostředí jako součást vaší aplikace.

## Kubernetes

Kubernetes jsou dnes nejrozšířenější platformou na hostování Docker kontejnerů a jsou podporovány velkými hráči na trhu (Google, Amazon, Microsoft) skrz Cloud Native Computing Foundation. Kuberneres pro provoz používají všechny velikosti firem, od startupu po korporace.

## Prometheus, Alert Manager, Grafana

Prométheus je moderní monitoringový nástroj a metrics server. Umožňuje sbírat metrická data z vaší aplikace a většiny komponent Váši infrastruktury a nad těmito daty dělat grafy (v Grafaně) a alerty. Prométheus spadá pod CNCF, stejně jako Kubernetes.

## Sentry

Sentry je nastroj na agregovani chyb z aplikace. Podporuje vsechny mozne jazyky od Pythonu po JavaScript v browseru. Sentry dokaze ulozit kompletni stack trace, takze nasledne ladeni chyb je o hodne jednodussi.

## ELK / EFK

ELK nebo Elastic Stack je sada nastroju ElasticSearch, Logstash (nebo Fluentd) a Kibana, ktere agreguji logy na jedno misto a umoznuji nad nimi full text vyhledavani a alerting.

## Rancher, RKE

Rancher je nástroj na správu Kubernetes clusteru jak na vlastním hardware, tak i v cloudu (AWS, GCP, DigitalOcean). Rancher Vám umožní jednoduše vytvářet a spravovat Kuberneres clustery jak z webové administrace, tak pomocí Terraformu.

## Terraform

Terraform je nástroj, který se používá ke správě infrastruktury v cloudu (veřejném i privátním). Terraform Vám umožní spravovat infrastruktutru jako kód, to znamená verzovanou v Gitu, přidávání resources pomocí merge (pull) requestů a mnoho dalších výhod. Infrastrukturu můžete dále nasadit do testovacího prostředé přesně tak, jako je v produkci bez zbytečného úsilí.
`}
  />
);

export default Page;
