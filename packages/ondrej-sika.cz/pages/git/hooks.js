import Article from "@app/ondrej-sika.cz/layouts/Article";

export default () => (
  <Article
    title="Git Hooks"
    markdown={`
## Co jsou to Git hooky? A k cemu vlastne slouzi?

To si vysvetlime v nasledujicim clanku. Diky Git hookum budete napriklad commitovat cistejsi kod.

Git hooky jsou scripty, ktere se spousteji na zaklade nejake udalosti v Gitu, napriklad pred commitem (pre-commit) nebo pred pushem (pre-push). Uplny seznam hooku a dokumentace je zde: <https://git-scm.com/docs/githooks>

My se zamerime na jeden a to na __pre-commit__ hook. Ostatni hooky se delaji obdobne.

## Vytvoreni pre-commit hooku

Kdyz chceme vytvorit hook, ve slozce \`.git/hooks/\` v repozitari vytvorime spustitelny soubor s nazvem \`pre-commit\` (typicky shell script).

Obsah tohoto skriptu je na nas, pred commitem se skript spusti a pokud zkonci navratovym kodem 0, pokracuje se s commitem, pokud zkonci s chybou (nenulovy navratovy kod), commit nepovoli.

Pre commit hook muzete napriklad pouzit jako chceck formatovani kodu, ukazka hooku pro JavaScript a Prettier zde:

\`\`\`
cat > .git/hooks/pre-commit <<EOF
#!/bin/sh

yarn run prettier -l '**/*.js'

EOF
chmod +x .git/hooks/pre-commit
\`\`\`

Pokud budete chcit commit vytvorit i kdyz neprojce pre commit hook, muzete jej obejit parametrem \`-n\` nebo \`--no-verify\` u prikazu \`git commit\`.


## Ukazka pouziti naseho hooku

Pokud chceme commitnout spatne formatovani, hook nas nepusti.

![](/static/hooks/pre-commit-invalid.png)

Kdyz jej opravime, commit udelat muzeme.

![](/static/hooks/pre-commit-valid.png)

Pokud chci docasne vypnout validaci, pouziji parametr \`-n\` a hook se nespousti.

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
   .container img {
    width: 60%;
  }
`
      }}
    />
  </Article>
);
