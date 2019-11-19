import Course from "@app/ondrej-sika.cz/layouts/Course";

export default props => (
  <Course
    lang={props.site.lang}
    course_id="git"
    show_sessions={true}
    course_title="Školení Gitu"
    logo="/static/git.svg"
    price_self_funded="6800 CZK"
    price_company_funded="7 999 CZK"
    price_in_house="25 000 CZK"
    location="cz"
    description={`
### Co je to Git
Git je moderní verzovaci nástroj, který se stal de facto standardem mezi vývojáři. Git Vám nabízí jednoduchou kolaboraci na projektu s více lidmi a práci na více částech současně, aniž by jste si zasahovali do rozdělaných projektů nebo je jinak narušovali. Spolupráci na vývoji projektu dále zlepšuje Gitlab, což je kolaborativni platforma na návrh, vývoj a provozování software.
### Jak školení probíhá
Na školení formou workshopu si vysvětlíme, proč je dobré Git používat, jak funguje (proč dnes nemá konkurenty) a best practice.
### Co Vás naučím
- Instalace a konfigurace GITu
- Vytvořit nový repozitář
- Základní ovládání GITu
- Práce v jedné větvi
- Práce ve větvích - merge, rebase (silná stránka Gitu)
- Práce se vzdálenými repozitáři
- Záchrana smazaných dat z repozitáře
### Pro koho je školení určeno
Školení je určeno primárně pro vývojáře, kteří neverzují vůbec nebo nepoužívají Git. Zároveň je vhodné i pro ty, kteří Git nevyužívají na 100% (git commit, git pull, git push). Ať jde o malé weby nebo velké projekty, Git si najde uplatnění. Dále je kurz vhodný i pro ty, kteří nepíšou kód tak často, ale občas potřebují něco zaverzovat, například nějaké migrační skripty DB a nebo konfiguraci serveru. Git pomůže i DBA nebo DevOps.`}
    col1={`
#### Předchozí znalosti
- Základy práce s Linuxem
- Základy práce v terminálu
- Základní znalost Gitu výhodou
`}
    col2={`
#### Technické požadavky
- Nainstalovaný Git
- Přístup na internet - ideálně bez korporátní proxy, případně nastavenou proxy v prohlížeči
`}
    recommendations={["vistag", "oxyCTO"]}
  />
);
