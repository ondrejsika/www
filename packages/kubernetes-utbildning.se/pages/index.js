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
  lang: 'se'
}

const Index = () => (
  <div>
    <Head>
        <title>Kuberneres Utbildning, Ondrej Sika - kubernetes-utbildning.se</title>
    </Head>
    <Navigation location='se'/>
    <Header
      websiteHeader="Kuberneres Utbildning"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.se/?x_source=kubernetes-utbildning.se"
      logoUrl="/static/kubernetes.png"
    >
      <HeaderLink url="https://ondrej-sika.se/utbildning/kubernetes/forfragan/?x_source=kubernetes-utbildning.se">Ask for a training</HeaderLink>
      <HeaderLink url="https://ondrej-sika.se/contact/?x_source=kubernetes-utbildning.se">Contact me</HeaderLink>
    </Header>
    <div className="container container-width">
      <TextFrame>
        <ReactMarkdown source={`
### What is Kubernetes?
Kubernetes is one of the most used platforms for running your Docker containers and it is supported by key market leaders (Google, Amazon, Microsoft, etc.) via Cloud Native Computing Foundation. Kubernetes is being used by businesses of all scales, from startups to corporations.
        `}/>
      </TextFrame>
      <TextFrame>
        <ReactMarkdown source={`
### Course Description
This course is run in the form of a two days hands-on workshop where you will be able to practice everything you learn. You will be shown how to run Kubernetes locally (for development) and on a cloud platform, Digital Ocean. You will also find out the basic structure of Kubernetes, including its components. You will learn how to create a Kubernetes Manifest and setup application in Docker. Also, you will be shown how to work with permissions and how to use (and create) packages in Helm.
`}/>
      </TextFrame>
      <TextFrame>
        <ReactMarkdown source={`
### Course Outline
- Theory introduction to Kubernetes
- How to install locally (minikube and kubectl)
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
- Basic [Docker](https://ondrej-sika.se/utbildning/docker/) knowledge
- Basic Linux knowledge
- Basic Terminal knowledge
            `}/>
          }
          col2={
            <ReactMarkdown source={`
#### Technical Requirements
- Have Kubernetes installed & running, instruction [here](https://ondrej-sika.se/kubernetes/install)
- Access to the internet - ideally without corporate proxy
`}/>
          }
        />
      </TextFrame>
      <TextFrameWithImage
        header="Course Leader: Ondrej Sika"
        imgUrl="/static/ondrejsika.jpg" >
        <ReactMarkdown source={`
A little bit of background about myself, I am a software engineer at Slush Pool and DevOps consultant, architect & lecturer. I have trained Kubernetes in firms like CGI or Webglobe - Yergeon. I am specialised mostly in Docker training which is closely related to Kubernetes. I use Kubernetes as a platform for most of my projects. It is one of the simplest ways of running Docker containers.
<br/><br/>
Get in touch if you have any questions - happy hearing from you!
`} escapeHtml={false}/>
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
### Pricing
Price for two days Kubernetes training
- Open to public (self-funded): 800 GBP excl. VAT
- Open to public (company-funded): 1 000 GBP excl. VAT
- On-site training (on-site): 3 000 GBP excl. VAT
`}/>
      </TextFrame>
      <TextFrame>
        <ReactMarkdown source={`
### I Want the Kubernetes training

If you are interested in Kubernetes workshop or any questions, let me know.

`}/>
        <p className="text-center">
          <a href="https://ondrej-sika.se/utbildning/kubernetes/forfragnan/?x_source=git-utbildning.se" className="btn btn-large btn-success">Inquire Kubernetes training</a>
        </p>
      </TextFrame>
      <TextFrame>
        <ReactMarkdown source={`
### Related Courses

[Docker](https://ondrej-sika.se/utbildning/docker)
`} escapeHtml={false}/>
      </TextFrame>
    </div>
    <FooterOndrejSika />
  </div>
)

export default Index
