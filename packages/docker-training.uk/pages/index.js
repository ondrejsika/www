import '../css'

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
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';

let site = {
  lang: 'en'
}

const Index = () => (
  <div>
    <Head>
        <title>Docker Training, Ondrej Sika - docker-training.uk</title>
    </Head>
    <Navigation location='uk'/>
    <Header
      websiteHeader="Docker Training"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.uk/?x_source=docker-training.cz"
      logoUrl="/static/docker-w.svg"
    >
      <HeaderLink url="https://ondrej-sika.uk/training/docker/inquiry/?x_source=kubernetes-training.uk">Request a training</HeaderLink>
      <HeaderLink url="https://ondrej-sika.uk/contact/?x_source=kubernetes-training.uk">Contact me</HeaderLink>
    </Header>
    <div className="container container-width">
    <TextFrame>
        <ReactMarkdown source={`
### What is Docker?
Docker can make your life easier through simplifying the process of R&D, testing, and software usage in your business. Run everything, everywhere. Don’t lose your time waiting for server setups or random library updates. Have the environment as a part of your application.
`}/>
      </TextFrame>
      <TextFrame>
        <ReactMarkdown source={`
### Course Description
During the two-day workshop, you’ll be shown everything you need to know to be able to use Docker - from creating a custom container image to the Swarm utilisation. This course is very hands-on, and you will be able to practice everything you learn.
`}/>
      </TextFrame>
      <TextFrame header="">
        <ReactMarkdown source={`
### Course Outline
- Theory introduction to containers & Docker
- How to install Docker at home or work (for those who did not - do so)
- Basics of Containerisation
- Basics of Images
- Docker Compose - multi-container applications
- Deployment to Swarm
- Preview of deployment to Kubernetes
`}/>
      </TextFrame>
      <TextFrame header="">
        <ReactMarkdown source={`
### Who Should Attend
This training course is primarily aimed at complete beginners who have either none or very little experience with Docker. Most of all, Developers and/or DevOps (Server Administrators), or those who want to use Docker in practice or want to find out more about its purpose and if it is something they can implement.
`}/>
        <TwoCol
          col1={
            <ReactMarkdown source={`
#### Skill Requirements
- Basic Linux knowledge
- Basic Terminal knowledge
`}/>
          }
          col2={
            <ReactMarkdown source={`
#### Technical Requirements
- Have Docker installed, instructions: [here](https://ondrej-sika.uk/docker/install/)
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
A little bit of background about myself, I am a software engineer at Slush Pool and DevOps consultant, architect & lecturer. I lead mostly Docker courses and CI; they are both closely interrelated. I have four years of experience with Docker on the commercial development side. Other than that I use it daily for development, as well as production, and I cannot imagine working without it.
<br/><br/>
Get in touch if you have any questions - Happy to hearing from you!
`} escapeHtml={false}/>
      </TextFrameWithImage>

      <MyClients HeaderClients="My clients"/>

      <ThreeCol header="References"
        col1={
          <Recommendation id="bohemiaenergy" lang={site.lang}/>
        }
        col2={
          <Recommendation id="vse" lang={site.lang}/>
        }
        col3={
          <Recommendation id="sit" lang={site.lang}/>
        }
      />
      <TextFrame>
        <ReactMarkdown source={`
### Pricing
Price for two days Docker training
- Open to public (self-funded): 800 GBP excl. VAT
- Open to public (company-funded): 1 000 GBP excl. VAT
- On-site training (on-site): 3 000 GBP excl. VAT
`}/>
      </TextFrame>
      <TextFrame>
        <ReactMarkdown source={`
### I Want the Docker Training

If you are interested in Docker workshop or have any questions, please let me know.

`}/>
        <p className="text-center">
          <a href="https://ondrej-sika.uk/training/docker/inquiry/?x_source=git-training.uk" className="btn btn-large btn-success">Inquire Docker Training</a>
        </p>
      </TextFrame>
      <TextFrame>
        <ReactMarkdown source={`
### Related Courses

[Kubernetes](https://ondrej-sika.uk/training/kubernetes)
`} escapeHtml={false}/>
      </TextFrame>
    </div>
    <FooterOndrejSika />
  </div>
)

export default Index
