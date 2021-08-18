import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Instalace Kubernetes pro lokalni vyvoj"
    ad="kubernetes"
    markdown={`
Aby jste mohli pouzivat kubernetes lokalne, musite mit nainstalovane tyto nastroje:

- __kubectl__ - Kubernetes client [oficialni navod na instalaci](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- __helm__ - Kubernetes package manager (neni nutny) [oficialni navod na instalaci](https://github.com/helm/helm/blob/master/docs/install.md)
- __minikube__ - Nastoj na vytvareni lokalnich Kubernernes clusteru ve virtualnich strojich [oficialni navod na instalaci](https://kubernetes.io/docs/tasks/tools/install-minikube/#install-minikube)

## Mac

### Kubectl on Mac

\`\`\`
brew install kubectl
\`\`\`

Pokud nebude kubectl prikaz pracovat spravne, je mozne ze mate starou binarku z instalace Dockeru, timto chybu opravite

\`\`\`
rm /usr/local/bin/kubectl
brew link --overwrite kubectl
\`\`\`

### Helm on Mac

\`\`\`
brew install helm
\`\`\`

### Minikube on Mac

\`\`\`
brew install minikube
\`\`\`

## Linux

### Kubectl on Linux

\`\`\`
curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl && chmod +x ./kubectl && sudo mv ./kubectl /usr/local/bin/kubectl
\`\`\`

### Helm on Linux

Docs <https://helm.sh/docs/intro/install/>

Pomoci package manageru snap:

\`\`\`
sudo snap install helm --classic
\`\`\`

Nebo:

\`\`\`
curl https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3 | bash
\`\`\`

### Minikube on Linux (Linux on host)

Potrebujete [Virtual Box](https://www.virtualbox.org/wiki/Downloads)

\`\`\`
curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 && chmod +x minikube && sudo cp minikube /usr/local/bin/ && rm minikube
\`\`\`

### Minikube on Linux (Linux in virtual machine)

Pokud instalujete Kubernetes do virtualniho serveru, nepotrebujete (nemuzete) pouzit VirtualBox, muzete specifikovat VM driver none pri vytvareni Kubernetes clusteru.

\`\`\`
curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 && chmod +x minikube && sudo cp minikube /usr/local/bin/ && rm minikube
\`\`\`

Spustte takto:

\`\`\`
minikube start --vm-driver=none
\`\`\`

### k3s (minimalistic kubernetes for Linux)

Pokud nemuzete spustit __minikube__ (s VirtualBoxem nebo VM driverem none) nebo __microk8s__, muzete zkusit __k3s__.

Vice informaci na <https://k3s.io/>


## Windows

### Kubectl for Windows

\`\`\`
choco install kubernetes-cli
\`\`\`

### Helm for Windows

\`\`\`
choco install kubernetes-helm
\`\`\`

### Minikube for Windows

\`\`\`
choco install minikube
\`\`\`

## Bash Completion

\`\`\`
source <(kubectl completion bash)
source <(minikube completion bash)
source <(helm completion bash)
\`\`\`

Nebo ulozit do  \`.bashrc\`

\`\`\`
echo "source <(kubectl completion bash)" >> ~/.bashrc
echo "source <(minikube completion bash)" >> ~/.bashrc
echo "source <(helm completion bash)" >> ~/.bashrc
\`\`\`

Take funguje pro __zsh__, napriklad: \`source <(kubectl completion zsh)\`

`}
  />
);

export default Page;
