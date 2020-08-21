import React from "react";
import styled from "styled-components";
import BaseLandingPage from "@app/ondrejsika-theme/layouts/BaseLandingPage";
import Translate from "@app/common/components/Translate";

const A = styled.a`
  font-size: 1em;
  color: #141480;
  text-decoration: underline;
`;

const LandingPage = props => (
  <BaseLandingPage
    site={props.site}
    title={
      {
        en: "Ondrej Sika - IT Training, Consulting and Workshops in Europe",
        cs: "Ondrej Sika - IT Školení, konzultace a workshopy"
      }[props.site.lang || "en"]
    }
    headerText={
      <Translate
        lang={props.site.lang}
        en={
          <>
            My name is{" "}
            <BaseLandingPage.TextBeige>Ondrej Sika</BaseLandingPage.TextBeige>{" "}
            <br />
            and I will help you with{" "}
            <BaseLandingPage.TextBeige>DevOps</BaseLandingPage.TextBeige>{" "}
            pipeline.
          </>
        }
        cs={
          <>
            Jsem{" "}
            <BaseLandingPage.TextBeige>Ondřej Šika</BaseLandingPage.TextBeige>
            <br /> a pomohu vám s open-source
            <br />
            <BaseLandingPage.TextBeige>
              DevOps technologiemi
            </BaseLandingPage.TextBeige>
            !
          </>
        }
      />
    }
    headerAbout={
      <Translate
        lang={props.site.lang}
        en="Together, we will reduce IT costs, solve the technological debt and prepare your IT architecture for rapid scaling."
        cs="Snížime spolu náklady na IT, vyřešíme technologický dluh a připravíme Vaši IT architekturu na rapidní škálování."
      />
    }
    findOutMore={
      <Translate lang={props.site.lang} en="Find out more" cs="Zjistit více" />
    }
    sectionBoxesHeader={
      <Translate
        lang={props.site.lang}
        en="I can help you with"
        cs="S ČÍM VÁM POMOHU"
      />
    }
    boxHeader1={
      <Translate
        lang={props.site.lang}
        en="DEVOPS PIPELINE IMPLEMENTATION"
        cs="IMPLEMENTACE DEVOPS PIPELINE"
      />
    }
    boxText1={
      <Translate
        lang={props.site.lang}
        en="I will implement open-source DevOps in your company. I will set up tools and processes so that you automatically, reliably and quickly deliver new functionality to your customers."
        cs="Zavedu open-source DevOps do Vaší firmy. Nastavím nástroje a procesy tak, abyste automaticky, spolehlivě a rychle doručovali novou funkcionalitu Vašim zákazníkům."
      />
    }
    boxHeader2={
      <Translate
        lang={props.site.lang}
        en={
          <span>
            CONSULTATIONS
            <br />& SUPPORT
          </span>
        }
        cs={
          <span>
            KONZULTACE
            <br />& SUPPORT
          </span>
        }
      />
    }
    boxText2={
      <Translate
        lang={props.site.lang}
        en="I will solve your specific problem in the form of consultations, thus avoiding unnecessary and expensive mistakes. Me and my team will support you in the operation of your DevOps infrastructure in the form of our support plans."
        cs="Vyřeším Váš konkrétní problém formou konzultací, čímž se vyvarujete zbytečných a drahých chyb. Já a můj tým Vám budeme oporou při provozu Vaší DevOps infrastruktury formou jednoho z našich support plánů."
      />
    }
    boxHeader3={
      <Translate
        lang={props.site.lang}
        en={
          <span>
            TRAINING
            <br /> YOUR TEAM
          </span>
        }
        cs={
          <span>
            ŠKOLENÍ
            <br /> VAŠEHO TÝMU
          </span>
        }
      />
    }
    boxText3={
      <Translate
        lang={props.site.lang}
        en="I will train your team so that they can create a DevOps pipeline and work with it effectively. They will learn everything at hands-on workshops, after which they will be able to safely manage and quickly develop your DevOps environment."
        cs="Vyškolím Váš tým tak, aby mohl sám a efektivně vytvořit DevOps pipeline a pracovat s ním. Vše si vyzkoušíme na hands-on workshopech po jejichž absolvování budete schopni bezpečně spravovat a rychle rozvíjet Vaše DevOps prostředí."
      />
    }
    trainingHeader={
      <Translate lang={props.site.lang} en="My Training" cs="Moje Školení" />
    }
    sectionMyClientsHeader={
      <Translate lang={props.site.lang} en="My clients" cs="moji klienti" />
    }
    sectionContactMeHeader={
      <Translate lang={props.site.lang} en="Contact me" cs="KONTAKTUJTE MĚ" />
    }
    call={
      <Translate lang={props.site.lang} en="Call me" cs="Naplánujte hovor" />
    }
    email={
      <Translate
        lang={props.site.lang}
        en="Send me an email"
        cs="Poslat&nbsp;email"
      />
    }
    sectionMyStoryHeader={
      <Translate lang={props.site.lang} en="ABOUT ME" cs="O MĚ" />
    }
    MyStoryText={
      <Translate
        lang={props.site.lang}
        en={
          <>
            <p>
              I have been involved in software development and DevOps since
              2009, teaching my practical experiences since 2013.
            </p>
            <p>
              I worked for small companies, startups and large corporations in
              order to streamline the process of their software development,
              testing and deployment. Today, I focus primarily on DevOps:
              designing the software stack, development and operating
              environment in companies.
            </p>
            <h4>Training</h4>
            <p>
              All my courses are hands-on workshops. When creating them, I
              utilized many years of my experience in developing, testing and
              operating software projects.
            </p>
          </>
        }
        cs={
          <>
            <p>
              Od roku 2009 se zabývám vývojem software a DevOps. Své praktické
              zkušenosti předávám na školeních od roku 2013. Pracoval jsem pro
              malé firmy, startupy i velké korporace s cílem zefektivnit jim
              proces vývoje, testování a nasazování software. Dnes se primárně
              věnuji DevOps: návrhem softwarového stacku, vývojového a
              provozního prostředí ve firmách.
            </p>
            <p>
              Práci s nástroji jako Docker, Kubernetes a Terraform se snažím co
              nejvíce automatizovat, aby lidé nemuseli dělat rutiny, které můžou
              jednoduše dělat stroje.
            </p>
            <h4>Školení</h4>
            <p>
              Také se hodně věnuji školení, všechny kurzy jsou formou workshopů
              (hands-on) a stavím je na svých dlouholetých znalostech a
              zkušenostech z vývoje, testování a provozování softwarových
              projektů. Všechny kurzy a školení dělám v českém nebo anglickém
              jazyce.
            </p>
          </>
        }
      />
    }
    sectionWhyMeHeader={
      <Translate
        lang={props.site.lang}
        en="CONSIDER MY SERVICES"
        cs="PROČ DO TOHO JÍT SE MNOU?"
      />
    }
    point1={
      <Translate
        lang={props.site.lang}
        en="Years of experience"
        cs="Dlouholeté zkušenosti"
      />
    }
    text1={
      <Translate
        lang={props.site.lang}
        en="I've worked 5 years as a senior software engineer for Braiins.com where I've helped guys to rebuild Slush Pool (the very first Bitcoin mining pool) to new distributed infrastructure. I left Braiins to focus on my freelance career afterwards. "
        cs="Pět let jsem pracoval jako senior software engineer pro Braiins.com a pomáhal jsem s přestavbou globálního Bitcoinového těžařského poolu na lepší distribuovanou infrastrukturu. Paralelně s touto prací jsem začal od roku 2013 dělat freelance školení a konzultace."
      />
    }
    point2={
      <Translate
        lang={props.site.lang}
        en="In-depth tech overview"
        cs="Komplexní pohled"
      />
    }
    text2={
      <Translate
        lang={props.site.lang}
        en="I'll set up your DevOps pipeline utilizing following tech: Git, Gitlab CI, Ansible, Docker, Kubernetes, Prometheus, Sentry, ELK / EFK, Rancher, Terraform, Public Cloud: [AWS, DigitalOcean, Azure, GCP], Private Cloud: [Proxmox, OpenStack]."
        cs="Na míru Vám poskládám DevOps pipeline z těchto technologií: Git, Gitlab CI, Ansible, Docker, Kubernetes, Prometheus, Sentry, ELK / EFK, Rancher, Terraform, Public Cloud: [AWS, DigitalOcean, Azure, GCP], Private Cloud: [Proxmox, OpenStack] ."
      />
    }
    point3={
      <Translate
        lang={props.site.lang}
        en="Excellent references"
        cs="Výborné reference"
      />
    }
    text3={
      <Translate
        lang={props.site.lang}
        en={
          <span>
            Check out my 60+ positive recommendations on my{" "}
            <A href="https://www.linkedin.com/in/ondrejsika/">LinkedIn</A>{" "}
            profile.
          </span>
        }
        cs={
          <span>
            Veřejně mě doporučilo už víc než 60 účastníků mých školení a já jim
            ze tyto reference moc děkuju. Najdete je na mém{" "}
            <A href="https://www.linkedin.com/in/ondrejsika/">LinkedIn</A>{" "}
            profilu.
          </span>
        }
      />
    }
    point4={
      <Translate
        lang={props.site.lang}
        en="High openness"
        cs="Maximální otevřenost"
      />
    }
    text4={
      <Translate
        lang={props.site.lang}
        en="I believe in open source. Therefore, many of my projects which are not under client's NDA are available for free on my Github account."
        cs="Věřím v open source. Proto mám většinu své práce, která nepodléhá NDA, veřejně na Githubu."
      />
    }
    // sectionStory="IMPLEMENTATION STUDY"
    sectionCooperationText={
      <Translate
        lang={props.site.lang}
        en="Interested in cooperation?"
        cs="Máte dotaz nebo zájem o spolupráci?"
      />
    }
    writeMe={
      <Translate lang={props.site.lang} en="Contact me" cs="Napište mi" />
    }
  />
);

export default LandingPage;
