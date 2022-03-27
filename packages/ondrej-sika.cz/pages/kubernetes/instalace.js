import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Instalace Kubernetes pro lokalni vyvoj"
    ad="kubernetes"
    markdown={`
Aby jste mohli pouzivat kubernetes lokalne, musite mit nainstalovane tyto nastroje:

- __kubectl__ - Kubernetes client [oficialni navod na instalaci](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- __helm__ - Kubernetes package manager (neni nutny) [oficialni navod na instalaci](https://helm.sh/docs/intro/install/)
- __minikube__ - Nastoj na vytvareni lokalnich Kubernernes clusteru ve virtualnich strojich [oficialni navod na instalaci](https://minikube.sigs.k8s.io/docs/start/#install-minikube)

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

Nebo:

\`\`\`
curl https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3 | bash
\`\`\`

### Minikube on Linux

\`\`\`
curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 && chmod +x minikube && sudo cp minikube /usr/local/bin/ && rm minikube
\`\`\`

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
