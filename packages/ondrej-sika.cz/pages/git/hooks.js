import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Git Hooks"
    ad="git"
    markdown={`
## Co jsou to Git hooky? A k čemu vlastně slouží?

To si vysvětlíme v následujícím článku. Díky Git hookům budete například commitovat čistější kód.

Git hooky jsou scripty, které se spouštějí na základě nějaké události v Gitu, například před commitem (pre-commit) nebo před pushem (pre-push). Úplný seznam hooku a dokumentace je zde: <https://git-scm.com/docs/githooks>

My se zaměříme na jeden a to na __pre-commit__ hook. Ostatní hooky se dělají obdobně.

## Vytvoření pre-commit hooku

Když chceme vytvořit hook, ve složce \`.git/hooks/\` v repozitáři vytvoříme spustitelný soubor s názvem \`pre-commit\` (typický shell script).

Obsah tohoto skriptu je na nás, před commitem se skript spustí a pokud skončí návratovým kódem 0, pokračuje se s commitem, pokud skončí s chybou (nenulový návratový kód), commit nepovolí.

Pre-commit hook můžete například použít jako check formátování kódu, ukázka hooku pro JavaScript a Prettier je zde:

\`\`\`
cat > .git/hooks/pre-commit <<EOF
#!/bin/sh

yarn run prettier -l '**/*.js'

EOF
chmod +x .git/hooks/pre-commit
\`\`\`

Pokud budete chtít commit vytvořit i když neprojde přes commit hook, můžete jej obejít parametrem \`-n\` nebo \`--no-verify\` u příkazu \`git commit\`.


## Ukázka použití našeho hooku

Pokud chceme commitnout špatné formátování, hook nás nepustí.

![](/static/hooks/pre-commit-invalid.png)

Když jej opravíme, commit udělat můžeme.

![](/static/hooks/pre-commit-valid.png)

Pokud chci dočasně vypnout validaci, použiji parametr \`-n\` a hook se nespustí.

![](/static/hooks/no-hook.png)



Zdroje:

- <https://github.com/ondrejsika/react-training#prettier-pre-commit-hook>
- <https://git-scm.com/docs/githooks>
- <https://githooks.com/>
`}
  >
    <style
      dangerouslySetInnerHTML={{
        __html: `
   .article img {
    width: 60%;
  }
`
      }}
    />
  </Article>
);

export default Page;
