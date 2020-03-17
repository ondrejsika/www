import Course from "@app/ondrejsika-theme/layouts/Course";

export default props => (
  <Course
    lang={props.site.lang}
    course_id="docker"
    show_sessions={true}
    course_title="Docker Training"
    logo="/static/docker.svg"
    price_self_funded="800 EUR"
    price_in_house="2600 EUR"
    description={`
### What is Docker?
Docker can make your life easier through simplifying the process of R&D, testing, and software usage in your business. Run everything, everywhere. Don’t lose your time waiting for server setups or random library updates. Have the environment as a part of your application.

### Course Description
During the two-day workshop, you’ll be shown everything you need to know to be able to use Docker - from creating a custom container image to the Swarm utilisation. This course is very hands-on, and you will be able to practice everything you learn.

### Course outline
- Theory introduction to containers & Docker
- How to install Docker at home or work (for those who did not - do so)
- Basics of Containerisation
- Basics of Images
- Docker Compose - multi-container applications
- Deployment to Swarm
- Preview of deployment to Kubernetes

### Who Should Attend
This training course is primarily aimed at complete beginners who have either none or very little experience with Docker. Most of all, Developers and/or DevOps (Server Administrators), or those who want to use Docker in practice or want to find out more about its purpose and if it is something they can implement.
`}
    col1={`
#### Skill Requirements
- Basic Linux knowledge
- Basic Terminal knowledge
`}
    col2={`
#### Technical Requirements
- Have Docker installed, instructions: [here](/instructions/docker)
- Access to the internet - ideally without corporate proxy, or proxy set up in Docker
`}
    recommendations={["sit", "vse"]}
    twitter_recommendations={[
      "jan-novotny-docker",
      "tomas-ligenza-docker",
      "lubos-klokner-docker"
    ]}
  />
);
