import Article from "@app/ondrejsika-theme/layouts/Article";

export default () => (
  <Article
    title="Brew (Homebrew) - Package Manager pro Mac"
    markdown={`
### Co je Brew

Homebrew je balickovaci system pro Mac, podobny jako je Apt nebo Yum na Linuxu. Vice informaci naleznete na [brew.sh](https://brew.sh).

### Instalace Brew

Homebrew nainstalujete timto prikazem

    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"


### Instalace balicku pomoci Brew

Pokud chcete nainstalovat nejaky balicek, instalujte pomoci

    brew install <package>

Napriklad

    brew install htop

### Brew Cask

Prez brew muzete instalovat i klasicke \`.dmg\` balicky primo od tvurcu software. Prez brew cask muzete nainstalovat skoro vsechny balicky jako je Docker, Spotify nebo Skype.

### Instalace .dmg balicku

Instalace \`.dmg\` balicku pomoci Casku je

    brew cask install <package>

Napriklad

    brew cask install docker


### Zalohovani balicku instalovanych pomoci Brew

Pokud si chcete ulozit seznam balicku nainstalovanych pomoci brew a brew cask, muzete pouzit

    brew bundle dump

Ten Vam vytvori soubor \`Brewfile\`, ktery popisuje jake balicky mate nainstalovane. Jsou tam klasicke i Casky.

Pro instalaci balicku z \`Brewfile\` pouzijte prikaz

    brew bundle

Ja mam tento soubor ([Brewfile](https://github.com/ondrejsika/dotfiles/blob/master/mac/brew/Brewfile)) verzovany v repozitari [dotfiles](https://github.com/ondrejsika/dotfiles), pak dva skripty, jednim jej [aktualizuji](https://github.com/ondrejsika/dotfiles/blob/master/brew-save.sh) a druhym z nej [instaluji](https://github.com/ondrejsika/dotfiles/blob/master/brew-install.sh).
`}
  />
);
