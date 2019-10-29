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
              <img src="/static/docker-w.svg" className="img img-fluid p-3" />
            </a>
          </div>
          <div className="box" id="kubernetes">
            <h4 className="text-center text-white course-header pt-3">
              <a href={`/${training}/'kubernetes`} className="course-header">
                KUBERNETES
              </a>
            </h4>
            <a href={`/${training}/kubernetes`}>
              <img src="/static/kubernetes.png" className="img img-fluid p-3" />
            </a>
          </div>
          <div className="box" id="git">
            <h4 className="text-center text-white course-header pt-3">
              <a href={`/${training}/git`} className="course-header">
                GIT
              </a>
            </h4>
            <a href={`/${training}/git`}>
              <img src="/static/git-w.svg" className="img img-fluid p-3"></img>
            </a>
          </div>
          <div className="box" id="gitlab-ci">
            <h4 className="text-center text-white course-header pt-3">
              <a href={`/${training}/gitlab-ci`} className="course-header">
                GITLAB-CI
              </a>
            </h4>
            <a href={`/${training}/gitlab-ci`}>
              <img
                src="/static/gitlab-ci.svg"
                className="img img-fluid p-3"
              ></img>
            </a>
          </div>
          <div className="box " id="ansible">
            <h4 className="text-center text-white course-header pt-3">
              <a href={`/${training}/ansible`} className="course-header">
                ANSIBLE
              </a>
            </h4>
            <a href={`/${training}/ansible`}>
              <img
                src="/static/ansible.png"
                className="img img-fluid p-3"
              ></img>
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
                      <img
                        src="/static/terraform-white.png"
                        className="img img-fluid p-3"
                      ></img>
                    </a>
                  </div>
                  <div className="box " id="react">
                    <h4 className="text-center text-white course-header pt-3">
                      <a href={`/${training}/react`} className="course-header">
                        REACT
                      </a>
                    </h4>
                    <a href={`/${training}/react`}>
                      <img
                        src="/static/react.svg"
                        className="img img-fluid p-3"
                      ></img>
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
