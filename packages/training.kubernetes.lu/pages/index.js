import FooterOndrejSika from "@app/course-landing/components/FooterOndrejSika";
import Header from "@app/course-landing/components/Header";
import HeaderLink from "@app/course-landing/components/HeaderLink";
import TextFrame from "@app/course-landing/components/TextFrame";
import TextFrameWithImage from "@app/course-landing/components/TextFrameWithImage";
import MyClients from "@app/course-landing/components/MyClients";
import ThreeCol from "@app/course-landing/components/ThreeCol";
import Recommendation from "@app/course-landing/components/Recommendation";
import TwoCol from "@app/course-landing/components/TwoCol";
import Navigation from "@app/course-landing/components/Navigation";
import Contact from "@app/course-landing/components/Contact";
import Head from "next/head";
import Markdown from "@app/common/components/Markdown";
import site from "@app/training.kubernetes.lu/config";
import Link from "next/link";

const Index = () => (
  <div>
    <Head>
      <title>Kuberneres Training, Ondrej Sika - training.kubernetes.lu</title>
    </Head>
    <Navigation location={site.location} />
    <Header
      websiteHeader="Kuberneres Training 🇱🇺"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.com/lu/?x_source=training.kubernetes.lu"
      logoUrl="/static/kubernetes.png"
    >
      <HeaderLink url="ondrej@sika.io">
        Request training
      </HeaderLink>
      <HeaderLink url="https://ondrej-sika.com/lu/contact/?x_source=training.kubernetes.lu">
        Contact me
      </HeaderLink>
    </Header>
    <div className="container container-width">
      <TextFrame>
        <Markdown
          source={`
### What is Kubernetes?
Kubernetes is one of the most used platforms for running your Docker containers and it is supported by key market leaders (Google, Amazon, Microsoft, etc.) via Cloud Native Computing Foundation. Kubernetes is being used by businesses of all scales, from startups to corporations.
        `}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Course Description
This course is ran in the form of a two-day hands-on workshop where you will be able to practice everything you learn. You will be shown how to run Kubernetes locally (for development) and on a cloud platform, Digital Ocean. You will also find out the basic structure of Kubernetes, including its components. You will learn how to create a Kubernetes Manifest and setup application in Docker. Also, you will be shown how to work with permissions and how to use (and create) packages in Helm.
`}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Course Outline
- Theory introduction to Kubernetes
- How to install locally (minikube and kubectl)
- Description of Kubernetes components
- Deployment to Kubernetes
- Working with permissions in the Kubernetes cluster
- Theory introduction to Helm packages
- Installation/Deployment using Helm
- Creating a custom Helm package
        `}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Who Should Attend
This course is primarily aimed at people (developers & DevOps), who want to maintain their applications in Kubernetes.
`}
        />
        <TwoCol
          col1={
            <Markdown
              source={`
#### Skill Requirements
- Basic [Docker](https://ondrej-sika.com/lu/training/docker/) knowledge
- Basic Linux knowledge
- Basic Terminal knowledge
            `}
            />
          }
          col2={
            <Markdown
              source={`
#### Technical Requirements
- Have Kubernetes installed & running, instruction [here](https://ondrej-sika.com/kubernetes/install)
- Access to the internet - ideally without corporate proxy
`}
            />
          }
        />
      </TextFrame>
      <TextFrameWithImage
        header="Course Leader: Ondrej Sika"
        imgUrl="/static/ondrejsika.jpg"
      >
        <Markdown
          source={`
A little bit of background about myself, I am a software engineer at Slush Pool and DevOps consultant, architect & lecturer. I have trained Kubernetes in firms like CGI or Webglobe - Yergeon. I am specialised mostly in Docker training which is closely related to Kubernetes. I use Kubernetes as a platform for most of my projects. It is one of the simplest ways of running Docker containers.
<br/><br/>
Get in touch if you have any questions - happy hearing from you!
`}
        />
      </TextFrameWithImage>

      <MyClients lang={site.lang} />
      <ThreeCol
        header="References"
        col1={<Recommendation id="dimensiondata" lang={site.lang} />}
        col2={<Recommendation id="webglobe-yegon" lang={site.lang} />}
        col3={<Recommendation id="sit" lang={site.lang} />}
      />

      <TextFrame>
        <Markdown
          source={`
### Pricing
Price for the two-day Kubernetes training
- Open to public (self-funded): 800 GBP excl. VAT
- Open to public (company-funded): 1 000 GBP excl. VAT
- On-site training (on-site): 3 000 GBP excl. VAT
`}
        />
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### I Want the Kubernetes Training

If you are interested in Kubernetes workshop or have any questions, please let me know.

`}
        />
        <p className="text-center">
          <Link href="https://ondrej-sika.com/lu/training/kubernetes/inquiry/?x_source=training.kubernetes.lu">
            <a className="btn btn-large btn-success">
              Inquire Kubernetes Training
            </a>
          </Link>
        </p>
      </TextFrame>
      <TextFrame>
        <Markdown
          source={`
### Related Courses

[Docker](https://ondrej-sika.com/lu/training/docker)
`}
        />
      </TextFrame>
    </div>
    <FooterOndrejSika />
  </div>
);

export default Index;
