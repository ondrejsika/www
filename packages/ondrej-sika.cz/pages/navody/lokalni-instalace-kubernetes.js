import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Lokalni Instalace Kubernetes"
    markdown={`
## Co budeme instalovat

Pro praci s Kubernetes z lokalniho prostredi (notebooku) budeme potrebovat

- **kubectl** - oficialni CLI pro Kubernetes
- **helm** - package manager pro Kubernetes
- **k9s** - CLI Dashboard

Dale se hodi utility

- **kubectx** - pro prepinani contextu
- **kubens** - pro prepinani namespace

Pokud zaroven chcete spusit lokalni Kubernetes cluster v Dockeru, budeme jeste potrebovat

- **k3d** - tool na spousteni [k3s](https://k3s.io) clusteru (k3s je distribuce Kubernetes) v Dockeru

**k3d** zaroven pouzivam pri [Skoleni Kubernetes](/skoleni/kubernetes)

## Instalace na Mac

**kubectl**

\`\`\`
brew install kubectl
\`\`\`

**helm**

\`\`\`
brew install helm
\`\`\`

**k9s**

\`\`\`
brew install k9s
\`\`\`

**kubectx a kubens**

\`\`\`
brew install kubectx
\`\`\`

**k3d**

\`\`\`
brew install k3d
\`\`\`

## Instalace na Linux

**kubectl**

\`\`\`
curl -L https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl -o /tmp/kubectl && chmod +x /tmp/kubectl && sudo mv /tmp/kubectl /usr/local/bin/kubectl
\`\`\`

**helm**

\`\`\`
curl https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3 | bash
\`\`\`

**k9s**

\`\`\`
curl -L https://github.com/derailed/k9s/releases/latest/download/k9s_Linux_amd64.tar.gz -o /tmp/k9s.tar.gz && tar -xzf /tmp/k9s.tar.gz -C /tmp && chmod +x /tmp/k9s && sudo mv /tmp/k9s /usr/local/bin/k9s
\`\`\`

**kubectx a kubens**

\`\`\`
sudo git clone https://github.com/ahmetb/kubectx /opt/kubectx
sudo ln -s /opt/kubectx/kubectx /usr/local/bin/kubectx
sudo ln -s /opt/kubectx/kubens /usr/local/bin/kubens
\`\`\`

**k3d**

\`\`\`
curl -s https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash
\`\`\`

## Instalace na Windows

Toto je instalace primo do Windows, pokud pouzivate **WSL**, instalujte stadartne jako na Linuxu

**kubectl**

\`\`\`
winget install -e --id Kubernetes.kubectl
\`\`\`

**helm**

\`\`\`
winget install -e --id Helm.Helm
\`\`\`

**k9s**

\`\`\`
winget install -e --id derailed.k9s
\`\`\`

**kubectx** a **kubens**

\`\`\`
winget install -e --id ahmetb.kubectx
winget install -e --id ahmetb.kubens
\`\`\`

**k3d**

\`\`\`
winget install -e --id k3d.k3d
\`\`\`

Pokud nemate Docker, muzete ho nainstalovat pomoci

\`\`\`
winget install -e --id Docker.DockerDesktop
\`\`\`

## Overeni instalace

Po instalaci muzete overit, ze vse funguje:

\`\`\`
kubectl version --client
helm version
k9s version
kubectx --version
kubens --version
k3d version
\`\`\`

`}
  />
);

export default Page;
