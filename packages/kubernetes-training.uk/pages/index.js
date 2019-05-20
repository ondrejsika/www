import '../css'

import FooterOndrejSika from '@app/course-landing/components/FooterOndrejSika';
import Header from '@app/course-landing/components/Header';
import HeaderLink from '@app/course-landing/components/HeaderLink';
import TextFrame from '@app/course-landing/components/TextFrame';
import TextFrameWithImage from '@app/course-landing/components/TextFrameWithImage';
import MyClients from '@app/course-landing/components/MyClients';
import ThreeCol from '@app/course-landing/components/ThreeCol';
import Recommendation from '@app/course-landing/components/Recommendation';
import TwoCol from '@app/course-landing/components/TwoCol';
import Navigation from '@app/course-landing/components/Navigation';
import Contact from '@app/course-landing/components/Contact'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'

let site = {
  lang: 'en'
}

const Index = () => (
  <div>
    <Head>
        <title>Kuberneres training, Ondrej Sika - kubernetes-training.uk</title>
    </Head>
    <Navigation/>
    <Header
      websiteHeader="Kuberneres training"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.uk/?x_source=kubernetes-training.uk"
      logoUrl="/static/kubernetes.png"
    >
      <HeaderLink url="https://ondrej-sika.cz/skoleni/kubernetes/poptavka/?x_source=skoleni-kubernetes.cz">Nezávazně poptat školení</HeaderLink>
      <HeaderLink url="https://ondrej-sika.cz/kontakt/?x_source=skoleni-kubernetes.cz">Kontaktovat</HeaderLink>
    </Header>
    <div className="container container-width">
      <TextFrame>
        <ReactMarkdown source={`
### What is Kubernetes?
Kubernetes is one of the most used platforms for hosting Docker containers and is supported by key market leaders (Google, Amazon, Microsoft, etc.) via Cloud Native Computing Foundation. Kubernetes is being used by businesses of all scales, from startups to corporations.
        `}/>
      </TextFrame>
      <TextFrame>
        <ReactMarkdown source={`
### Course Description
This course is run in the form of a workshop where you will be able to practice everything you learn. You will be shown how to run Kubernetes locally (for development) and on a cloud platform, Digital Ocean. You will also find out the basic structure of Kubernetes, including its components. You will learn how to create a Kubernetes Manifest and setup application in Docker. Also, you will be shown how to work with permissions and how to use (and create) packages in Helm.
`}/>
      </TextFrame>
      <TextFrame>
        <ReactMarkdown source={`
### Course Outline
- Theory introduction to Kubernetes
- How to install Minikube and kubectl at home or work (for those who did not do so)
- Description of Kubernetes components
- Deployment to Kubernetes
- Working with permissions in the Kubernetes cluster
- Theory introduction to Helm packages
- Installation/Deployment using Helm
- Creating a custom Helm package
        `}/>
      </TextFrame>
      <TextFrame>
        <ReactMarkdown source={`
### Who Should Attend
This course is primarily aimed at people (developers & DevOps), who want to maintain their applications in Kubernetes.
`}/>
        <TwoCol
          col1={
            <ReactMarkdown source={`
#### Skill Requirements
- Basic [Docker](https://www.ondrej-sika.uk/kubernetes/install/) knowledge
- Basic Linux knowledge
- Basic Terminal knowledge
            `}/>
          }
          col2={
            <ReactMarkdown source={`
#### Technical Requirements
- Have Docker installed, instructions: [here](https://ondrej-sika.uk/docker/install)
- Access to the internet - ideally without corporate proxy, or proxy set up in Docker
`}/>
          }
        />
      </TextFrame>
      <TextFrameWithImage
        header="Course Leader: Ondrej Sika"
        imgUrl="/static/ondrejsika.jpg" >
        <ReactMarkdown source={`
A little bit of background about myself, I am a software developer for Slush Pool and a trainer. I have trained Kubernetes in firms like CGI or Webglobe - Yergeon. I am specialised mostly in Docker training which is closely related to Kubernetes. I use Kubernetes as a platform for most of my projects. It is one of the simplest ways of running Docker containers.
<br/><br/>
For more information on all my courses that I offer, visit ondrej-sika.cz.
<br/><br/>
Get in touch if you have any questions - happy hearing from you!
        `}/>
      </TextFrameWithImage>

      <MyClients lang={site.lang}/>
      <ThreeCol header="References"
        col1={
          <Recommendation id="dimensiondata" lang={site.lang}/>
        }
        col2={
          <Recommendation id="webglobe-yegon" lang={site.lang}/>
        }
        col3={
          <Recommendation id="sit" lang={site.lang}/>
        }
      />

      <TextFrame>
        <ReactMarkdown source={`
### Mám zájem o školení
Pokud máte zájem o školení, neváhejte mě kontaktovat - [Nezávazně poptat školení](https://ondrej-sika.cz/skoleni/kubernetes/poptavka/)
`}/>
      </TextFrame>
      <TextFrame>
        <ReactMarkdown source={`
### Pricing
Pokud máte zájem o školení u vás ve firmě, [nezávazně jej poptejte](https://ondrej-sika.cz/skoleni/kubernetes/poptavka/) nebo mi napište email na <ondrej@ondrejsika.com>

- Open to public (self funded): xxxx GBP excl. VAT
- Open to public (company funded): xxxx GBP excl. VAT
- Firemní školení (ve firmě): xxxx GBP excl. VAT
`}/>
      </TextFrame>
      <Contact />
    </div>
    <FooterOndrejSika />
  </div>
)

export default Index
