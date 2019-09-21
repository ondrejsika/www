import "@app/sika-kraml.de/css";
import ReactMarkdown from "react-markdown";
import Header from "@app/ondrej-sika.cz/components/Header";
import TextArea from "@app/ondrej-sika.cz/components/TextArea";
import TwoCol from "@app/ondrej-sika.cz/components/TwoCol";
import References from "@app/ondrej-sika.cz/components/References";
import Price from "@app/ondrej-sika.cz/components/Price";
import Form from "@app/ondrej-sika.cz/components/Form";
import Head from "next/head";
import git from "@app/data/pictures/courses/git.svg";
import { stripIndent } from "common-tags";

let site = {
  lang: "de"
};

{
  /* TODO translate */
}

const Index = () => (
  <div>
    <Head></Head>
    <Header
      websiteHeader="Git Training"
      inquiryBtn="Ask for a company training"
      logo={git}
    ></Header>
    <div className="container course-page">
      <ReactMarkdown
        source={stripIndent`
        ### What is Git?
        Git is a modern versioning tool that has become an industry standard among developers. Individuals, startups and corporations use it on a daily basis. Git offers a simple simultaneous collaboration with more people on different parts of a project. You won't face the issue of disrupting each other's work or not being able to access the latest versions. The collaboration on a project can also be improved using Gitlab, a platform for the design, development and running of software projects.
        
        ### Course Description
        During this one day hands-on workshop, you will find out why it is beneficial to use Git, how it works (why there are no substitutes) and best practices. You will be shown everything from the installation and basic Git setup, simple individual work in a one branch to work in a team with multiple branches using merge strategies (merge, rebase) and Gitlab. The pros and cons of both will be explained, and you can choose which one is better suited for your needs. Also, you will be shown how to get out of unexpected situations like 'I deleted everything by accident' etc.
        
        ### Course Outline
        - Installation and Configuration
        - New Repository
        - Basic Git controls
        - Work in one branch
        - Work in branches - merge, rebase (strength of Git)
        - Work with remote repositories
        - Workflow with Gitlab
        - Recovery of erased data from the repository
        - Tips
        
        ### Who Should Attend
        This training course is primarily aimed at developers who don't do versioning or aren't using Git. Also,for those who make use of Git for 100% (git commit, git pull, git push). You can find a use for Git when it comes to a plentitude of projects, like small websites or bigger projects. Also, the course is useful for people that don't code frequently like DevOps.
        `}
      />
      <TwoCol
        col1={
          <ReactMarkdown
            source={stripIndent`
            #### Skill Requirements
            - Basic Terminal knowledge
            - Basic Git knowledge beneficial
            `}
            escapeHtml={false}
          />
        }
        col2={
          <ReactMarkdown
            source={stripIndent`
            #### Technical Requirements
            - Have Git installed
            - Access to the internet (https) - ideally without corporate proxy
            `}
            escapeHtml={false}
          />
        }
      />
    </div>
    <References ids={["vistag", "oxy"]} lang={site.lang} />
    <Price PriceHeader="Preis" PriceBtn="Workshop anfragen">
      Preis für den eintägigen Git Hands-On-Workshop
      <br />
      <br />
      <ReactMarkdown
        source={stripIndent`
        - Öffentlicher Termin (Privatkunde): _____ € zzgl. MwSt.
        - Öffentlicher Termin (Unternehmenskunde): _____ € zzgl. MwSt.
        - On-Premise Schulung: _____ € zzgl. MwSt.
        `}
        escapeHtml={false}
      />
    </Price>
    <div className="container">
      <TextArea
        TextHeader="Workshop anfragen"
        TextParagraph="Pflichtfelder sind mit * markiert."
      >
        <Form
          course="Git"
          FormName="Name *"
          FromNamePlaceholder="Max Mustermann"
          FormCompany="Firma"
          FormCompanyPlaceholder="Muster GmbH"
          FormEmail="E-Mail *"
          FormEmailPlaceholder="mm@muster.de"
          FormPhone="Telefon *"
          FormPhonePlaceholder="0176 0000000"
          FormSent="Absenden"
        />
      </TextArea>
    </div>
  </div>
);

export default Index;
