import '../css'

import ReactMarkdown from 'react-markdown'
import Header from '@app/course-landing/components/Header'
import HeaderLink from '@app/course-landing/components/HeaderLink'
import TextFrame from '@app/course-landing/components/TextFrame';
import TextFrameWithImage from '@app/course-landing/components/TextFrameWithImage';
import MyClients from '@app/course-landing/components/MyClients';
import ThreeCol from '@app/course-landing/components/ThreeCol';
import TwoCol from '@app/course-landing/components/TwoCol';
import Navigation from '@app/course-landing/components/Navigation';
import Recommendation from '@app/course-landing/components/Recommendation';
import Contact from '@app/course-landing/components/Contact';
import FooterOndrejSika from '@app/course-landing/components/FooterOndrejSika';
import Head from 'next/head'

let site = {
  lang: 'en'
}

const Index = () => (
  <div>
    <Head>
        <title>Ansible training, Ondrej Sika - ansible-training.uk</title>
    </Head>
    <Navigation/>
    <Header
      websiteHeader="Ansible training"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.uk/?x_source=ansible-training.uk"
      logoUrl="/static/ansible.png"
    >
      <HeaderLink url="https://ondrej-sika.cz/skoleni/ansible/poptavka/?x_source=ansible-skoleni.cz">Nezávazně poptat školení</HeaderLink>
      <HeaderLink url="https://ondrej-sika.cz/kontakt/?x_source=ansible-skoleni.cz">Kontaktovat</HeaderLink>
    </Header>
    <div className="container container-width">
      <TextFrame>
        <ReactMarkdown source={`
### What is Ansible?
Ansible is a tool for mass configuration and deployment management. You declare the desired state of the server and services and Ansible will do the execution. You don't have to worry about in which state the server or applications are now; Ansible will take care of the desired result (benefits of declarative syntax - e.g., shell script is imperative - carry out the following x and y). The entire configuration is versioned using Git, and it won't happen that you would lose view of where is deployed what or that you would miss any critical step. Ansible will help with application deployment and quicker and safer server administration.
        `}/>
      </TextFrame>
      <TextFrame>
        <ReactMarkdown source={`
### Course Description
The training is run as a workshop, where you can try what you learn in practice. We will install Ansible together and describe how it works and what are the basic concepts. We will see how to configure a server (tester on DigitalOcean) and deploy an application from beginning to end. Starting with the installation of system packages, application download from Git, creation of templates for configuration scripts and secrets setup (e.g., passwords). After this course, you will be able to use Ansible on a daily basis and simplify deployment and configuration routines.
        `}/>
      </TextFrame>
      <TextFrame>
        <ReactMarkdown source={`
### Course Outline
- Basic insights into Ansible
- Ansible installation (for those who did not install at home)
- Basic Ansible controls
- Playbooks
- Moduly
- Templates
- Secrets
        `} escapeHtml={false}/>
      </TextFrame>
      <TextFrame>
        <ReactMarkdown source={`
### Who Should Attend
This training is primarily aimed at admins and DevOps who want to start using Ansible. At the same time, developers who deploy their applications (even into test environments) and want to simplify this process, will also find it useful.
        `}/>
        <TwoCol
          col1={
            <ReactMarkdown source={`
#### Skill Requirements
- Basic Linux knowledge
- Basic Terminal knowledge
            `} escapeHtml={false}/>
          }
          col2={
            <ReactMarkdown source={`
#### Technical Requirements
- Have Ansible installed, instructions: [here](https://www.ondrej-sika.uk/ansible/install/)
- Access to the internet - ideally without corporate proxy, or proxy set up in Docker
            `} escapeHtml={false}/>
          }
        />
      </TextFrame>
      <TextFrameWithImage
        header="Lektor: Ondrej Sika"
        imgUrl="/static/ondrejsika.jpg"
        >
        <ReactMarkdown source={`
A little bit of background about myself, I am a software developer for Slush Pool and a trainer. I use Ansible as a tool for server administration and for PC administration (tech with Linux, I was using Puppet as the drive, but I transferred to Ansible). I try to use Ansible for the administration of everything I can - from database users to DNS records on Cloudflare.
        `}/>
      </TextFrameWithImage>

      <MyClients lang={site.lang}/>
      <ThreeCol header="Reference"
        col1={
          <Recommendation id="bohemiaenergy" lang={site.lang}/>
        }
        col2={
          <Recommendation id="sit" lang={site.lang}/>
        }
        col3={
          <Recommendation id="vse" lang={site.lang}/>
        }
      />

      <TextFrame>
        <ReactMarkdown source={`
### Mám zájem o školení
Pokud máte zájem o školení, neváhejte mě kontaktovat - [Nezávazně poptat školení](https://ondrej-sika.cz/skoleni/ansible/poptavka/)
`}/>
      </TextFrame>
      <TextFrame>
        <ReactMarkdown source={`
### Pricing
Pokud máte zájem o školení u vás ve firmě, [nezávazně jej poptejte](https://ondrej-sika.cz/skoleni/ansible/poptavka/) nebo mi napište email na <ondrej@ondrejsika.com>

Open to public (self-funded): GBP excl. VAT
Open to public (company-funded): GBP excl. VAT
Workplace training (on-site): GBP excl. VAT

`} escapeHtml={false}/>
      </TextFrame>
      <Contact />
    </div>
    <FooterOndrejSika />
  </div>
)

export default Index
