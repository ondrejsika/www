import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Gmail na vlatni domene konci, co ted?"
    markdown={`

# TLDR

__Zaplatit.__ Tedy alespon ja ho zaplatim. Ale v clanku to rozvedu ...

## Google konci s free verzi Google Workspace

Google oznamil ze 1. 6. 2022 konci s free verzi Google Workspace, drive G Suite,
drive Google Apps. Mam jeste ten ucet s 50 free emaily, tak me to celkem mrzi.
A mam tech Google Workspacu vice.

Google jiz dlouho limitoval pridavani dalsich domen do uctu, takze jsem musel
segry Google Workspace account presunout do te placene verze pri jeji svatbe.
A take do toho sveho 50 uctoveho accountu jsem nemohl dat firemni domenu.

Neni to prvnu Google Workspace, ktery platim.

## Alternativy k Google Workspace

Toto jsou pro me akceptovatelni poskytovatele emailu

- Fast Mail - Spolehlivý poskytovatel pokud nechcete Google
- Proton Mail - Šifrovaný email, má výhody i nevýhody. Je hodně bezpečný, ale například jej nemůžete dát do aplikace Mail na iPhone (nebojte, mají svoji appku).
- Seznam Email Profi - Email na vlastní doméně od Seznamu, do 10 uživatelů zdarma
- Microsoft Outlook - Soucast Office 365
- Apple iCloud - Email na vlastni domene je zatim beta

Pak jsou moznosti, co bych moc nedoporucoval

- Zoho - Indicka kopie Google Workspace - porad ma 10 uctu zdarma, ale jsou to Indove
- Vlastni email server - Jednoducha variata je provozovat [Poste.io](https://poste.io), ale mit vse SPF, DKIM, DMARC, ... je umeni
- Cesky webhosting - Hostigum v tomhle take neduveruji, sice budou mit asi mailserver nasteveny lepe nez ja, ale neda se to srovnat s velkymi poskytovateli.


### Free alternativa

Jedina free alternativa je Email Profi od Seznamu. A tam mi porad chybi kalendar
(respektive Google Kalendar), a dalsi veci. A porad je to "maly lokalni" provider.

### Ostatni alternativy

Ostatni alternativy nejsou v zasade vyrazne levnejsi nez Google.


`}
  />
);

export default Page;
