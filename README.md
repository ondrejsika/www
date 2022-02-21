# Ondrej Sika's Webs

    2019 Ondrej Sika <ondrej@ondrejsika.com>
    https://github.com/ondrejsika/www
    https://gitlab.sikalabs.com/www/www

## Development Guide

Development is on Gitlab - <https://gitlab.sikalabs.com/www/www>

- [Issues](https://gitlab.sikalabs.com/www/www/issues)

### Run in Development Mode

1. Clone repository & select branch
2. `yarn install` - install dependencies
3. `yarn run dev-<site>` - where `<site>` is website domain, like ondrej-sika.cz. eg.: `yarn run dev-ondrej-sika.cz`

### Add New Site

You probably copy some course landing site (skoleni-docker.cz) or website (ondrej-sika.cz). You have to:

- update package name in `package.json` located in site directory `packages/<site>/package.json`
- add dev & build script into global `package.json`
- update just pages settings `packages/<site>/config.js` and headers (site name, title, ..) in first commit, content update in next one

## Training CRM Integration

### Update sessions.yml from Training CRM

```
make update-sessions-yml-from-training-crm
```

## Data Sources

### DevOps Live

Edit [packages/data/devopslive.yml](https://gitlab.sikalabs.com/www/www/-/blob/master/packages/data/devopslive.yml)

### ondrej-sika.cz/news

Edit [packages/ondrej-sika.cz/data/news.yml](https://gitlab.sikalabs.com/www/www/-/blob/master/packages/ondrej-sika.cz/data/news.yml)
