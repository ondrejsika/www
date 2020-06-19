import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Bitcoin"
    subheader="Vsechno co potrebujete vedet o Bitcoinu. Prehledne! Ne Blockchain, ne crypto."
    hideNewsletter={true}
    markdown={`
## Investice do Bitcoinu

Nejsem investicni poradce ani obchodnik. Tyto pravidla mi rekl pritel Daniel Steigerwald a me prisly velmi rozumne.

1. Kupovat pouze Bitcoin
2. Prvni investice by mela byt maximalne jeden mesicni plat
2. Neprodavat pri prvnim poklesu ceny

Souhlasim s temito pravidly, ale spis doporucuji jak to delam ja. Pravidelne si davam do Bitcoinu penize, kazdy mesic stejnou castku, at je cena jakakoliv. Ano, nakupoval jsem i za cenu 18 000 USD.

Bitcoin ma smysl pouze koupit. Tezeni nema smyl, pro jednotlivce, kteri nechteji investovat miliony. Ruzne online & cloud nesmysly (cloud mining, klikacky) jsou scam.

## Penezenky

- Hardware - Pro velke castky, Bitcoinova banka ve vlastnich rukou
- Aplikace - Pro male castky, vzdy po ruce, jednoduse pouzitelne

#### Trezor

Trezor je prvni hardware penezenka a zaroven je od ceskych tvurcu. Trezor je idealni pro uchovani vetsich castek. Jako hardware penezenka je to bezpecne misto kde mit ulozene Bitcoiny. Cena je 59 EUR (cca 1600 CZK).

[Koupit na shop.trezor.io](https://shop.trezor.io/product/trezor-one-white)

#### Blockstream Green

Blockstream Green je mobilni a desktopova penezenka. Je idealni na male mnozstvi penez, neni tak bezpecna jako Trezor, ale na penize na kafe staci.

[Blockstream Green website](https://blockstream.com/green/) (odkazy na verzi pro iPhone, Mac, Android, Linux a Windows)

## Nakup Bitcoinu

Bitcoin ma smysl pouze koupit. Moznosti nakupu je nekolik, zde jsou ty spolehlive a doporucuji pouzivat tyto. Pokud budete chtit koupit Bitcoiny i jinde, dejte mi vedet.

#### Bitcoin ATM (Bankomaty)

Nejjednodussi nakup Bitcoinu je z bankomatu. Vlozite hotovost a dostanete Bitcoiny na Vasi penezenku. V bankomatech je fee (rozdil oproti burze) od 4 do 15 procent.

Mapu bankomatu najdete na: [Coin ATM Radar](https://coinatmradar.com/)

#### Nakup kartou v Trezoru

Pokud chete koupit Bitcoin kartou primo z Trezoru, jde to velmi jednoduse primo z [wallet.trezor.io](https://wallet.trezor.io). Poplatek je cca 13 procent.

#### Smenarny

Bitcoin se da koupit i ve smenarnach, poplatky jsou cca 3 az 5 procent. Jako smenarnu doporucuji [Simple Coin](https://client.simplecoin.eu/cs).

#### Local Bitcoins

[Local Bitcoins](https://localbitcoins.com/) je sluzba, ktera propojuje lidi, kteri chteji koupit a prodat Bitcoiny. Platit se da ruzne: bankovni prevod, revolut, osobne. Bezpecnost transakce je zarucena portalem. Fee jsou tam nizsi, cca 2 az 10 procent, podle prodejce.

#### Burza

Nejlevnejsi je nakup primo na burze. Je tam vsak slozitejsi registrace a deposit typicky v eurech. Pro vetsi objemy je to nejlepsi cesta. Z burz doporucuji [Coinmate](https://coinmate.io/) (stoji za ni cesi) a [Bitstamp](https://bitstamp.net/).

## Muj Bitcoin Newsletter

Nepravidelny newsletter s dulezitymi informacemi ohledne Bitcoinu. [Chci byt v obraze](https://sika.link/bitcoin-newsletter)

`}
  />
);

export default Page;
