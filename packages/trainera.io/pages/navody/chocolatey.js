import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Chocolatey - Package Manager pro Windows"
    markdown={`
### Co je Chocolatey

Chocolatey je balíčkovací systém pro Windows, podobný jako je [Brew](/navody/brew) na Macu. Více informací naleznete na [chocolatey.org](https://chocolatey.org).

### Instalace Chocolatey

Více o instalaci najdete na <https://chocolatey.org/install>.

Pokud chcete nainstalovat Chcoco jedním příkazem, pusťte CMD nebo PowerShell jako Administrátor.

#### CMD

    @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

#### Powershell

    Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

### Instalace balíčku pomocí Chocolatey

Pokud chcete nainstalovat nějaký balíček, instalujte pomocí

    choco install <package>

Například

    choco install docker-desktop

`}
  />
);

export default Page;
