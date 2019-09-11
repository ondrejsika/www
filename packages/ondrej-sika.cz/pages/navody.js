import Article from "@app/ondrej-sika.cz/layouts/Article";

export default () => (
  <Article
    title="Návody"
    markdown={`
### Docker

- [Instalace](/docker/instalace)
- [Docker s TLS](/docker/docker-s-tls)
- [Priprava na skoleni Dockeru](/skoleni/docker/priprava-na-skoleni) - vice informaci o skoleni [zde](/skoleni/docker)

### Kubernetes

- [Instalace](/kubernetes/instalace)
- [Priprava na skoleni Kubernetes](/skoleni/kubernetes/priprava-na-skoleni) - vice informaci o skoleni [zde](/skoleni/kubernetes)

### Git

- [Instalace](/git/instalace)
- [Rebase](/git/rebase)
- [Hooks](/git/hooks)

### Ostatní

- [Brew (Homebrew)](/navody/brew) - Package manager pro Mac
- [Chocolatey](/navody/chocolatey) - Package manager pro Windows
`}
  />
);
