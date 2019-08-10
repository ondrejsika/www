import MainBar from "@app/ondrej-sika.cz/components/MainBar";
import Markdown from "@app/common/components/Markdown";

import Head from "next/head";

const Install = () => (
  <div>
    <Head>
      <title>Instalace Kubernetes - Ondřej Šika</title>
    </Head>
    <MainBar MainBarHeader="Instalace Kubernetes pro lokalni vyvoj"></MainBar>

    <div className="container pt-4 pb-2">
      <Markdown
        source={`

## kubectl

<https://kubernetes.io/docs/tasks/tools/install-kubectl/>

#### Linux

    curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl && chmod +x ./kubectl && sudo mv ./kubectl /usr/local/bin/kubectl

#### macOS

    brew install kubernetes-cli


#### Windows

Using Chocolatey

    choco install kubernetes-cli

## Minikube

<https://kubernetes.io/docs/tasks/tools/install-minikube/#install-minikube>

Minikube requires VirtualBox - <https://www.virtualbox.org/wiki/Downloads>

#### Linux

    curl -Lo minikube https://storage.googleapis.com/minikube/releases/v0.30.0/minikube-linux-amd64 && chmod +x minikube && sudo cp minikube /usr/local/bin/ && rm minikube

#### macOS

    brew cask install minikube

If you dont have VirtualBox, you can install it using Brew.

    brew cask install virtualbox

#### Windows

Using Chocolatey

    choco install minikube


#### Bash Completion

    source <(kubectl completion bash)
    source <(minikube completion bash)

Or save to \.bashrc\`

    echo "source <(kubectl completion bash)" >> ~/.bashrc
    echo "source <(minikube completion bash)" >> ~/.bashrc

## Helm

Docs <https://github.com/helm/helm/blob/master/docs/install.md>

Or oneliner for Linux:

    curl https://raw.githubusercontent.com/helm/helm/master/scripts/get | bash

on Mac:

    brew install kubernetes-helm


and on Windows:

    choco install kubernetes-helm


#### Bash Completion

    source <(helm completion bash)

`}
      />
    </div>
  </div>
);

export default Install;
