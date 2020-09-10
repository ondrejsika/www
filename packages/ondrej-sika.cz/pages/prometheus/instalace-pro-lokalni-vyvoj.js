import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Instalace Promethea, Alert Manageru a Grafany pro lokalni vyvoj"
    ad="prometheus"
    markdown={`
## Mac

\`\`\`
brew install prometheus
brew install alertmanager
brew install grafana
brew install pushgateway
\`\`\`


## Linux

## Windows

### Prometheus

\`\`\`
choco install prometheus
\`\`\`
`}
  />
);

export default Page;
