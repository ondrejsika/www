import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Repozitáře"
    markdown={`
  Zde jsou ukazky repozitaru vseho mozneho na Githubu. Inspirujte se, pridaveje stars, issues a pull requesty :)

## Docker

- Traefik proxy s Let's Encrypt pro Docker - https://github.com/ondrejsika/traefik-le
- Docker Registry za Traefik proxy - https://github.com/ondrejsika/docker-registry-traefik
- Ukazky ke [Skoleni Dockeru](/skoleni/docker) - https://github.com/ondrejsika/docker-training
- HA Docker Cluster pomocí Swarmu a Cephu - https://github.com/ondrejsika/ha-docker-cluster-with-swarm-and-ceph


## Gitlab CI

- [Skoleni Gitlab CI](/skoleni/gitlab-ci) - https://github.com/ondrejsika/gitlab-ci-training
- Skripty na vytvoreni Gitlab Runneru v Dockeru (s Docker executorem) - https://github.com/ondrejsika/gitlab-ci-runner
- Image \`ondrejsika/ci\` - https://github.com/ondrejsika/ondrejsika-ci-docker

#### Examples

- Gitlab CI & Kubernetes - https://github.com/ondrejsika/gitlab-ci-example-kubernetes
- Gitlab CI & Docker Compose (+ Traefik) - https://github.com/ondrejsika/gitlab-ci-docker-compose-traefik--example

## Kubernetes

- [Skoleni Kubernetes](/skoleni/kubernetes) - https://github.com/ondrejsika/kubernetes-training
- Jak nainstalovat Kubernetes na bare metal - https://github.com/ondrejsika/bare-metal-kubernetes
- Kubernetes Ingress pomocí Traefiku - https://github.com/ondrejsika/kubernetes-ingress-traefik
- Jednoduchy HELM balicek - https://github.com/ondrejsika/one-image-helm

[Vsechny repozitare tykajici se Kubernetes na mem Githubu](https://github.com/ondrejsika?utf8=%E2%9C%93&tab=repositories&q=kubernetes&type=&language=)


## Terraform

#### Ukazky Infrastruktury

- Kubernetes na DigitalOcean - https://github.com/ondrejsika/terraform-do-kubernetes-example
- VMs & LB na DigitalOcean pro Bare Metal Kubernetes - https://github.com/ondrejsika/terraform-do-bare-metal-kubernetes-infra-example
- Gitlab na DigitalOcean - https://github.com/ondrejsika/terraform-demo-gitlab
- NFS na DigitalOcean - https://github.com/ondrejsika/terraform-demo-nfs
- Droplet na DigitalOcean - https://github.com/ondrejsika/terraform-do-droplet-example
- Jedna EC2 na AWS - https://github.com/ondrejsika/terraform-aws-ec2-example
- Vice EC2 na AWS - https://github.com/ondrejsika/terraform-aws-ec2-many-example
- Example infrastructure for Rook Ceph cluster - https://github.com/ondrejsika/terraform-do-rook-ceph-example

#### Custom Providers

- Terraform Provider for Vercel - https://github.com/ondrejsika/terraform-provider-vercel
- Extra Terraform Provider for Linode - https://github.com/ondrejsika/terraform-provider-linodex

#### My Modules

- NFS server on DigitalOcean - https://github.com/ondrejsika/terraform-module-do-nfs
- MySQL DB with user - https://github.com/ondrejsika/terraform-module-mysql-db-with-user

[Vsechny repozitare tykajici se Terraformu na mem Githubu](https://github.com/ondrejsika?utf8=%E2%9C%93&tab=repositories&q=terraform&type=&language=)

## React & Next.js

- Ukazkovy osobni web v Next.js a Reactu ([live](https://next-simple-website.ondrejsika.now.sh/)) - <https://github.com/ondrejsika/next-simple-website>
- Ukazkovy web naseho psa Nely (pro React workshop) ([live](https://jsemnela.ondrejsika.now.sh/)) - https://github.com/ondrejsika/jsemnela
- Skoleni Reactu (in progress) - https://github.com/ondrejsika/react-training
- Ukazkovy React & Next.js projekt ke skoleni - https://github.com/ondrejsika/react-example
- Repozitar mych webu (monorepo) v Next.js - https://github.com/ondrejsika/ondrejsikawebs

## Ansible

- [Skoleni Ansible](/skoleni/ansible) - https://github.com/ondrejsika/ansible-training
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
`}
  />
);

export default Page;
