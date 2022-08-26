import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Prepare for Kubernetes Training"
    before={
      <div className="alert alert-warning mb-4">
        <p className="mb-0">
          If you don&apos;t want install anything, I&apos;ll have lab
          environment prepared for you in AWS. If you have any question, ask me
          using via <a href="mailto:ondrej@sika.io">ondrej@sika.io</a>.
        </p>
      </div>
    }
    markdown={`
You need to have installed, you can install these tools from official documentation.

- Git
- Text Editor (I recommend VS Code)
- \`kubectl\`
- \`helm\`
- \`minikube\`

You can also install these tools, which can help you:

- \`slu\` - SikaLabs Utils - https://github.com/sikalabs/slu
- \`training-cli\` - My training utils - https://github.com/ondrejsika/training-cli

Check the installation:

\`\`\`
minikube start
kubectl get nodes
\`\`\`

The output should be something like:

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

You can stop it, you're prepared for training.

\`\`\`
minikube stop
\`\`\`
`}
  />
);

export default Page;
