import React from "react";
import Article from "@app/ondrej-sika.cz/layouts/Article";

export default function Hello() {
  return (
    <Article
      title="Z emailu do Slacku"
      markdown={`
Chci presunout cast "vnitrofiremni" komunikace do Slacku. Jsem velkym zastance emailu hlavne protoze je asynchroni - nikdo neceka, ze na email odpovim hned a decentralizovany - nikdo jej nevlastni. Coz se neda rict o Telegramu, Messengeru ani Slacku. Tak proc chci presunout komunikaci do Slacku?

Protoze dnes vetsina lidi neumi email pouzivat. Zni to divne, ale je to pravda. Vetsina lidi nedodrzuje vlakna, pise nove temata jako odpoved na posledni komunikaci nebo na email, na ktery kliknou prvni. Cast lidi ani nepise predmety. Udrzet vlakno konverzace je obcas hodne obtizne.

A to je asi hlavni duvod proc tuto komunikaci chci presunout do Slacku. Jedno vlakno, pripadne tematicke odbocky. Neda se to zkazit. Kanal ma tema a tomu se v nem venujeme.

Co vsak nechci, aby se z konverzace ve Slacku stal chat. Chci aby se co nejvice podobala email konverzaci. Proc? Protoze nechci prijit o vyhody emailu, ty podle me mnohonasobne prevazuji nad vyhodami chatu.

Hlavni vyhoda chatu je to ze dostanete odpoved hned. Ale za jakou cenu? Ten koho se ptate je vyrusen od prace a nez se zase dostane do flow trva dost casu. A pokud to udelate parkrat denne tak mate po veskere hluboke praci.

Vyhoda emailu? Davkove zpracovani az na to bude cas. Prichozi emaily dokazete odbavit rano nebo pozde odpoledne a nijak Vam nebudou rozbijet okno vasi hluboke prace.

Dalsi vyhoda emailu spociva v tom, ze odesilatel zpravy vi, ze to budete resit az za dlouho a proto se snazi vse popsat tak aby jste mel k reseni problemu vse potrebene. Presny opak toho co se deje pri chatu nebo callu.

Zavererem chci rict ze chci zavest Slack kvuli prehlednosti a vsak s prvky asynchroni komunikace emailu aby nezabijel produktivitu, kreativitu a hlavne hlubokou praci.
    `}
    />
  );
}
