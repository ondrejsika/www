import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

export const Index = () => (
  <>
    <Article
      title="Jsem v kurzu"
      hideNewsletter={false}
      markdown={`
## Balicky skoleni Jsem v Kurzu

Pripravil jsem balicky kurzu, na ktere muzete vyuzit dotaci **Jsem v kurzu**

### Gitlab CI a Docker (3 dny)

Skoleni je kombinaci bych skoleni Gitlab CI a Dockeru. Na skoleni si ukazeme jak zdockerizovat aplikaci, pripravit ji pro lokalni vyvoj v Dockeru ale i pro produkcni pouziti. Zaroven se naucime jak automatizovat vytvareni Docker images pomoci Gitla CI a dokonce i automaticky aplikace nasazovat.

Skoleni je urceno pro kazdeho, kdo chce zacit s Dockerem, automatizaci pomoci Gitlab CI a DevOps obecne.

Cena: Cena skoleni je **29 700 CZK** (pri uplatneni dotace zaplatite ***xxx CZK***)
<br/>Termin:
<br/>[Mam zajem o kurz Gitlab CI a Docker](mailto:ondrej@sika.io?subject=Mam%20zajem%20o%20Gitlab%20CI%20a%20Docker%20jsemvkurzu)

### Docker a Kubernetes (3 dny)

Toto skoleni je pro vsechny, kteri se chteji od zakladu naucit nasazovat aplikace do Kubernetes.

Skoleni je postavene primarne na mem kurzu Kubernetes, je k nemu ovsem jeden den na Docker, kde si ukazeme jak pripravit vlastni Docker image abychom mohli nasi aplikaci do Kubernetes nasadit.

### Kubernetes, Helm a ArgoCD (4 dny)

Skoleni je kombinace mych skoleni Kubernetes a ArgoCD plus jeste nevydane skoleni Helmu.

Na skoleni se naucite od zacatku ovladat Kubetnetes, jak vse funguje a jak do nej nasazovat pomoci GitOps nastrojem ArgoCD.

Toto skoleni je urcene pro vsechny, kdo chteji produkcne nasazovat a provozovat aplikace v Kubernetes.

Cena: **39 600 CZK** (pri uplatneni dotace zaplatite **xxx CZK**)
<br/>Termin:

### Kubernetes Up and Running (3 dny)

Individualni skoleni pro firmy, kde se naucime postavit Kubernetes cluster, pripravit aplikaci pro provoz v Kubernetes a nasadime ji. To vsechno pomoci Infrastructure as Code (IaC), GitOps a CI pipelines.

Cena:
<br/>Termin:

### Monitoring pomoci Promethea, Lokiho a Grafany (3 dny)

Cilem kurzu je umet nainstalovat a spravovat moderni monitoring stack / observability platformu postavenou na Prometheu, Alert Manageru, Lokim a Grafane.

Prometheus sbira metricke data z infrastruktury (Kubernetes, VMs, DBs, ..) a pomoci Alert Manageru posila alerty emailem, pres Page Duty nebo do Slacku nebo Teamsu. Loki pak slouzi ke sberu logu a vse je vizualizovano v Grafane. Vsechny tyto komponenty mohou byt konfigurovany pomoci moderniho GitOps pristupu.

Cena: Cena skoleni je **29 700 CZK** (pri uplatneni dotace zaplatite ***xxx CZK***)
<br/>Termin:

### Kubernetes Observability (3 dny)

Tento kurz je velmi podobny kurzu "Monitoring pomoci Promethea, Lokiho a Grafany" s tim rozdilem, ze se primarne zamerime na Kubernetes. Cely stack nasadime do Kubernetes a monitorovat budeme Kubernetes infrastrukturu vcetne aplikaci bezicich v clusteru.

Cena: Cena skoleni je **29 700 CZK** (pri uplatneni dotace zaplatite ***xxx CZK***)
<br/>Termin:

## Co je Jsem v kurzu?

TODO: Johanka doplni

`}
    />
  </>
);

export default Index;
