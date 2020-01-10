import Link from "next/link";

const AdBar = props => {
  let ads = {
    git: {
      about: "Git",
      course_name: "Školení Gitu"
    },
    docker: {
      about: "Docker",
      course_name: "Školení Dockeru"
    },
    kubernetes: {
      about: "Kubernetes",
      course_name: "Školení Kubernetes"
    },
    terraform: {
      about: "Terraform",
      course_name: "Školení Terraformu"
    },
    react: {
      about: "React",
      course_name: "Školení Reactu"
    },
    "gitlab-ci": {
      about: "Gitlab CI",
      course_name: "Školení Gitlab CI"
    },
    rancher: {
      about: "Rancher",
      course_name: "Školení Rancheru"
    }
  };
  return (
    <div className="alert alert-success mt-5 text-center" role="alert">
      <h3>
        Zajímáte se o {ads[props.ad].about}? Zkuste mé{" "}
        {ads[props.ad].course_name}!
      </h3>
      <a
        className="btn btn-large btn-success m-3"
        href={`/Školení/${props.ad}`}
      >
        Ukázat {ads[props.ad].course_name}
      </a>
    </div>
  );
};

export default AdBar;
