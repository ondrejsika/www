import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Instalace Rancher CLI a RKE"
    ad="rancher"
    markdown={`
## Mac

Na Macu nainstalujete Rancher CLI a RKE pomocí [brew](/navody/brew)

    brew install rancher-cli rke

## Linux

#### RKE

\`\`\`
wget https://github.com/rancher/rke/releases/download/v1.1.0/rke_linux-amd64
chmod +x rke_linux-amd64
sudo mv rke_linux-amd64 /usr/local/bin/rke
\`\`\`

#### Rancher CLI

\`\`\`
wget https://github.com/rancher/cli/releases/download/v2.4.0/rancher-linux-amd64-v2.4.0.tar.gz
tar -xzf rancher-linux-amd64-v2.4.0.tar.gz
sudo mv rancher-v2.4.0/rancher /usr/local/bin/rancher
rm -rf rancher-linux-amd64-v2.4.0.tar.gz rancher-v2.4.0
\`\`\`


## Windows

Choco balíčky ještě nejsou (pracuje se na nich), musíte použít oficiální návody:

- Rancher CLI - https://rancher.com/docs/rancher/v2.x/en/cli/
- RKE - https://rancher.com/docs/rke/latest/en/installation/
`}
  />
);

export default Page;
