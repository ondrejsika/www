import docker from "@app/data/pictures/courses/docker-w.svg";
import git from "@app/data/pictures/courses/git-w.svg";
import gitlabci from "@app/data/pictures/courses/gitlab-ci.svg";
import k8s from "@app/data/pictures/courses/kubernetes.png";
import react from "@app/data/pictures/courses/react.svg";
import terraform from "@app/data/pictures/courses/terraform-white.png";
import ansible from "@app/data/pictures/courses/ansible.png";
import Link from "next/link";

const Card = props => {
  let training = { en: "training", cs: "skoleni" }[props.lang || "cs"];
  return (
    <div className="box" id={props.courseId}>
      <Link href={`/${training}/${props.courseId}`}>
        <a className="course-header">
          <h4 className="text-center text-white course-header pt-3">
            <span className="course-header">{props.courseName}</span>
          </h4>
          <img src={props.courseImg} className="img img-fluid p-3" />
        </a>
      </Link>
    </div>
  );
};

const LectureImg = props => {
  return (
    <div className="d-none d-md-block d-lg-block">
      <h2 className="pt-4 pb-2" id="my-training">
        {props.LectureImgHeader}
      </h2>
      <div className="container-flex banner-courses">
        <div className="d-flex flex-row">
          <Card courseName="Docker" courseId="docker" courseImg={docker} />
          <Card courseName="Kubernetes" courseId="kubernetes" courseImg={k8s} />
          <Card courseName="Git" courseId="git" courseImg={git} />
          <Card
            courseName="Gitlab CI"
            courseId="gitlab-ci"
            courseImg={gitlabci}
          />
          <Card courseName="Ansible" courseId="ansible" courseImg={ansible} />
          {(() => {
            if (!props.lang || props.lang == "cs") {
              return (
                <>
                  <Card
                    courseName="Terraform"
                    courseId="terraform"
                    courseImg={terraform}
                  />
                  <Card courseName="React" courseId="react" courseImg={react} />
                </>
              );
            }
          })()}
        </div>
      </div>
    </div>
  );
};

export default LectureImg;
