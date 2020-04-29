import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Brew (Homebrew) - Package Manager pro Mac"
    markdown={`
### Co je Brew

Homebrew je balíčkovací systém pro Mac, podobný jako je Apt nebo Yum na Linuxu. Více informací naleznete na [brew.sh](https://brew.sh).

### Instalace Brew

Homebrew nainstalujete tímto příkazem

    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

### Instalace balíčku pomocí Brew

Pokud chcete nainstalovat nějaký balíček, instalujte pomocí

    brew install <package>

Například

    brew install htop

### Brew Cask

Přes brew můžete instalovat i klasické \`.dmg\` balíčky přímo od tvůrců software. Přes brew cask můžete nainstalovat skoro všechny balíčky jako je Docker, Spotify nebo Skype.

### Instalace .dmg balíčku

Instalace \`.dmg\` balíčku pomocí Casku je

    brew cask install <package>

Například

    brew cask install docker

### Zálohování balíčků instalovaných pomocí Brew

Pokud si chcete uložit seznam balíčků nainstalovaných pomocí brew a brew cask, můžete použít

    brew bundle dump

Ten Vám vytvoří soubor \`Brewfile\`, který popisuje jaké balíčky máte nainstalované. Jsou tam klasické i Casky.

Pro instalaci balíčku z \`Brewfile\` použijte příkaz

    brew bundle

Já mám tento soubor ([Brewfile](https://github.com/ondrejsika/dotfiles/blob/master/mac/brew/Brewfile)) verzovaný v repozitáři [dotfiles](https://github.com/ondrejsika/dotfiles), pak dva skripty, jedním jej [aktualizuji](https://github.com/ondrejsika/dotfiles/blob/master/brew-save.sh) a druhým z něj [instaluji](https://github.com/ondrejsika/dotfiles/blob/master/brew-install.sh).
`}
  />
);

export default Page;
