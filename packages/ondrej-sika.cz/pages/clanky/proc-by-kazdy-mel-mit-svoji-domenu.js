import MainBar from "@app/ondrej-sika.cz/components/MainBar";
import Markdown from "@app/common/components/Markdown";

import Head from "next/head";

let site = {
  lang: "cs"
};

let style = {
  fontSize: "1.4em",
  fontWeight: "bold"
};

export default () => (
  <div>
    <Head>
      <title>Proc by kazdy mel mit svoji domenu - Ondřej Šika</title>
    </Head>
    <MainBar MainBarHeader="Proc by kazdy mel mit svoji domenu"></MainBar>

    <div className="container pt-4 pb-2">
      <Markdown
        source={`
Proc by kazdy mel mit svoji domenu? Mozna to zni jako overhead, ale mam k tomu par duvodu. Ve zkratce, byt vice nezavysly - svobodnejsi.

Kdyz pouzivam klasicky Gmail, muj email muze byt \`ondrejsika@gmail.com\`. Vadi mi to nejak? Na prvni pohled to tak nemusi vypadat, ale kdyz se podivame podrobneji, zjistime ze tomu tak skutecne je.

Vratme se o par (rekneme patnact) let zpet. Gmail tehdy neexitoval a vsichni v Cesku pouzivali seznam. Zalozim si tedy email \`ondrejsika@seznam.cz\`.

Kdyz prisel Gmail, chtel jsem ho zacit pouzivat, ale musel bych zmenit emailovou adresu. To nechci delat z vice duvodu. Chci aby mi lide mohli napsat i po dlouhe dobe, nechci pri zmene poskytovatele emailu menit vsechny sluzby, ktere jej pouzivaji a rikat lidem ze mam novy email. Rikate si ze Google tu bude vecne? Kdo vi ...

No, to se da vyresit preposilanim. Ale, pokud poskytovatel zkocni, zdrazi nebo zmeni smluvni podminky, chci se presunout hned. A to bez sve domeny neudelam. A navic, vlastni domena vypada profesionalne a podporuje vasi osobni znacku, ktera v dnesnich dnech nabyva na vyznamu pro vsechny (nejen pro freelancery, ale i pro zamestnance), mnohem vice nez univerzitni titul.

Dobre, chci email na vlastni domene, jakou domenu si mam koupit a jaky email pouzit. Pri vyberu domeny postupuji nasledovne. Zkusim prvni variantu a pokud je obsazena, jdu na dalsi. Muzete napriklad takto:

- \`sika.com\` s emailem \`ondrej@sika.com\` - \`.com\` je kral
- \`sika.cz\` s emailem \`ondrej@sika.cz\`
- \`sika.io\` s emailem \`ondrej@sika.io\` - \`.org\` je take pouzitelna
- \`ondrejsika.com\` s emailem \`ondrej@ondrejsika.com\`
- \`ondrejsika.cz\` s emailem \`ondrej@ondrejsika.cz\`

Nepouzival bych nove domeny jako je napriklad \`.email\`, protoze nektere sluzby Vam neumozni zadat email s touto domenou.

Pokud nechcete domenu pouzivat i pro web, doporucuji ji presmerovat napriklad na LinkedIn nebo Facebook.

Pokud chcete pouzivat email na vlastni domene, doporucuji Vam tyto poskytovatele:

- [Google G Suite](https://gsuite.google.com/) - Propojeni s Google Kalendarem a dalsimy Google sluzbami je super, dnes skoro standart
- [Fast Mail](https://fastmail.com) - Spolehlivy poskytovatel pokud nechcete Google
- [Proton Mail](https://protonmail.com) - Sifrovany email, ma vyhody i nevyhody. Je hodne bezpecny, ale napriklad jej nemuzete dat do aplikace Mail na iPhone (nebojte, maji svoji appku).
- [Seznam Email Profi](https://www.emailprofi.cz/) - Email na vlastni domene od Seznamu, do 10 uzivatelu zdarma

Zaverem chci zduraznit, ze vlastni email email je jista forma svobody a vypada to lepe. I diky tomu ze email jako \`jmenoprijmeni@gmail.com\` uz bude nejspis obsazene. Pokud mate nejaky dotaz, nebo chcete pomoc, dejte vedet.
`}
      />
    </div>
  </div>
);
