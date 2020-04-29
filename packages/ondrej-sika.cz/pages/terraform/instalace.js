import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Instalace Terraformu"
    ad="terraform"
    markdown={`
## Mac

Na Macu nainstalujete Terraform pomocí [brew](/navody/brew)

    brew install terraform

## Linux

Na Linuxu si stáhněte (<https://www.terraform.io/downloads.html>) build v ZIPu a zkopírujte \`terraform\` binárku do \`/usr/local/bin\`.

## Windows

Na Windows naistalujete Terrafrom pomocí [chocolatey](/návody/chocolatey)

    choco install terraform
`}
  />
);

export default Page;
