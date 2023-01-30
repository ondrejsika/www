import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Repozitáře"
    markdown={`
  Zde jsou ukazky repozitaru vseho mozneho na Githubu. Inspirujte se, pridaveje stars, issues a pull requesty :)

## Docker

- Traefik v2 proxy s Let's Encrypt pro Docker - https://github.com/ondrejsika/ondrejsika-docker-traefik
- Traefik v1 proxy s Let's Encrypt pro Docker - https://github.com/ondrejsika/traefik-le
- Docker Registry za Traefik proxy - https://github.com/ondrejsika/docker-registry-traefik
- HA Docker Cluster pomocí Swarmu a Cephu - https://github.com/ondrejsika/ha-docker-cluster-with-swarm-and-ceph


## Gitlab CI

- Skripty na vytvoreni Gitlab Runneru v Dockeru (s Docker executorem) - https://github.com/sikalabs/sikalabs-gitlab-runner
- Image \`sikalabs/ci\` - https://github.com/sikalabs/sikalabs-container-images/tree/master/ci

#### Examples

- Gitlab CI & Kubernetes - https://github.com/ondrejsika/gitlab-ci-example-kubernetes
- Gitlab CI & Docker Compose (+ Traefik) - https://github.com/ondrejsika/gitlab-ci-docker-compose-traefik--example

## Kubernetes

- Sikalabs Helm Charts - https://github.com/sikalabs/charts
- Jak nainstalovat Kubernetes na bare metal - https://github.com/ondrejsika/bare-metal-kubernetes
- Jednoduchy HELM balicek (sikalabs/hello-world) - https://github.com/sikalabs/charts/tree/master/charts/hello-world

[Vsechny repozitare tykajici se Kubernetes na mem Githubu](https://github.com/ondrejsika?utf8=%E2%9C%93&tab=repositories&q=kubernetes&type=&language=)


## Terraform

- Teraform Examples (sem postupne migruju vsechny ukazky) - https://github.com/ondrejsika/terraform-examples

#### Ukazky Infrastruktury

- Kubernetes na DigitalOcean - https://github.com/ondrejsika/terraform-do-kubernetes-example
- VMs & LB na DigitalOcean pro Bare Metal Kubernetes - https://github.com/ondrejsika/terraform-do-bare-metal-kubernetes-infra-example
- Gitlab na DigitalOcean - https://github.com/ondrejsika/terraform-demo-gitlab
- NFS na DigitalOcean - https://github.com/ondrejsika/terraform-demo-nfs
- Droplet na DigitalOcean - https://github.com/ondrejsika/terraform-do-droplet-example
- Jedna EC2 na AWS - https://github.com/ondrejsika/terraform-aws-ec2-example
- Vice EC2 na AWS - https://github.com/ondrejsika/terraform-aws-ec2-many-example
- Kubernetes na Azure - https://github.com/ondrejsika/example-azure-k8s
- Example infrastructure for Rook Ceph cluster - https://github.com/ondrejsika/terraform-do-rook-ceph-example

#### Custom Providers

- Terraform Provider for Vercel - https://github.com/ondrejsika/terraform-provider-vercel
- Extra Terraform Provider for Linode - https://github.com/ondrejsika/terraform-provider-linodex

#### My Modules

- NFS server on DigitalOcean - https://github.com/ondrejsika/terraform-module-do-nfs
- MySQL DB with user - https://github.com/ondrejsika/terraform-module-mysql-db-with-user
- Azure Kubernetes - https://github.com/ondrejsika/terraform-module-azure-k8s

[Vsechny repozitare tykajici se Terraformu na mem Githubu](https://github.com/ondrejsika?utf8=%E2%9C%93&tab=repositories&q=terraform&type=&language=)

## ArgoCD

- ArgoCD Apps (nasazene) - https://github.com/ondrejsika/argocd-apps-public

## React & Next.js

- Ukazkovy osobni web v Next.js a Reactu ([live](https://next-simple-website.ondrejsika.now.sh/)) - <https://github.com/ondrejsika/next-simple-website>
- Ukazkovy web naseho psa Nely (pro React workshop) ([live](https://jsemnela.ondrejsika.now.sh/)) - https://github.com/ondrejsika/jsemnela
- Ukazkovy React & Next.js projekt ke skoleni - https://github.com/ondrejsika/react-example
- Repozitar mych webu (monorepo) v Next.js - https://github.com/ondrejsika/www

## Ansible

- Ukazka Ansible konfigurace v Monorepu - https://github.com/ondrejsika/example-ansible-monorepo
- Docker Compose deployment pomocí Ansible - https://github.com/ondrejsika/ansible-docker-compose--example

## Vercel

- Terraform Provider for Vercel - https://github.com/ondrejsika/terraform-provider-vercel
- Vercel API Mock server - https://github.com/ondrejsika/vercel-api-mock
- Go client for Vercel API - https://github.com/ondrejsika/vercel-go

## Ceph

- HA Docker Cluster pomocí Swarmu a Cephu - https://github.com/ondrejsika/ha-docker-cluster-with-swarm-and-ceph

## AWS

- Jedna EC2 na AWS - https://github.com/ondrejsika/terraform-aws-ec2-example
- Vice EC2 na AWS - https://github.com/ondrejsika/terraform-aws-ec2-many-example

## Azure

- Kubernetes na Azure - https://github.com/ondrejsika/example-azure-k8s
- Azure Kubernetes Terraform Module- https://github.com/ondrejsika/terraform-module-azure-k8s
`}
  />
);

export default Page;
