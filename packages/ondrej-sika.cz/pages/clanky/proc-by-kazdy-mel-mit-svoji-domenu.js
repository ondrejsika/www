import Article from "@app/ondrej-sika.cz/layouts/Article";

export default () => (
  <Article
    title="Proc by kazdy mel mit svoji domenu"
    markdown={`
Domena je zaklad pro osobni brand a svobodu online. O emailu na vlstni domene jsem napsal clanek [Proč mít email na vlastní doméně](/clanky/proc-mit-email-na-vlastni-domene).

### Jak si vybral domenu a nebo domeny

Pri vyberu domeny postupuji nasledovne. Zkusim prvni variantu a pokud je obsazena, jdu na dalsi. Muzete napriklad takto:

Nejdrive se snazim sehnat domenu pouze jmena.

- \`sika.com\` - \`.com\` je kral
- \`sika.cz\`
- \`sika.io\` - \`.org\` je take pouzitelna, pro "nerdy" / IT lidi je dobra i \`.sh\`

Pokud nejsou tyto domeny k dispozici, zkousim domeny jmeno + prijmeni.

- \`ondrejsika.com\` s emailem \`ondrej@ondrejsika.com\`
- \`ondrejsika.cz\` s emailem \`ondrej@ondrejsika.cz\`

Pokud je moznost koupit domenu \`jmeno.com\` a i \`jmenoprijmeni.com\`, kupte si obje. Cena 12 USD za domenu navic je zanedbatelna castka. Web muzete mit na \`jmenoprijmeni.com\` a \`jmeno@prijmeni.com\`.

Stejne to plati i pokud mate moznost koupit \`.com\` i \`.cz\`. Ostatni kombinace asi nema smysl kupovat dohromady.

### Dalsi domeny, pokud jsou vsechny predchozi obsazene.

Pokud je vsechno obsazene, muzte si vybrat z techto moznosti:

- \`jmeno-prijemni.com\`
- \`jmeno.com\`
- \`jmenop.com\`
- \`jprijmeni.com\`
- \`prijmenijmeno.com\`
- \`prijmeni-jmeno.com\`

Za me bych asi zase postupoval ze zhora dolu.
`}
  />
);
