import Article from "@app/ondrej-sika.cz/layouts/Article";

export default () => (
  <Article
    title="Priprava na Skoleni Kubernetes"
    markdown={`
Na skoleni Kubernetes je potreba mit nainstalovany \`kubectl\`, \`helm\` a \`minikube\`. Navod na instalaci najdete v clanku [Instalace Kubernetes pro lokalni vyvoj](/kubernetes/instalace).
`}
  />
);
