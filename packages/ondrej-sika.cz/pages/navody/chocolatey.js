import Article from "@app/ondrej-sika.cz/layouts/Article";

export default () => (
  <Article
    title="Chocolatey - Package Manager pro Windows"
    markdown={`
### Co je Chocolatey

Chocolatey je balickovaci system pro Windows, podobny jako je [Brew](/navody/brew) na Macu. Vice informaci naleznete na [chocolatey.org](https://chocolatey.org).

### Instalace Chocolatey

Vice o instalaci najdete na <https://chocolatey.org/install>.

Pokud chcete nainstalovat Chcoco jednim prikazem, puste CMD nebo PowerShell jako Admininstrator.

#### CMD

    @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

#### Powershell

    Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))


### Instalace balicku pomoci Chocolatey

Pokud chcete nainstalovat nejaky balicek, instalujte pomoci

    choco install <package>

Napriklad

    choco install docker-desktop

`}
  />
);
