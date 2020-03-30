import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

export const Manuals = () => (
  <Article
    title="Návody"
    markdown={`
### Docker

- [Instalace](/docker/instalace)
- [Docker s TLS](/docker/docker-s-tls)
- [Priprava na skoleni Dockeru](/skoleni/docker/priprava-na-skoleni) - vice informaci o skoleni [zde](/skoleni/docker)

Pokud Vas zajima Docker, podivejte se na me [Skoleni Dockeru](/skoleni/docker)

### Kubernetes

- [Instalace](/kubernetes/instalace)
- [Pridani Kubernetes clusteru do Gitlabu](/kubernetes/pridani-kubernetes-clusteru-do-gitlabu)
- [Priprava na skoleni Kubernetes](/skoleni/kubernetes/priprava-na-skoleni) - vice informaci o skoleni [zde](/skoleni/kubernetes)
- [Novinky v Helm 3](/blog/helm3) (blog post)

Pokud Vas zajima Kubernetes, podivejte se na me [Skoleni Kubernetes](/skoleni/kubernetes)

### Rancher, nástroj na správu Kubernetes clusterů

- [Co je Rancher](/rancher)
- [Instalace Rancheru](/rancher/instalace-rancheru)

<!---
- [Instalace Kubernetes clusteru pomocí Rancheru na vlastním hardware](/rancher/instalace-kubernetes-clusteru-pomoci-rancheru-na-vlastnim-hardware)
--->

### Terraform

- [Co je Terraform](/terraform)
- [Instalace Terraformu](/terraform/instalace)
- [Sprava Cloudflare DNS pomoci Terraformu](/terraform/sprava-cloudflare-dns-pomoci-terraformu)


Pokud Vas zajima Terraform, podivejte se na me [Skoleni Terraformu](/skoleni/terraform)

### Git

- [Instalace](/git/instalace)
- [Rebase](/git/rebase)
- [Hooks](/git/hooks)

Pokud Vas zajima Git, podivejte se na me [Skoleni Gitu](/skoleni/git)

### Ostatní

- [Brew (Homebrew)](/navody/brew) - Package manager pro Mac
- [Chocolatey](/navody/chocolatey) - Package manager pro Windows
`}
  />
);
export default Manuals;
