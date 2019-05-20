import '../css'

import Header from '@app/course-landing/components/Header';
import HeaderLink from '@app/course-landing/components/HeaderLink';
import TextFrame from '@app/course-landing/components/TextFrame';
import TextFrameWithImage from '@app/course-landing/components/TextFrameWithImage';
import MyClients from '@app/course-landing/components/MyClients';
import ThreeCol from '@app/course-landing/components/ThreeCol';
import TwoCol from '@app/course-landing/components/TwoCol';
import Navigation from '@app/course-landing/components/Navigation';
import ReactMarkdown from 'react-markdown'
import FooterOndrejSika from '@app/course-landing/components/FooterOndrejSika';
import Recommendation from '@app/course-landing/components/Recommendation';
import Head from 'next/head';

let site = {
  lang: 'en'
}

const Index = () => (
  <div>
    <Head>
        <title>Git training, Ondrej Sika - git-training.uk</title>
    </Head>
    <Navigation />
    <Header
      websiteHeader="Git training"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.uk/?x_source=git-training.uk"
      logoUrl="/static/git.svg"
    >
      <HeaderLink url="https://ondrej-sika.cz/skoleni/kubernetes/poptavka/?x_source=skoleni-kubernetes.cz">Nezávazně poptat školení</HeaderLink>
      <HeaderLink url="https://ondrej-sika.cz/kontakt/?x_source=skoleni-kubernetes.cz">Kontaktovat</HeaderLink>
    </Header>
    <div className="container container-width">
      <TextFrame>
        <ReactMarkdown source={`
### What is Git?
Git is a modern versioning tool that has become an industry standard among developers. Individuals, startups and corporations use it on a daily basis. Git offers a simple simultaneous collaboration with more people on different parts of a project. You won't face the issue of disrupting each other's work or not being able to access the latest versions. The collaboration on a project can also be improved using Gitlab, a platform for the design, development and running of software (learn more about Gitlab in a standalone course).
`}/>
      </TextFrame>
      <TextFrame>
        <ReactMarkdown source={`
### Course Description
During this course, you will find out why it is beneficial to use Git, how it works (why there are no substitutes) and best practice. You will be shown everything from the installation and basic Git setup, simple individual work in one branch to work in a team with multiple branches using merge strategies (merge, rebase). The pros and cons of both will be explained, and you can choose which one is better suited for your needs. Also, you will be shown how to get out of unexpected situations like 'I deleted everything by accident' etc.
`}/>
      </TextFrame>
      <TextFrame>
        <ReactMarkdown source={`
### Course Outline
- Installation and Git Configuration
- Custom Repository
- Basic Git controls
- Work in one branch
- Work in branches - merge, rebase (strength of Git)
- Work with remote repositories
- Recovery of erased data from the repository

`}/>
      </TextFrame>
      <TextFrame>
        <ReactMarkdown source={`
### Who Should Attend
This training course is primarily aimed at developers who don't do versioning or aren't using Git. Also, for those who make use of Git for 100% (Git Commit, Git Pull, Git Push). You can find a use for Git when it comes to a plentitude of projects, like small websites or bigger projects. Also, the course is useful for people that don't code frequently but from time to time need to reserve, e.g. migration scripts DB or server config. Git can help DBAs or DevOps.

`}/>
        <TwoCol
          col1={
            <ReactMarkdown source={`
#### Skill Requirements
- Basic programming
- Basic Terminal knowledge
- Basic Git knowledge beneficial

            `}/>
          }
          col2={
            <ReactMarkdown source={`
#### Technical Requirements
- Have Git installed
- Access to the internet - ideally without corporate proxy, or proxy set up in Docker

            `}/>
          }
        />
      </TextFrame>
      <TextFrameWithImage
        header="Lektor: Ondrej Sika"
        imgUrl="/static/ondrejsika.jpg"
      >
        <ReactMarkdown source={`
A little bit of background about myself, I am a software developer for Slush Pool and a trainer. I have 7 years of experience with Git on the commercial software development side. I can't imagine the day-to-day work without Git. Next to source codes, I also version configuration, server config,... I train the topics surrounding versioning and software development for over three years. This course is the one that I started with and is still popular.
<br/><br/>
For more information on all my courses that I offer, visit ondrej-sika.cz.
<br/><br/>
Get in touch if you have any questions - happy hearing from you!
        `}/>
        </TextFrameWithImage>

      <MyClients HeaderClients="References" />
      <ThreeCol header="Reference"
        col1={
          <Recommendation id="dimensiondata" lang={site.lang}/>
        }
        col2={
          <Recommendation id="bohemiaenergy" lang={site.lang}/>
        }
        col3={
          <Recommendation id="sit" lang={site.lang}/>
        }
      />
      <TextFrame>
        <ReactMarkdown source={`
### Mám zájem o školení
Pokud máte zájem o školení, neváhejte mě kontaktovat - [Nezávazně poptat školení](https://ondrej-sika.cz/skoleni/git/poptavka/)
`}/>
      </TextFrame>

      <TextFrame>
        <ReactMarkdown source={`
### Pricing
Pokud máte zájem o školení u vás ve firmě, [nezávazně jej poptejte](https://ondrej-sika.cz/skoleni/git/poptavka/) nebo mi napište email na ondrej@ondrejsika.com
- Open to public (self funded): x GBP excl. VAT
- Open to public (company funded): x GBP excl. VAT
- Workplace training (on-site): x GBP excl. VAT
        `}/>
      </TextFrame>
      <TextFrame header="Navazující kurzy">
        <a href="https://ondrej-sika.uk/gitlab">Gitlab CI</a>
      </TextFrame>
    </div>
    <FooterOndrejSika />
  </div>
)

export default Index
