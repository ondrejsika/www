import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Requirements for Kubernetes Training"
    before={
      <div className="alert alert-warning mb-4">
        <p className="mb-0">
          If you fail to install something, don&apos;t worry, we will do it
          together. Alternatively, I have prepared a VM (Virtual Machine) in the
          cloud for each participant where everything is ready. If you have any
          questions, please send me an email at:{" "}
          <a href="mailto:ondrej@sika.io">ondrej@sika.io</a>.
        </p>
      </div>
    }
    markdown={`
We need to install some tools for the training:

- Browser (Chrome of Firefox is recommended)
- Git
- Text editor (VS Code is recommended)
- \`kubectl\`
- \`helm\`
- \`minikube\` (ideally with Docker Desktop)

If you want, you can install also these tools which can be helpful (but not necessary):

- \`slu\` - SikaLabs Utils - https://github.com/sikalabs/slu
- \`training-cli\` - My training utils - https://github.com/ondrejsika/training-cli


\`\`\`
minikube start
kubectl get nodes
\`\`\`

Output should be something like this:

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
\`\`\`

Let&apos;s stop minikube (so we have everything prepared for the training):

\`\`\`
minikube stop
\`\`\`
`}
  />
);

export default Page;
