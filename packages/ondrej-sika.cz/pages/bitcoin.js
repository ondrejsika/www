import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Bitcoin"
    subheader="Všechno co potřebujete vědět o Bitcoinu. Přehledně! Ne Blockchain, ne crypto."
    hideNewsletter={true}
    markdown={`
## Investice do Bitcoinu

Nejsem investiční poradce ani obchodník. Tyto pravidla mi řekl přítel Daniel Steigerwald a mě přišly velmi rozumné.

1. Kupovat pouze Bitcoin
2. První investice by měla být maximálně jeden měsíční plat
2. Neprodávat při prvním poklesu ceny

Souhlasím s těmito pravidly, ale spíš doporučuji postup jak to dělám já. Pravidelně si dávám do Bitcoinu peníze, každý měsíc stejnou částku, ať je cena jakákoliv. Ano, nakupoval jsem i za cenu 18 000 USD/BTC.

Bitcoin má smysl pouze koupit. Těžení nemá smysl pro jednotlivce, kteří nechtějí investovat milióny. Různé online & cloud nesmysly (cloud mining, klikačky) jsou scam.

## Peněženky

- Hardware - Pro velké částky, Bitcoinová banka ve vlastních rukou
- Aplikace - Pro malé částky, vždy po ruce, jednoduše použitelné

#### Trezor

Trezor je první hardware peněženka a zároveň je od českých tvůrců. Trezor je ideální pro uchování větších částek. Jako hardware peněženka je to bezpečné místo, kde mít uložené Bitcoiny. Cena je 59 EUR (cca 1600 CZK).

[Koupíte na shop.trezor.io](https://shop.trezor.io/product/trezor-one-white)

#### Blockstream Green

Blockstream Green je mobilní a desktopová peněženka. Je ideální na malé množství peněz, není tak bezpečná jako Trezor, ale na peníze na kafe stačí.

[Blockstream Green website](https://blockstream.com/green/) (odkazy na verzi pro iPhone, Mac, Android, Linux a Windows)

## Nákup Bitcoinu

Bitcoin má smysl pouze koupit. Možnosti nákupu je několik, zde jsou ty spolehlivé a doporučují je používat. Pokud budete chtít koupit Bitcoiny i jinde, dejte mi vědět.

#### Bitcoin ATM (Bankomaty)

Nejjednodušší nákup Bitcoinu je z bankomatů. Vložíte hotovost a dostanete Bitcoiny na Váši peněženku. V bankomatech je fee (rozdíl oproti burze) od 4 do 15 procent.

Mapu bankomatů najdete na: [Coin ATM Radar](https://coinatmradar.com/)

#### Nákup kartou v Trezoru

Pokud chcete koupit Bitcoin kartou přímo z Trezoru, jde to velmi jednoduše přímo z [wallet.trezor.io](https://wallet.trezor.io). Poplatek je cca 13 procent.

#### Směnárny

Bitcoin se dá koupit i ve směnárnách, poplatky jsou cca 3 až 5 procent. Jako směnárnu doporučuju [Simple Coin](https://client.simplecoin.eu/cs).

#### Local Bitcoins

[Local Bitcoins](https://localbitcoins.com/) je služba, která propojuje lidi, kteří chtějí koupit a prodat Bitcoiny. Platit se dá různě: bankovní převod, revolut, osobně. Bezpečnost transakce je zaručena portálem. Fee jsou tam nižší, cca 2 až 10 procent, podle prodejce.

#### Burza

Nejlevnější je nákup přímo na burze. Je tam však složitější registrace a deposit typicky v eurech. Pro větší objemy je to nejlepší cesta. Z burz doporučuju [Coinmate](https://coinmate.io/) (stojí za ní češi) a [Bitstamp](https://bitstamp.net/).

## Můj Bitcoin Newsletter

Nepravidelný newsletter s důležitými informacemi ohledně Bitcoinu. [Chci být v obraze](https://sika.link/bitcoin-newsletter)

`}
  />
);

export default Page;
