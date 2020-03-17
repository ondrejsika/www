import Article from "@app/ondrejsika-theme/layouts/Article";

export default () => (
  <Article
    title="Instalace Terraformu"
    ad="terraform"
    markdown={`
## Mac

Na Macu nainstalujete Terraform pomoci [brew](/navody/brew)

    brew install terraform

## Linux

Na Linuxu si stahnete (<https://www.terraform.io/downloads.html>) build v ZIPu a zkopitujte \`terraform\` binarku do \`/usr/local/bin\`.

## Windows

Na Windown naistalujete Terrafrom pomoci [chocolatey](/navody/chocolatey)

    choco install terraform

`}
  />
);
