import Article from "@app/ondrejsika-theme/layouts/Article";
import CourseCard from "@app/ondrejsika-theme/components/CourseCard";
import StaticDB from "@app/common/staticdb";
import courses_yaml from "@app/data/training/courses.yml";

import dockerLogo from "@app/data/pictures/courses/docker-w.svg";
import kubernetesLogo from "@app/data/pictures/courses/kubernetes.png";
import gitLogo from "@app/data/pictures/courses/git-w.svg";
import gitlabCiLogo from "@app/data/pictures/courses/gitlab-ci.svg";
import ansibleLogo from "@app/data/pictures/courses/ansible.png";
import terraformLogo from "@app/data/pictures/courses/terraform-color.png";
import awsLogo from "@app/data/pictures/courses/aws-w.png";
import digitaloceanLogo from "@app/data/pictures/courses/digitalocean-w.png";
import rancherLogo from "@app/data/pictures/courses/rancher-white.png";
import prometheusLogo from "@app/data/pictures/courses/prometheus-white.png";
import elkLogo from "@app/data/pictures/courses/elk-color.png";
import reactLogo from "@app/data/pictures/courses/react.svg";
import openstackLogo from "@app/data/pictures/courses/openstack-w.png";
import cloudflareLogo from "@app/data/pictures/courses/cloudflare.png";
import proxmoxLogo from "@app/data/pictures/courses/proxmox-white.svg";
import argocdLogo from "@app/data/pictures/courses/white/argocd-large.png";
import djangoLogo from "@app/data/pictures/courses/white/django.svg";
import goLogo from "@app/data/pictures/courses/white/go.png";
import openshiftLogo from "@app/data/pictures/courses/white/openshift.png";
import keycloakLogo from "@app/data/pictures/technologies/keycloak.png";

const logoMap = {
  docker: dockerLogo,
  kubernetes: kubernetesLogo,
  git: gitLogo,
  "gitlab-ci": gitlabCiLogo,
  ansible: ansibleLogo,
  terraform: terraformLogo,
  aws: awsLogo,
  digitalocean: digitaloceanLogo,
  rancher: rancherLogo,
  prometheus: prometheusLogo,
  elk: elkLogo,
  react: reactLogo,
  openstack: openstackLogo,
  cloudflare: cloudflareLogo,
  proxmox: proxmoxLogo,
  argocd: argocdLogo,
  django: djangoLogo,
  go: goLogo,
  openshift: openshiftLogo,
  keycloak: keycloakLogo,
};

const CourseListPage = ({ lecturer, lang, title }) => {
  let db = new StaticDB();
  db.add("courses", courses_yaml);
  db.setCursor("courses");
  db.filterIn("lecturers", lecturer);
  let courses = db.get();
  return (
    <Article title={title} hideNewsletter={true}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.5rem",
          marginTop: "2rem",
        }}
      >
        {courses.map((course, i) => (
          <CourseCard
            key={i}
            course={course}
            lang={lang}
            logo={logoMap[course.id]}
          />
        ))}
      </div>
    </Article>
  );
};

export default CourseListPage;
