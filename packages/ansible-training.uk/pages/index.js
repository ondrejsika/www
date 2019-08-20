import Markdown from "@app/common/components/Markdown";
import Header from "@app/course-landing/components/Header";
import HeaderLink from "@app/course-landing/components/HeaderLink";
import TextFrame from "@app/course-landing/components/TextFrame";
import TextFrameWithImage from "@app/course-landing/components/TextFrameWithImage";
import MyClients from "@app/course-landing/components/MyClients";
import ThreeCol from "@app/course-landing/components/ThreeCol";
import TwoCol from "@app/course-landing/components/TwoCol";
import Navigation from "@app/course-landing/components/Navigation";
import Recommendation from "@app/course-landing/components/Recommendation";
import Contact from "@app/course-landing/components/Contact";
import FooterOndrejSika from "@app/course-landing/components/FooterOndrejSika";
import Head from "next/head";
import site from "@app/ansible-training.uk/config";

const Index = () => (
  <div>
    <Head>
      <title>Ansible Training, Ondrej Sika - ansible-training.uk</title>
    </Head>
    <Navigation location={site.location} />
    <Header
      websiteHeader="Ansible Training UK 🇬🇧"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.uk/?x_source=ansible-training.uk"
      logoUrl="/static/ansible.png"
    >
      <HeaderLink url="https://ondrej-sika.uk/training/ansible/inquiry/?x_source=ansible-skoleni.uk">
        Request training
      </HeaderLink>
      <HeaderLink url="https://ondrej-sika.uk/contact/?x_source=ansible-training.uk">
        Contact me
      </HeaderLink>
    </Header>
    <div className="container container-width">
      <TextFrame>
        <Markdown
          source={`
### What is Ansible?
Ansible is a tool for mass configuration and deployment management. You declare the desired state of the server and services and Ansible will do the execution. You don't have to worry about the state the current server or applications are in now; Ansible turns it into desired state. The entire configuration is versioned using Git, and you will never lose view of where everything is being deployed or miss any critical steps during the process. Ansible will help you with application deployment and quicker and safer server administration.
        `}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Course Description
The training is ran as a two-day hands-on workshop, where you can try what you learn in practice. We will install Ansible together and describe how it works and introduce the basic concepts. We will see how to configure a server (tester on DigitalOcean) and deploy an application from the beginning to the end. Starting with the installation of system packages, application download from Git, creation of templates for configuration scripts, and secrets setup (e.g., passwords). After this course, you will be able to use Ansible on a daily basis and simplify deployment and configuration routines.
        `}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Course Outline

- Basic insights into automation
- Basic insights into Ansible
- Ansible installation (for those who did not install at home)
- Basic Ansible controls
- Playbooks
- Templates
- Secrets
- Writing own modules
- Ansible & CI/CD (Gitlab CI)
        `}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Who Should Attend
This training is primarily aimed at admins and DevOps who want to start using Ansible. At the same time, developers who deploy their applications (even into test environments) and want to simplify this process, will also find it useful.
        `}
        />
        <TwoCol
          col1={
            <Markdown
              source={`
#### Skill Requirements
- Basic Linux knowledge
- Basic Terminal knowledge
            `}
            />
          }
          col2={
            <Markdown
              source={`
#### Technical Requirements
- Have Ansible installed, instructions: [here](https://ondrej-sika.uk/ansible/install/)
- Access to the internet (https, ssh) - better without corporate proxy
            `}
            />
          }
        />
      </TextFrame>
      <TextFrameWithImage
        header="Lektor: Ondrej Sika"
        imgUrl="/static/ondrejsika.jpg"
      >
        <Markdown
          source={`
A little bit of background about myself, I am a software engineer at Slush Pool and DevOps consultant, architect & lecturer. I use Ansible as a tool for server administration. I try to use Ansible for the administration of everything I can - from database users to DNS records on Cloudflare.
        `}
        />
      </TextFrameWithImage>

      <MyClients lang={site.lang} />
      <ThreeCol
        header="Reference"
        col1={<Recommendation id="bohemiaenergy" lang={site.lang} />}
        col2={<Recommendation id="sit" lang={site.lang} />}
        col3={<Recommendation id="vse" lang={site.lang} />}
      />
      <TextFrame>
        <Markdown
          source={`
### Pricing

Price for the two-day hands-on Ansible training

- Open to public (self-funded): 800 GBP excl. VAT
- Open to public (company-funded): 1000 GBP excl. VAT
- On-site training (on-site): 3000 GBP excl. VAT
`}
        />
      </TextFrame>

      <TextFrame>
        <Markdown
          source={`
### Contact

#### Ondrej Sika
<ondrej@ondrejsika.com>
<br>[ondrej-sika.uk](https://ondrej-sika.uk)
<br>[+420 773 452 376](tel:+420773452376)
`}
        />
      </TextFrame>

      <TextFrame>
        <Markdown
          source={`
### I Want the Ansible Training

If you are interested in Ansible workshop or have any questions, please let me know.

`}
        />
        <p className="text-center">
          <a
            href="https://ondrej-sika.uk/training/ansible/inquiry/?x_source=ansible-training.uk"
            className="btn btn-large btn-success"
          >
            Inquire Ansible Training
          </a>
        </p>
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Related Courses

[Gitlab CI](https://ondrej-sika.uk/training/gitlab-ci)
`}
        />
      </TextFrame>
    </div>
    <FooterOndrejSika />
  </div>
);

export default Index;
