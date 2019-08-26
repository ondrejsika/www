# Ondrej Sika's Webs

    2019 Ondrej Sika <ondrej@ondrejsika.com>

## Development Guide

### Run in Development Mode

1. Clone repository & select branch
2. `yarn install` - install dependencies
3. `yarn run dev-<site>` - where `<site>` is website domain, like ondrej-sika.cz. eg.: `yarn run dev-ondrej-sika.cz`

### Locations of Sites Sources

Those links also works in VS Code

#### UK

- [ansible-training.uk](packages/ansible-training.uk/pages/index.js) ([live](https://ansible-training.uk))
- [git-training.uk](packages/git-training.uk/pages/index.js) ([live](https://git-training.uk))
- [gitlab-training.uk](packages/gitlab-training.uk/pages/index.js) ([live](https://gitlab-training.uk))
- [docker-training.uk](packages/docker-training.uk/pages/index.js) ([live](https://docker-training.uk))
- [kubernetes-training.uk](packages/kubernetes-training.uk/pages/index.js) ([live](https://kuberbnetes-training.uk))

#### DE

- [sika-kraml.de](packages/sika-kraml.de/pages) ([live](https://sika-kraml.de))
- [ansible-schulung.de](packages/ansible-schulung.de/pages/index.js) ([live](https://ansible-schulung.de))
- [dockerschulung.de](packages/dockerschulung.de/pages/index.js) ([live](https://dockerschulung.de))
- [kubernetes-schulung.de](packages/kubernetes-schulung.de/pages/index.js) ([live](https://kubernetes-schulung.de))
- [docker-training.de](packages/docker-training.de/pages/index.js) ([live](https://docker-training.de))


#### CZ

- [ondrej-sika.cz](packages/ondrej-sika.cz/pages) ([live](https://ondrej-sika.cz))
- [ansible-skoleni.cz](packages/ansible-skoleni.cz/pages/index.js) ([live](https://ansible-skoleni.cz))
- [skoleni-git.cz](packages/skoleni-git.cz/pages/index.js) ([live](https://skoleni-git.cz))
- [gitlab-ci.cz](packages/gitlab-ci.cz/pages/index.js) ([live](https://gitlab-ci.cz))
- [skoleni-docker.cz](packages/skoleni-docker.cz/pages/index.js) ([live](https://skoleni-docker.cz))
- [skoleni-kubernetes.cz](packages/skoleni-kubernetes.cz/pages/index.js) ([live](https://skoleni-kubernetes.cz))
- [sika-kaplan.com](packages/sika-kaplan.com/pages) ([live](https://sika-kaplan.com))

#### SK

- [skolenie-ansible.sk](packages/skolenie-ansible.sk/pages/index.js) ([live](https://skolenie-ansible.sk))
- [skolenie-git.sk](packages/skolenie-git.sk/pages/index.js) ([live](https://skolenie-git.sk))
- [skolenie-gitlab.sk](packages/skolenie-gitlab.sk/pages/index.js) ([live](https://skolenie-gitlab.sk))
- [skolenie-gitlab.sk](packages/skolenie-docker.sk/pages/index.js) ([live](https://skolenie-gitlab.sk))
- [skolenie.kubernetes.sk](packages/skolenie.kubernetes.sk/pages/index.js) ([live](https://skolenie.kubernetes.sk))

#### SE

- [ansible-utbildning.se](packages/ansible-utbildning.se/pages/index.js) ([live](https://ansible-utbildning.se))
- [git-utbildning.se](packages/git-utbildning.se/pages/index.js) ([live](https://git-utbildning.se))
- [git-utbildning.se](packages/gitlab-utbildning.se/pages/index.js) ([live](https://git-utbildning.se))
- [docker-utbildning.se](packages/docker-utbildning.se/pages/index.js) ([live](https://docker-utbildning.se))
- [kubernetes-utbildning.se](packages/kubernetes-utbildning.se/pages/index.js) ([live](https://kubernetes-utbildning.se))

#### CH

- [docker-training.ch](packages/docker-training.ch/pages/index.js) ([live](https://docker-training.ch))

#### AT

- [docker-training.at](packages/docker-training.at/pages/index.js) ([live](https://docker-training.at))

#### NL

- [docker-training.nl](packages/docker-training.nl/pages/index.js) ([live](https://docker-training.nl))
- [git-training.nl](packages/git-training.nl/pages/index.js) ([live](https://git-training.nl))

#### IS
- [training.kubernetes.is](packages/training.kubernetes.is/pages/index.js) ([live](https://training.kubernetes.is))

#### LU
- [training.kubernetes.lu](packages/training.kubernetes.lu/pages/index.js) ([live](https://training.kubernetes.lu))

### Add New Site

You probably copy some course landing site (skoleni-docker.cz) or website (ondrej-sika.cz). You have to:

- update package name in `package.json` located in site directory `packages/<site>/package.json`
- add dev & build script into global `package.json`
- add site to `sites.txt`
- update just pages settings `packages/<site>/config.js` and headers (site name, title, ..) in first commit, content update in next one
- add site to Locations of Sites Sources in README
- Regenerate Gitlab CI Yaml using `./generate-gitlab-ci.sh`
