import Course from "@app/ondrejsika-theme/layouts/Course";

export default props => (
  <Course
    course_id="ansible"
    show_sessions={true}
    lang={props.site.lang}
    course_title="Ansible Training"
    logo="/static/ansible.png"
    price_self_funded="400 EUR"
    price_in_house="1 300 EUR"
    description={`
### What is Ansible?
Ansible is a tool for mass configuration and deployment management. You declare the desired state of the server and services and Ansible will do the execution. You don't have to worry about the state the current server or applications are in now; Ansible turns it into desired state. The entire configuration is versioned using Git, and you will never lose view of where everything is being deployed or miss any critical steps during the process. Ansible will help you with application deployment and quicker and safer server administration.

### Course Description
The training is ran as a two-day hands-on workshop, where you can try what you learn in practice. We will install Ansible together and describe how it works and introduce the basic concepts. We will see how to configure a server (tester on DigitalOcean) and deploy an application from the beginning to the end. Starting with the installation of system packages, application download from Git, creation of templates for configuration scripts, and secrets setup (e.g., passwords). After this course, you will be able to use Ansible on a daily basis and simplify deployment and configuration routines.

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

### Who Should Attend
This training is primarily aimed at admins and DevOps who want to start using Ansible. At the same time,developers who deploy their applications (even into test environments) and want to simplify this process, will also find it useful.
`}
    col1={`
#### Skill Requirements
- Basic Linux knowledge
- Basic Terminal knowledge
`}
    col2={`
#### Technical Requirements
- Have Ansible installed, instructions: [here](/ansible/instructions)
- Access to the internet (https, ssh) - better without corporate proxy
`}
    recommendations={["oxy", "oxyCTO"]}
  />
);
