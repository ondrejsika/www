import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

export default () => (
  <Article
    title="Proc by kazdy mel mit svoji domenu"
    markdown={`
Doména je základ pro osobní brand a svobodu online. O emailu na vlastní doméně jsem napsal článek [Proč mít email na vlastní doméně](/clanky/proc-mit-email-na-vlastni-domene).

### Jak si vybrat doménu anebo domény

Při výběru domény postupuji následovně. Zkusím první variantu a pokud je obsazená, jdu na další. Můžete například takto:

Nejdříve se snažím sehnat doménu pouze příjmení. Například:

- \`sika.com\` - \`.com\` je král
- \`sika.cz\`
- \`sika.io\` - \`.org\` je také použitelná, pro "nerdy" / IT lidi je dobra i \`.sh\`

Pokud nejsou tyto domény k dispozici, zkouším domény jméno + příjmení.

- \`ondrejsika.com\` s emailem \`ondrej@ondrejsika.com\`
- \`ondrejsika.cz\` s emailem \`ondrej@ondrejsika.cz\`

Pokud je možnost koupit doménu \`prijmeni.com\` a i \`jmenoprijmeni.com\`, kupte si obě. Cena 12 USD za doménu navíc je zanedbatelná částka. Web můžete mít na \`jmenoprijmeni.com\` a \`jmeno@prijmeni.com\`.

Stejně to platí i pokud máte možnost koupit \`.com\` i \`.cz\`. Ostatní kombinace asi nemá smysl kupovat dohromady.

### Další domény, pokud jsou všechny předchozí obsazené.

Pokud je všechno obsazené, můžte si vybrat z těchto možností:

- \`jmeno-prijemni.com\`
- \`jmeno.com\`
- \`jmenop.com\`
- \`jprijmeni.com\`
- \`prijmenijmeno.com\`
- \`prijmeni-jmeno.com\`

Za mě bych asi zase postupoval ze shora dolů.
`}
  />
);
