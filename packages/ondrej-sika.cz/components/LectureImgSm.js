const LectureImg = props => (
  <div className="d-block d-sm-block d-md-none">
    <h2 className="pt-4 pb-2">{props.LectureImgHeader}</h2>
    <div className="container-flex banner-courses">
      <div className="d-flex row">
        <div className="box col-12">
          <div className="row">
            <div className="col-4 box box-docker">
              <a href="/skoleni/docker">
                <img
                  src="/static/docker-w.svg"
                  id="docker"
                  className="img img-fluid p-3"
                />
              </a>
            </div>
            <div className="col-8">
              <a href="/skoleni/docker">
                <h4 className="course-header-sm">DOCKER</h4>
              </a>
              <a href="/skoleni/docker">
                <p className="pb-3 course-text">
                  Provozujte cokoliv a kdekoliv. Uz necekejte na nastaveni
                  vaseho serveru nebo na aktualizaci nejake knihovny. Mejte
                  prostredi jako soucast vasi aplikace.
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="box col-12">
          <div className="row">
            <div className="col-4 box box-kubernetes">
              <a href="/skoleni/kubernetes">
                <img
                  src="/static/kubernetes.png"
                  id="kubernetes"
                  className="img img-fluid p-3"
                />
              </a>
            </div>
            <div className="col-8">
              <a href="/skoleni/kubernetes">
                <h4 className="course-header-sm">KUBERNETES</h4>
              </a>
              <a href="/skoleni/kubernetes">
                <p className="pb-3 course-text">
                  Kubernetes je dnes nejpoužívanější orchestrator kontejneru.
                  Pokud chcete vsadit na jistotu pri provozovani Docker
                  kontejneru, zvolte Kubernetes.
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-4 box box-git">
              <a href="/skoleni/git">
                <img
                  src="/static/git-w.svg"
                  id="git"
                  className="img img-fluid p-3"
                />
              </a>
            </div>
            <div className="col-8">
              <a href="/skoleni/git">
                <h4 className="course-header-sm">GIT</h4>
              </a>
              <a href="/skoleni/git" className="course-text">
                <p className="pb-3 course-text">
                  Moderni verzovaci nastroj. Dnes defakto standart a nezbytna
                  soucat kazdeho vyvojarskeho tymu.
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-4 box box-gitlab-ci">
              <a href="/skoleni/gitlab-ci">
                <img
                  src="/static/gitlab-ci.svg"
                  id="gitlab-ci"
                  className="img img-fluid p-3"
                />
              </a>
            </div>
            <div className="col-8">
              <a href="/skoleni/gitlab-ci">
                <h4 className="course-header-sm">GITLAB-CI</h4>
              </a>
              <a href="/skoleni/gitlab-ci">
                <p className="pb-3 course-text">
                  Nástroj na automaticke testovani a automaticke nasazovani
                  integrovane primo v Gitlabu. Testujte kazdy jednotlivi commit
                  a nasazujte stisknutim tlacitka.
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-4 box box-ansible">
              <a href="/skoleni/ansible">
                <img
                  src="/static/ansible.png"
                  id="ansible"
                  className="img img-fluid p-3"
                />
              </a>
            </div>
            <div className="col-8">
              <a href="/skoleni/ansible">
                <h4 className="course-header-sm">ANSIBLE</h4>
              </a>
              <a href="/skoleni/ansible">
                <p className="pb-3 course-text">
                  Ansible je nástroj na hromadnou správu konfiguraci a
                  nasazování. Vy deklarujete vysledný stav serveru a služeb a
                  Ansible se postará o provedení.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LectureImg;
