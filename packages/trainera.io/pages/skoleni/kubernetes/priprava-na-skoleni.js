import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Priprava na Skoleni Kubernetes"
    markdown={`
Na skoleni Kubernetes je potreba mit nainstalovany \`kubectl\`, \`helm\` a \`minikube\`. Navod na instalaci najdete v clanku [Instalace Kubernetes pro lokalni vyvoj](/kubernetes/instalace).
`}
  />
);

export default Page;
