import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

export const Manuals = () => (
  <Article
    title="Návody"
    markdown={`

### Docker

- [Instalace](/docker/instalace)
- [Docker s TLS](/docker/docker-s-tls)
- [Příprava na školení Dockeru](/skoleni/docker/priprava-na-skoleni) - více informací o školení [zde](/skoleni/docker)

Pokud Vás zajímá Docker, podívejte se na mé [Školení Dockeru](/skoleni/docker)

### Kubernetes

- [Instalace](/kubernetes/instalace)
- [Přidání Kubernetes clusteru do Gitlabu](/kubernetes/pridani-kubernetes-clusteru-do-gitlabu)
- [Příprava na školení Kubernetes](/skoleni/kubernetes/priprava-na-skoleni) - více informací o školení [zde](/skoleni/kubernetes)
- [Novinky v Helm 3](/blog/helm3) (blog post)
- [Persistentní storage pomocí Cephu](/blog/ceph-persistent-volumes-v-kubernetes-pomoci-rook/) (blog post)

Pokud Vás zajímá Kubernetes, podívejte se na mé [Školení Kubernetes](/skoleni/kubernetes)

### Rancher, nástroj na správu Kubernetes clusterů

- [Co je Rancher](/rancher)
- [Instalace Rancheru](/rancher/instalace-rancheru)

<!---
- [Instalace Kubernetes clusteru pomocí Rancheru na vlastním hardware](/rancher/instalace-kubernetes-clusteru-pomoci-rancheru-na-vlastnim-hardware)
--->

### Terraform

- [Co je Terraform](/terraform)
- [Instalace Terraformu](/terraform/instalace)
- [Správa Cloudflare DNS pomocí Terraformu](/terraform/sprava-cloudflare-dns-pomoci-terraformu)
Pokud Vás zajímá Terraform, podívejte se na mé [Školení Terraformu](/skoleni/terraform)

### Git

- [Instalace](/git/instalace)
- [Rebase](/git/rebase)
- [Hooks](/git/hooks)

Pokud Vás zajímá Git, podívejte se na mé [Školení Gitu](/skoleni/git)

### Ostatní

- [Wireguard VPN, náhrada OpenVPN a IPSec](/blog/wireguard/) (blog post)
- [Brew (Homebrew)](/navody/brew) - Package manager pro Mac
- [Chocolatey](/navody/chocolatey) - Package manager pro Windows
`}
  />
);
export default Manuals;
