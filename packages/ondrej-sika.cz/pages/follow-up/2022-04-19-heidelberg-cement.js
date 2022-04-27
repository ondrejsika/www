import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Follow Up: Heidelberg Cement, 19. - 22. 04. 2022"
    header="Follow Up: Heidelberg Cement"
    subheader="19. - 22. 04. 2022"
    hideNewsletter={true}
    markdown={`
## Materiály

### Repozitář s kurzy

- Git - https://github.com/ondrejsika/git-training/
- Gitlab CI - https://github.com/ondrejsika/gitlab-ci-training/
- Terraform - https://github.com/ondrejsika/terraform-training/

### Další zajímavé odkazy a repozitáře

- [DevOps Live](/devopslive) - Live streamy na témata z DevOps
- [Tergum](https://github.com/sikalabs/tergum) - Backup Tool
- [slu](https://github.com/sikalabs/slu) - SikaLabs Utils
- [ondrejsika/dotfiles](https://github.com/ondrejsika/dotfiles) - moje dotfiles (zshrc, aliases, ...)
- [https://ondrej-sika.cz/repozitare/](/repozitare) - Seznam zajímavých repozitářů
- https://github.com/ondrejsika - Všechny mé repozitáře na Githubu

### Repozitáře, které jsme při školení vytvořili

- Terraform Monorepo - https://github.com/sika-training-examples/2022-04-22--heidelbergcement--terraform-monorepo
- \`hc\` CLI (jako \`slu\`) - https://github.com/sika-training-examples/hc

Pokud se Vám bude něco líbit, budu rád za hvězdičky. Díky.

## Tergum

Vcera jsem naimplementoval podporu Azure Blob do Tergumu, takze kdyz by jste to chteli vyzkouset, dejte vedet.
Pokud to budete chtit pouzivat, radi Vam ze zacatku poskytnem podporu a pokud budete chtit nejakou custom funkcionalitu, radi to probereme.

- [Tergum](https://github.com/sikalabs/tergum)
- [Azure Blob config example](https://github.com/sikalabs/tergum/blob/master/misc/example/config/tergum-azure-v3.EXAMPLE.yaml)
- [all config examples](https://github.com/sikalabs/tergum/tree/master/misc/example/config)

## DevOps Live

Začal jsem streamovat live coding na témata z DevOps, pokud by Vás to zajímalo více, koukněte na stránku [DevOps Live](/devopslive).

## Další kroky

- Budu rád, když mi napíšete doporučení na LinkedIn a na Twitter
  - Linkedin: přidejte si mne a já vám pošlu žádost - https://www.linkedin.com/in/ondrejsika/
  - Twitter: Tweetnete něco s \`@ondrejsika\`.
- Přidejte se do komunit účastníků mých školení, které buduji na Slacku, Facebooku a Linkedinu - https://join.sika.io
- Pokud jste ve zpětné vazbě nezaškrtly, že chcete newsletter, můžete se přihlásit zde - https://sika.link/newsletter/

Ať se Vám daří ve všem, nejen s Kubernetes!
<br>O.
`}
  />
);

export default Page;
