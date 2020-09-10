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
- [Docker vs Podman: V čem se liší](/blog/docker-vs-podman-v-cem-se-lisi) (blog post)
- [Podman: "Docker" pod non-root uzivatelem](/blog/podman-docker-pod-non-root-uzivatelem) (blog post)

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
- [Instalace Rancher CLI a RKE](/rancher/instalace-rancher-cli-a-rke)

<!---
- [Instalace Kubernetes clusteru pomocí Rancheru na vlastním hardware](/rancher/instalace-kubernetes-clusteru-pomoci-rancheru-na-vlastnim-hardware)
--->

### Terraform

- [Co je Terraform](/terraform)
- [Instalace Terraformu](/terraform/instalace)
- [Správa Cloudflare DNS pomocí Terraformu](/terraform/sprava-cloudflare-dns-pomoci-terraformu)
- [Správa Gitlabu pomocí Terraformu](/blog/sprava-gitlabu-pomoci-terraformu/)

Pokud Vás zajímá Terraform, podívejte se na mé [Školení Terraformu](/skoleni/terraform) (blog post)

### Git

- [Instalace](/git/instalace)
- [Rebase](/git/rebase)
- [Hooks](/git/hooks)
- [Správa Gitlabu pomocí Terraformu](/blog/sprava-gitlabu-pomoci-terraformu/) (blog post)

Pokud Vás zajímá Git, podívejte se na mé [Školení Gitu](/skoleni/git)

### Ostatní

- [Wireguard VPN, náhrada OpenVPN a IPSec](/blog/wireguard/) (blog post)
- [Brew (Homebrew)](/navody/brew) - Package manager pro Mac
- [Chocolatey](/navody/chocolatey) - Package manager pro Windows
`}
  />
);
export default Manuals;
