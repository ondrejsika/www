import MainBar from "@app/ondrej-sika.cz/components/MainBar";
import TextWithImg from "@app/ondrej-sika.cz/components/TextWithImg";
import StatisticBar from "@app/ondrej-sika.cz/components/StatisticBar";
import CompaniesBar from "@app/ondrej-sika.cz/components/CompaniesBar";

import Markdown from "@app/common/components/Markdown";

import Head from "next/head";

let site = {
  lang: "cs"
};

let style = {
  fontSize: "1.4em",
  fontWeight: "bold"
};

const Install = () => (
  <div>
    <Head></Head>
    <MainBar MainBarHeader="NABIDKA (SPOLU)PRACE"></MainBar>

    <style
      dangerouslySetInnerHTML={{
        __html: `
       .post-body img {
        width: 30%;
      }
    `
      }}
    />

    <div className="container pt-4 pb-2 post-body">
      <Markdown
        source={`
FAQ: Je tato nabidka aktualni? Ano.

## Technicky asistent

Shanim nekoho kdo mi pomuze pripravovat skoleni a kurzy ohledne programovani, vyvoje software a dev ops. Expanduji v Cechach a hlavne v zahranici (zapad Evropy) a potrebuji pomoct.

Tvym ukolem bude sledovat novinky, psat technicke clanky a zaroven muzes premysled nad novymi kurzy nebo vylepsenim tech soucasnych. Dale se budes starat o weby kurzu, jako je tento, skoleni-git.cz nebo skoleni-docker.cz. Postupem casu i skolit. Zde jsou veci co delam: <https://ondrej-sika.cz/skoleni/>

Vse potrebne ti vysvetlim, pokud prijdes s vlastnimi napady, budu jen rad.

### Nabizim

- Mentoring od nejlepsich
- Zajimavou praci kterou muzes delat odkudkoliv
- Profesni rust a podil na zisku
- Zajimavy plat (DPP nebo IC spoluprace)
- Moznost odmena v BTC

### Pozadavky
- Samostatnost
- Motivace a chut se ucit nove veci ohledne IT a DevOps.
- Cestina, Anglictina
- Podvedomi o technologiich jako je Git, Docker, …

### Vyhodou
- Praha – obcas se budem muset potkat osobne
- Puppet, Continues Integration
- Student IT (CVUT)

Pokud te nabidka zaujala, napis mi email na <ondrej@sika.io>

## Asistentka
Nejsem zrovna dobry v agende a planovani. A potrebuji nekoho kdo mi s tim pomuze.

### Napln prace

- Osobni a firemni agenda
- Planovani a organizace casu
- Faktury, sprava klientu, …
- Propagaci kurzu a skoleni

### Pozaduji
- samostatnost
- chut se ucit
- idealne studentka VS (nebo gymnazia)

### Co nabizim
- zajimavy plat
- min 10hod tydne, horni hranice je takrka neomezena
- Zajimave projekty v CZ, EU, UAE
- praci odkudkoliv
- Svobodu a rust

Pokud te nabidka zaujala, napis mi email na <ondrej@sika.io>
`}
      />
    </div>
  </div>
);

export default Install;
