import Article from "@app/ondrej-sika.cz/layouts/Article";

export default () => (
  <Article
    title="Návody"
    markdown={`
### Docker

- [Instalace](/docker/instalace)

### Kubernetes

- [Instalace](/kubernetes/instalace)

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
