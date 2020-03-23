import React from "react";
import Header from "@app/skoleni.io/components/Header";
import { Container } from "react-bootstrap";

const Course = () => (
  <>
    <Header
      header="Skoleni Gitu"
      lecturer="Ondrej Sika"
      lecturerId="ondrejsika"
    />
    <Container>
      <h4>Co se naučíte</h4>
      <p>
        V kurzu pro začátečníky si řekneme co to vlastně verzování je a
        seznámíme se se základními příkazy a workflow GITu. Ukážu Vám, jak v
        GITu pracovat s větvemi, stashem a dalšími jednoduchými konstrukty,
        které Vám v mnohém usnadní vývoj software. Naučím Vás pracovat s
        nástroji, jako je Github a nebo Gitlab.
      </p>
      <h4>Instalace a konfigurace GITu</h4>
      <ul>
        <li>Nový repozitář</li>
        <li>Základní ovládání GITu</li>
        <li>Práce v jedné větvi</li>
        <li>merge, rebase (silná stránka Gitu)</li>
        <li>Práce se vzdálenými repozitáři</li>
        <li>Záchrana smazaných dat z repozitáře</li>
      </ul>
      <h4>Průběh školení</h4>
      Školení probíhá buď u mě v kanceláři nebo mohu přijet k Vám. Na školení je
      potřeba vlastní notebook, na operačním systému nezáleží. GIT si společně
      nainstalujeme a nakonfigurujeme, řípadně si vytvoříme SSH klíče na práci
      se vzdálenými repozitáři. Při školení si ukážeme všechny konstrukty na
      připravených ukázkových repozitářích, v případě zájmu na Vašem vlastním
      projektu. Vše si podrobně vysvětlíme a vyzkoušíme. Po absolvování školení
      obdržíte veřejně auditovatelný certifikát o účasti.
      <h4>Pro koho je kurz určený</h4>
      Školeni je určeno primárně pro vývojáře, kteří neverzují vůbec nebo
      nepouzžívají Git. Zároveň je vhodné i pro ty, kteří Git nevyužívají na
      100% (git commit, git pull, git push). Ať jde o malé weby nebo velké
      projekty, Git si najde uplatnění. Dále je kurz vhodný i pro ty, kteří
      nepíší kód tak často, ale občas potřebují něco zaverzovat, například
      nějaké migrační skripty DB a nebo konfiguraci serverů. Git pomůže i DBA
      nebo DevOps.
    </Container>
  </>
);

export default Course;
