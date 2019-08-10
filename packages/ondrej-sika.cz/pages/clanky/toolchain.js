import MainBar from "@app/ondrej-sika.cz/components/MainBar";
import Markdown from "@app/common/components/Markdown";

import Head from "next/head";

import site from "@app/ondrej-sika.cz/config";

let style = {
  fontSize: "1.4em",
  fontWeight: "bold"
};

export default () => (
  <div>
    <Head>
      <title>
        Nastroje, ktere pouzivam a zjednodusuji mi praci a zivot - Ondřej Šika
      </title>
    </Head>
    <MainBar MainBarHeader="Nastroje, ktere pouzivam a zjednodusuji mi praci a zivot" />

    <div className="container pt-4 pb-2">
      <p style={{ color: "gray" }} className="container mb-4">
        Odkaz na tento clanek je take{" "}
        <a href="https://sika.link/toolchain">sika.link/toolchain</a>
      </p>
      <Markdown
        source={`
Pro ty kdo me neznaji, jsem IT Konzultant, Lektor, a Architekt se zamerenim na DevOps a programator. Hodne cestuji a pracuji na cestach. Chci mit kancelar co nejvice mobilni a automatizovanou.

## Apple

Zhruba pul roku jsem kompletne na Apple pote, co jsem presel z Linuxu (Debian + i3) na Macbook. Telefon, hodinky a ostatni jsem mel uz drive.

Musim rict, ze jsem naprosto spokojen a uz bych nemenil.

#### Mac

Na Mac jsem presel z Linuxu a zacatky byli tezke, ale zvladl jsem to. Ted musim rict, ze jsem to mel udelat uz driv.

Nejlepsi na Macu je ze proste funguje. A to z pohledu programatora, managera i uzivatele. Vsechny tyto role se celkem dobre skloubi, zvlast kdyz mam od Apple skoro vsechno.

Na Macu me funguji veci, ktere potrebuji pro vyvoj jako Git, yarn, VS Code, ... A daji se instalovat prez balickovaci manager [brew](/navody/brew) podobne jako na Linuxu. Dale na Macu fungiji veci jako Skype for Business, jsou pro nej aplikace jako Notion (s offline podporou) a celkove veci, ktere zacinam pouzivat.

A v neposledni rade to ze funguji tiskarny "z krabice" a ze mam synchronizovane kontakty v pocitaci s temi v telefonu. Take to ze na nem mohu jednoduse upravovat fotky a to nejen z iPhone.

Akorat me chybitiling window manager [i3](https://i3wm.org), ale zvykl jsem si.

#### iPad Pro LTE

Kdyz jsem si za skoro 40 000 CZK kupoval iPad Pro 11" s LTE a klavesnici, rikal jsem si zda to neni zbytecne moc (muj Macbook 15" i7 16GB stal 32 000 CZK). Ale ukazalo se ze iPad Pro je skvely pracovni nastroj (i bez iPad OS) a to hlavne na cestach.

Klavesnice je uplne v pohode na psani emailu i praci v terminalu, chybi mi na ni escape, ale da se to zvladnout. Ve Vimu se da escape nahradit __ctrl+[__.

Priplatil jsem si za LTE verzi a dobre vim proc. Chci mit LTE primo v iPadu a nechci abych se musel pripojovat k intetnetu prez telefon (Vodafone umoznuje sdileni dat na 2 sim) a to ze dvou duvodu. Zaprvne otevru iPad a muzu pracovat a za druhe, muzu iPad pouzivat jako hotspot pro Mac. Je to skvele na cesty, muzu mit iPad v batohu a tlacitkem wifi se k nemu pripojim z Macu aniz bych ho musel vyndat. A proc pouzivat iPad jako hotspot a ne iPhone? Jednoduse, ma vetsi baterii a to hodne.


#### Apple Watch

Kdyz jsem si porizoval Apple watch, premyslel jsem zda to ma smysl, cca po pul roce pouzivani musim rici ze to byl dobry napad. Zvlaste po te co Revolut spustil Apple Pay.

Na hodinkach vyuzivam prevazne tyto funkce, v poradi jak jsou zde uvedeny:

- __Apple Pay__ - naprosto dokonale, nemusim vytahovat penezenku ani telefon - neni to zadny boost produktivity, ale super pohodlne
- __Apple Health__ - monitoring a upozorneni abych se hybal - jako programator potrebuji. Take mi to hlida abych se kazdou hodinu zvednul a trosku prosel.
- __Zvednuti hovoru na hodinkach__ - Skvele v Aute (bez CarPlay), na kole nebo v horach kdy mam telefon v batohu. Nebo kdyz ho mam nekde po byte.
- __Psani SMS__ - muzu odeslat SMS bez toho abych musel hledat a vyndavat telefon. Zase super v aute.
- Hledani telefonu
- Zaznamenavani sportu - Lezeni, behani


## G Suite (drive Google Apps)

Pouzivam [G Suite](https://gsuite.google.com) na vlastni domene a jsem s tim OK, nechtel bych vsak pouzivat Gmail zdarma. Proc, to mam popsane v clanku [Proc by kazdy mel mit svoji domenu](/clanky/proc-by-kazdy-mel-mit-svoji-domenu).


#### Gmail

Je to spolehlivy email, ma vyborny spam filter a zaroven vim ze kdyz neco poslu ja, dorazi to do Inboxu ne do spamu. Je vice alternativ jako [Fast Mail](https://fastmail.com) nebo [Proton Mail](https://protonmail.com), ale ja chci pouzivat Google Kalendar a ostatni G Suite aplikace a nemam s Gmailem problem, nechci resit a platit dalsi sluzbu.


#### Google Calendar

Google Kalendar je super. Velkou vyhodu vidim v tom, ze hodle firem a lidi jej ma take a funkce na sdileni kalendare, editovani eventu a dalsi proste skvele funguji.


#### Google Docs

Pouzivam na sdilene dokumenty, ktere musi pouzivat i lide bez Macu.


## Todoist

[Todoist](https://todoist.com) je skvela jednoducha aplikace na todo listy a seznamy vseho druhu. Vyhodou je ze se da jednoduse sdilet a ma super appky, coz se hodi na nakupy. Super byl nakup na tabor, kde jsme ve vice lidech skrtali z jednoho seznamu. Zaroven ma aplikaci pro Apple Watch - muzu poznamky diktovat a muzu je prochazet bez telefonu.

U Todoistu se da skvele pouzivat free verze, ja si platim PRO (cca 30 USD rocne), za forward emailu do Todoistu. Za me rozhodne funkce, ktera mi za ty penize stoji. A taky je rad podporim.


## Notion

[Notion](https://notion.so) je pro me primarne nastroj na knowledge base - misto kam si pisu vsechno co potrebuji vedet a i snekym sdilet. S teamem v praci i s rodinou.

Proc jsem si vybral notion pisu v clanku [Vyber osobni wiki](/clanky/vyber-osobni-wiki).

Notion obsahuje dokumenty, ktere se mezi sebou daji linkovat a prochazet (ne jako Google Docs) i jednoduche tabulky, ktere se mezi sebou dali linkovat - neco jako [AirTable](https://airtable.com).

Je tam hromada pluginu na vsechno, jako napriklad integrace s Google Docs nebo mapamy.

Notion je novy projekt a rychle se vyvyji.


## Calendly

Drive drtiva vetsina emailu co jsem si vymenil s klienty a nejvice casu co jsem stravil na domlouvani zakazky - skoleni bylo ohledne domlouvani terminu. To [Calendly](https://calendly.com) resi. Kazdy si muze zarezervovat volny termin prez Calendly sam. Calendly si samo zjistuje z kalendare kdy mam cas. Kazdy si muze termin prez Calendly vybrat termin jaky chce a ja nemusim resit komu jsem jaky termin rezervoval a co si nakonec vybral.


## Fakturoid

[Fakturoid](https://fakturoid.cz) je pro me take velke zjednoduseni, protoze jsem platce DPH, pouzivam Solo+. Zrychluje mi to fakturaci, hlida a paruje mi to platby. Vystaveni faktury je zalezitost pod minutu.


## Toggl

[Toggl](https://toggl.com) je jednoduchy nastroj na mereni casu. Naprosto jednoduchy a dostacujici i ve verzy zdarma. Jedine co mi na nem chybi je aplikace pro Apple Watch.


## Password managery

#### Passbolt

Pro sdileni hesel v teamu pouzivam [Passbolt](https://passbolt.com) na vlastnim serveru. Je to open source password manager v browseru, ktery byl vytvorem pro Lucemburskou vladu.


#### LastPass

[LastPass](https://lastpass.com) pouzivam pro osobni veci, vyhodou je ze funguje i na telefonu a iPadu.


#### Apple Password & Google Password

Malo dulezita hesla mam ulozena v Apple a v Google. Je to proste jednodusi a kdyz mi Google kompromituje heslo do Alzy, neni to tak strasny.
`}
      />
    </div>
  </div>
);
