import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Priprava na Skoleni Kubernetes"
    markdown={`
Na skoleni Kubernetes je potreba mit nainstalovany \`kubectl\`, \`helm\` a \`minikube\`. Navod na instalaci najdete v clanku [Instalace Kubernetes pro lokalni vyvoj](/kubernetes/instalace).

Po instalaci je dobre overit si zda minikube funguje:

\`\`\`
minikube start
kubectl get nodes
\`\`\`

Melo by to vypsat neco jako:

\`\`\`
ondrej@sika-mac:~$ minikube start
😄  minikube v1.11.0 on Darwin 11.0
✨  Automatically selected the hyperkit driver. Other choices: docker, virtualbox
👍  Starting control plane node minikube in cluster minikube
🔥  Creating hyperkit VM (CPUs=2, Memory=4000MB, Disk=20000MB) ...
❗  This VM is having trouble accessing https://k8s.gcr.io
💡  To pull new external images, you may need to configure a proxy: https://minikube.sigs.k8s.io/docs/reference/networking/proxy/
🐳  Preparing Kubernetes v1.18.3 on Docker 19.03.8 ...
🔎  Verifying Kubernetes components...
🌟  Enabled addons: default-storageclass, storage-provisioner
🏄  Done! kubectl is now configured to use "minikube"
ondrej@sika-mac:~$ kubectl get nodes
NAME       STATUS   ROLES    AGE   VERSION
minikube   Ready    master   69s   v1.18.3
ondrej@sika-mac:~$ kubectl get cs
NAME                 STATUS    MESSAGE             ERROR
controller-manager   Healthy   ok
scheduler            Healthy   ok
etcd-0               Healthy   {"health":"true"}
ondrej@sika-mac:~$
\`\`\`

Potom minikube pouze vypnete (at mate vse pripravene na skoleni)

\`\`\`
minikube stop
\`\`\`
`}
  />
);

export default Page;
