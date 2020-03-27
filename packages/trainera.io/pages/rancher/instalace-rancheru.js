import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Instalace Rancheru"
    ad="rancher"
    markdown={`
Nejjednodušší je nainstalovat Rancher z Dockeru. Zde je [repozitář](https://github.com/ondrejsika/www-other/tree/master/rancher) s deploymentem Rancheru.

\`\`\`
git clone git@github.com:ondrejsika/www-other.git
cd www-other/rancher
\`\`\`

Můžete pustit Rancher na portu \`80\` a \`443\` pomocí příkazu \`./set-dev.sh\` a nebo za traefikem pomoci \`./set-prod.sh\`.

Pak stačí pustit Docker Compose pomocí
\`\`\`
docker-compose up -d
\`\`\`
`}
  />
);

export default Page;
