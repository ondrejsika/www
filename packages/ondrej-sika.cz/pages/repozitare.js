import Article from "@app/ondrej-sika.cz/layouts/Article";

export default () => (
  <Article
    title="Repozitáře"
    markdown={`
  Zde jsou ukazky repozitaru vseho mozneho na Githubu. Inspirujte se, pridaveje stars, issues a pull requesty :)

## Docker

- Traefik proxy s Let's Encrypt pro Docker - https://github.com/ondrejsika/traefik-le
- Docker Registry za Traefik proxy - https://github.com/ondrejsika/docker-registry-traefik
- Ukazky ke [Skoleni Dockeru](/skoleni/docker) - https://github.com/ondrejsika/docker-training


## Gitlab CI

- [Skoleni Gitlab CI](/skoleni/gitlab-ci) - https://github.com/ondrejsika/gitlab-ci-training
- Skripty na vytvoreni Gitlab Runneru v Dockeru (s Docker executorem) - https://github.com/ondrejsika/gitlab-ci-runner
- Image \`ondrejsika/ci\` - https://github.com/ondrejsika/ondrejsika-ci-docker

#### Examples

- Gitlab CI & Kubernetes - https://github.com/ondrejsika/gitlab-ci-example-kubernetes
- Gitlab CI & Docker Compose (+ Traefik) - https://github.com/ondrejsika/gitlab-ci-docker-compose-traefik--example

## Kubernetes

- [Skoleni Kubernetes](/skoleni/kubernetes) - https://github.com/ondrejsika/kubernetes-training
- Kubernetes Ingress pomoci Traefiku - https://github.com/ondrejsika/kubernetes-ingress-traefik
- Jednoduchy HELM balicek - https://github.com/ondrejsika/one-image-helm

[Vsechny repozitare tykajici se Kubernetes na mem Githubu](https://github.com/ondrejsika?utf8=%E2%9C%93&tab=repositories&q=kubernetes&type=&language=)


## Terraform

- Kubernetes na Digital Ocean - https://github.com/ondrejsika/terraform-do-kubernetes-example
- Gitlab na Digital Ocean - https://github.com/ondrejsika/terraform-demo-gitlab
- NFS na Digital Ocean - https://github.com/ondrejsika/terraform-demo-nfs
- Droplet na Digital Ocean - https://github.com/ondrejsika/terraform-do-droplet-example

#### Custom Providers

- Terraform Provider for Zeit - https://github.com/ondrejsika/terraform-provider-zeit

[Vsechny repozitare tykajici se Terraformu na mem Githubu](https://github.com/ondrejsika?utf8=%E2%9C%93&tab=repositories&q=terraform&type=&language=)

## React & Next.js

- Ukazkovy osobni web v Next.js a Reactu ([live](https://next-simple-website.ondrejsika.now.sh/)) - <https://github.com/ondrejsika/next-simple-website>
- Ukazkovy web naseho psa Nely (pro React workshop) ([live](https://jsemnela.ondrejsika.now.sh/)) - https://github.com/ondrejsika/jsemnela
- Skoleni Reactu (in progress) - https://github.com/ondrejsika/react-training
- Ukazkovy React & Next.js projekt ke skoleni - https://github.com/ondrejsika/react-example
- Repozitar mych webu (monorepo) v Next.js - https://github.com/ondrejsika/ondrejsikawebs

## Ansible

- Docker Compose deployment pomoci Ansible - https://github.com/ondrejsika/ansible-docker-compose--example

## Zeit

- Zeit API Mock server - https://github.com/ondrejsika/zeit-api-mock
- Go client for Zeit API - https://github.com/ondrejsika/zeit-go
`}
    after={
      <div className="alert alert-primary mt-5 text-center" role="alert">
        <h3>
          Chcete dostavat nove clanky do emailu? Prihlaste se k newsletteru!
        </h3>
        <a
          className="btn btn-large btn-primary m-3"
          href="https://sika.link/newsletter"
        >
          Prihlasit se k odberu
        </a>
      </div>
    }
  />
);
