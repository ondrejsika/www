import Course from "@app/ondrej-sika.cz/layouts/Course";

export default props => (
  <Course
    lang={props.site.lang}
    course_id="gitlab-ci"
    show_sessions={true}
    course_title="Gitlab CI Training"
    logo="/static/gitlab-ci.svg"
    price_self_funded="400 EUR"
    price_in_house="1 300 EUR"
    description={`
### What is CI?
Continuous Integration (abbr. CI or CI/CD) is a tool that automates routine tasks such as running tests,code quality or deployment. It allows faster adoption of changes to master and quicker deployment. The compelling advantage of Gitlab CI is its Docker support; you can easily combine Docker images or run tests in containers.

### Course Description
This course is ran in the form of a one day hands-on workshop where you will learn the importance of CI,the different versions of Gitlab CI and practice writing CI script for a sample project. The outcome will be a script for a simple project containing application build jobs, from tests to deployment.

### Course Outline
- Generic introduction to CI
- Introduction to Gitlab CI
- Installation of Gitlab CI Runner
- Work with CI Jobs
- Creation of CI Pipelines
- Deployment Automatisation
- Docker and CI

### Who Should Attend
The course is primarily aimed at developers who are using Gitlab and are wanting to start using Gitlab CI. At the same time, Gitlab CI might be the reason why people are transferring onto Gitlab. The course is also useful for DevOps who want to simplify their routine tasks with deployment automatisation.
`}
    col1={`
#### Skill Requirement

- Basic Linux knowledge
- Basic Terminal knowledge
- Basic Git knowledge is of benefit - [Git training](/training/git)
- Docker knowledge is of benefit - [Docker training](/training/docker)
  `}
    col2={`
#### Technical Requirements

- Access to the internet - ideally without corporate proxy
  `}
    recommendations={["CMS", "vse"]}
  />
);
