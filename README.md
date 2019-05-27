# Ondrej Sika's Webs

    2019 Ondrej Sika <ondrej@ondrejsika.com>

## Development Guide

### Run in Development Mode

1. Clone repository & select branch
2. `yarn install` - install dependencies
3. `yarn run dev-<site>` - where `<site>` is website domain, like ondrej-sika.cz. eg.: `yarn run dev-ondrej-sika.cz`

### Locations of Sites Sources

UK

- [ansible-training.uk](packages/ansible-training.uk/pages/index.js)
- [git-training.uk](packages/git-training.uk/pages/index.js)
- [gitlab-training.uk](packages/gitlab-training.uk/pages/index.js)
- [docker-training.uk](packages/docker-training.uk/pages/index.js)
- [kubernetes-training.uk](packages/kubernetes-training.uk/pages/index.js)

DE

- [sika-kraml.de](packages/sika-kraml.de/pages)
- [ansible-schulung.de](packages/ansible-schulung.de/pages/index.js)
- [dockerschulung.de](packages/dockerschulung.de/pages/index.js)
- [kubernetes-schulung.de](packages/kubernetes-schulung.de/pages/index.js)

CZ

- [ondrej-sika.cz](packages/ondrej-sika.cz/pages)
- [ansible-skoleni.cz](packages/ansible-skoleni.cz/pages/index.js)
- [skoleni-git.cz](packages/skoleni-git.cz/pages/index.js)
- [gitlab-ci.cz](packages/gitlab-ci.cz/pages/index.js)
- [skoleni-docker.cz](packages/skoleni-docker.cz/pages/index.js)
- [skoleni-kubernetes.cz](packages/skoleni-kubernetes.cz/pages/index.js)


### Add New Site

You probably copy some course landing site (skoleni-docker.cz) or website (ondrej-sika.cz). You have to:

- update package name in `package.json` located in site directory `packages/<site>/package.json`
- add dev & build script into global `package.json`
- add site to `sites.txt`
- update just pages settings `packages/<site>/config.js` and headers (site name, title, ..) in first commit, content update in next one
