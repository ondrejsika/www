import Article from "@app/ondrej-sika.cz/layouts/Article";

export default () => (
  <Article
    title="Proč mít email na vlastní doméně"
    markdown={`
Proč by každý měl mít email na vlastní doméně? Možná to zní jako overhead, ale mám k tomu pár důvodů. Ve zkratce, být více nezavislý - svobodnější a pro osobní brand.

Když používám klasicky Gmail, můj email může být \`ondrejsika@gmail.com\`. Vadí mi to nějak? Na první pohled to tak nemusí vypadat, ale když se podíváme podrobněji, zjistíme, že tomu tak skutečne je.

Vraťme se o pár (řekneme patnáct) let zpět. Gmail tehdy neexistoval a všichni v Česku používali seznam. Založím si tedy email \`ondrejsika@seznam.cz\`.

Když přišel Gmail, chtěl jsem ho začít používat, ale musel bych změnit emailovou adresu. To nechci dělat z více důvodů. Chci, aby mi lidé mohli napsat i po dlouhé době, nechci při změně poskytovatele emailu měnit všechny služby, které jej používají a říkat lidem, že mám nový email. Říkáte si, že Google tu bude věčně? Kdo ví ...

No, to se dá vyřešit přeposíláním. Ale, pokud poskytovatel skončí, zdraží nebo změní smluvní podmínky, chci se přesunout hned. A to bez své domény neudělám. A navíc, vlastní doména vypadá profesionálně a podporuje vaši osobní značku, která v dnešních dnech nabýva na významu pro všechny (nejen pro freelancery, ale i pro zaměstnance), mnohem více než univerzitní titul.

Dobře, chci email na vlastní doméně, jakou doménu si mám koupit a jak email použít. Při vběru domény postupuji následovně. Zkusím první variantu a pokud je obsazená, jdu na další. Můžete například takto:

- \`sika.com\` s emailem \`ondrej@sika.com\`
- \`ondrejsika.com\` s emailem \`ondrej@ondrejsika.com\`

Zde je článek jak si vybrat doménu [Proc by kazdy mel mit svoji domenu](/clanky/proc-by-kazdy-mel-mit-svoji-domenu/).

Nepoužíval bych nové domény jako je například \`.email\`, protože některé služby Vám neumožní zadat email s touto doménou.

Pokud nechcete doménu používat i pro web, doporučuji ji přesměrovat například na LinkedIn nebo Facebook.

Pokud chcete používat email na vlastní doméně, doporučuji Vám tyto poskytovatele:

- [Google G Suite](https://gsuite.google.com/) - Propojení s Google Kalendářem a dalšími Google službami je super, dnes skoro standard
- [Fast Mail](https://fastmail.com) - Spolehlivý poskytovatel pokud nechcete Google
- [Proton Mail](https://protonmail.com) - Šifrovaný email, má výhody i nevýhody. Je hodně bezpečný, ale například jej nemůžete dát do aplikace Mail na iPhone (nebojte, mají svoji appku).
- [Seznam Email Profi](https://www.emailprofi.cz/) - Email na vlastní doméně od Seznamu, do 10 uživatelů zdarma

Závěrem chci zdůraznit, že vlastní email je jistá forma svobody a vypadá to lépe. I díky tomu, že email jako \`jmenoprijmeni@gmail.com\` už bude nejspíš obsazené. Pokud máte nějaky dotaz, nebo chcete pomoc, dejte vědet.
`}
  />
);
