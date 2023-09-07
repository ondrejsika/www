import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Instalace Terraformu"
    ad="terraform"
    markdown={`
Oficialni navod na instalaci Terraformu

https://developer.hashicorp.com/terraform/downloads

## Mac

Na Macu nainstalujete Terraform pomocí [brew](/navody/brew)

    brew install terraform

## Windows

Pomoci Winget

    winget install -e --id Hashicorp.Terraform

Na Windows naistalujete Terrafrom pomocí [chocolatey](/návody/chocolatey)

    choco install terraform

## Linux

Pomoci [slu](https://github.com/sikalabs/slu)

    slu install-bin terraform

`}
  />
);

export default Page;
