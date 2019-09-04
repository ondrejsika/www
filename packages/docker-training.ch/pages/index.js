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
import Markdown from "@app/common/components/Markdown";
import site from "@app/docker-training.ch/config";
import Link from "next/link";

const Index = () => (
  <div>
    <Head>
      <title>Docker Training, Ondrej Sika - docker-training.ch</title>
    </Head>
    <Navigation location={site.location} />
    <Header
      websiteHeader="Docker Training Switzerland 🇨🇭"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.com/?x_source=docker-training.ch"
      logoUrl="/static/docker-w.svg"
    >
      <HeaderLink url="mailto:ondrej@sika.io?subject=[ondrej-sika.cz] Poptavka firemniho skoleni xxx">
        Request a training
      </HeaderLink>
      <HeaderLink url="https://ondrej-sika.com/contact/?x_source=docker-training.ch">
        Contact me
      </HeaderLink>
    </Header>
    <div className="container container-width">
      <TextFrame>
        <Markdown
          source={`
### What is Docker?
Docker can make your life easier through simplifying the process of R&D, testing, and software usage in your business. Run everything, everywhere. Don’t lose your time waiting for server setups or random library updates. Have the environment as a part of your application.
`}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Course Description
During the two-day workshop, you’ll be shown everything you need to know to be able to use Docker - from creating a custom container image to the Swarm utilisation. This course is very hands-on, and you will be able to practice everything you learn.
`}
        />
      </TextFrame>
      <TextFrame header="">
        <Markdown
          source={`
### Course Outline
- Theory introduction to containers & Docker
- How to install Docker at home or work (for those who did not - do so)
- Basics of Containerisation
- Basics of Images
- Docker Compose - multi-container applications
- Deployment to Swarm
- Preview of deployment to Kubernetes
`}
        />
      </TextFrame>
      <TextFrame header="">
        <Markdown
          source={`
### Who Should Attend
This training course is primarily aimed at complete beginners who have either none or very little experience with Docker. Most of all, Developers and/or DevOps (Server Administrators), or those who want to use Docker in practice or want to find out more about its purpose and if it is something they can implement.
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
- Have Docker installed, instructions: [here](https://ondrej-sika.com/docker/install/)
- Access to the internet - ideally without corporate proxy, or proxy set up in Docker
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
A little bit of background about myself, I am a software engineer at Slush Pool and DevOps consultant, architect & lecturer. I lead mostly Docker courses and CI; they are both closely interrelated. I have four years of experience with Docker on the commercial development side. Other than that I use it daily for development, as well as production, and I cannot imagine working without it.
<br/><br/>
Get in touch if you have any questions - Happy to hearing from you!
`}
        />
      </TextFrameWithImage>

      <MyClients HeaderClients="My clients" />

      <ThreeCol
        header="References"
        col1={<Recommendation id="bohemiaenergy" lang={site.lang} />}
        col2={<Recommendation id="vse" lang={site.lang} />}
        col3={<Recommendation id="sit" lang={site.lang} />}
      />
      <TextFrame>
        <Markdown
          source={`
### Pricing
Price for two days Docker training
- Open to public (self-funded): 800 Eur excl. VAT
- Open to public (company-funded): 1 000 Eur excl. VAT
- On-site training (on-site): 3 000 Eur excl. VAT
`}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### I Want the Docker Training

If you are interested in Docker workshop or have any questions, please let me know.

`}
        />
        <p className="text-center">
          <Link href="https://ondrej-sika.com/training/docker/inquiry/?x_source=docker-training.ch">
            <a className="btn btn-large btn-success">Inquire Docker Training</a>
          </Link>
        </p>
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Related Courses

[Kubernetes](https://ondrej-sika.com/training/kubernetes)
`}
        />
      </TextFrame>
    </div>
    <FooterOndrejSika />
  </div>
);

export default Index;
