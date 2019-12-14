import docker from "@app/data/pictures/courses/docker-w.svg";
import git from "@app/data/pictures/courses/git-w.svg";
import gitlabci from "@app/data/pictures/courses/gitlab-ci.svg";
import k8s from "@app/data/pictures/courses/kubernetes.png";
import react from "@app/data/pictures/courses/react.svg";
import terraform from "@app/data/pictures/courses/terraform-white.png";
import ansible from "@app/data/pictures/courses/ansible.png";

const LectureImg = props => {
  let training = { en: "training", cs: "skoleni" }[props.lang || "cs"];
  return (
    <div className="d-none d-md-block d-lg-block">
      <h2 className="pt-4 pb-2" id="my-training">
        {props.LectureImgHeader}
      </h2>
      <div className="container-flex banner-courses">
        <div className="d-flex flex-row">
          <div className="box" id="docker">
            <h4 className="text-center text-white course-header pt-3">
              <a href={`/${training}/docker`} className="course-header">
                DOCKER
              </a>
            </h4>
            <a href={`/${training}/docker`}>
              <img src={docker} className="img img-fluid p-3" />
            </a>
          </div>
          <div className="box" id="kubernetes">
            <h4 className="text-center text-white course-header pt-3">
              <a href={`/${training}/'kubernetes`} className="course-header">
                KUBERNETES
              </a>
            </h4>
            <a href={`/${training}/kubernetes`}>
              <img src={k8s} className="img img-fluid p-3" />
            </a>
          </div>
          <div className="box" id="git">
            <h4 className="text-center text-white course-header pt-3">
              <a href={`/${training}/git`} className="course-header">
                GIT
              </a>
            </h4>
            <a href={`/${training}/git`}>
              <img src={git} className="img img-fluid p-3"></img>
            </a>
          </div>
          <div className="box" id="gitlab-ci">
            <h4 className="text-center text-white course-header pt-3">
              <a href={`/${training}/gitlab-ci`} className="course-header">
                GITLAB-CI
              </a>
            </h4>
            <a href={`/${training}/gitlab-ci`}>
              <img src={gitlabci} className="img img-fluid p-3"></img>
            </a>
          </div>
          <div className="box " id="ansible">
            <h4 className="text-center text-white course-header pt-3">
              <a href={`/${training}/ansible`} className="course-header">
                ANSIBLE
              </a>
            </h4>
            <a href={`/${training}/ansible`}>
              <img src={ansible} className="img img-fluid p-3"></img>
            </a>
          </div>
          {(() => {
            if (!props.lang || props.lang == "cs") {
              return (
                <>
                  <div className="box " id="terraform">
                    <h4 className="text-center text-white course-header pt-3">
                      <a
                        href={`/${training}/terraform`}
                        className="course-header"
                      >
                        TERRAFORM
                      </a>
                    </h4>
                    <a href={`/${training}/terraform`}>
                      <img src={terraform} className="img img-fluid p-3"></img>
                    </a>
                  </div>
                  <div className="box " id="react">
                    <h4 className="text-center text-white course-header pt-3">
                      <a href={`/${training}/react`} className="course-header">
                        REACT
                      </a>
                    </h4>
                    <a href={`/${training}/react`}>
                      <img src={react} className="img img-fluid p-3"></img>
                    </a>
                  </div>
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
