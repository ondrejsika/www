import Course from "@app/ondrej-sika.cz/layouts/Course";

export default props => (
  <Course
    lang={props.site.lang}
    course_id="kubernetes"
    show_sessions={true}
    course_title="Kubernetes Training"
    logo="/static/kubernetes.png"
    price_self_funded="800 EUR"
    price_in_house="2600 EUR"
    description={`
### What is Kubernetes?
Kubernetes is one of the most used platforms for running your Docker containers and it is supported by key market leaders (Google, Amazon, Microsoft, etc.) via Cloud Native Computing Foundation. Kubernetes is being used by businesses of all scales, from startups to corporations.

### Course Description
This course is ran in the form of a two-day hands-on workshop where you will be able to practice everything you learn. You will be shown how to run Kubernetes locally (for development) and on a cloud platform, Digital Ocean. You will also find out the basic structure of Kubernetes, including its components. You will learn how to create a Kubernetes Manifest and setup application in Docker. Also, you will be shown how to work with permissions and how to use (and create) packages in Helm.

### Course Outline
- Theory introduction to Kubernetes
- How to install locally (minikube and kubectl)
- Description of Kubernetes components
- Deployment to Kubernetes
- Working with permissions in the Kubernetes cluster
- Theory introduction to Helm packages
- Installation/Deployment using Helm
- Creating a custom Helm package

#### Who Should Attend
This course is primarily aimed at people (developers & DevOps), who want to maintain their applications in Kubernetes.
    `}
    col1={`
#### Skill Requirements
- Basic Docker knowledge
- Basic Linux knowledge
- Basic Terminal knowledge
`}
    col2={`
#### Technical Requirements
- Have Kubernetes installed & running, instruction here
- Access to the internet - ideally without corporate proxy
`}
    recommendations={["oxy", "oxyCTO"]}
    twitter_recommendations={[
      "petr-todorov-kubernetes",
      "pavel-mattivi-kubernetes"
    ]}
  />
);
