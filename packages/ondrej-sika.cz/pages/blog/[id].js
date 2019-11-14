import MainBar from "@app/ondrej-sika.cz/components/MainBar";
import Markdown from "@app/common/components/Markdown";

import Head from "next/head";

let style = {
  fontSize: "1.4em",
  fontWeight: "bold"
};

import posts from "@app/ondrej-sika.cz/data/blog-posts.yaml";

let posts_id_map = {};
posts.map((element, i) => {
  posts_id_map[element.id] = i;
});

let Post = props => {
  let post = posts[posts_id_map[props.post_id]];
  return (
    <div>
      <Head>
        <title>{post.title} - Ondřej Šika</title>
      </Head>
      <MainBar
        MainBarHeader={post.title}
        MainBarText={
          post.tags &&
          post.tags.map((tag, i) => (
            <span key={i} style={{ fontSize: "0.8em" }}>
              #{tag}{" "}
            </span>
          ))
        }
      />
      <div className="container pt-4">
        <Markdown source={post.content} />
        {(() => {
          if (post.ad) {
            // FIXME: Use YAML source
            let ads = {
              git: {
                about: "Git",
                course_name: "Skoleni Gitu"
              },
              docker: {
                about: "Docker",
                course_name: "Skoleni Dockeru"
              },
              kubernetes: {
                about: "Kubernetes",
                course_name: "Skoleni Kubernetes"
              },
              terraform: {
                about: "Terraform",
                course_name: "Skoleni Terraformu"
              },
              react: {
                about: "React",
                course_name: "Skoleni Reactu"
              },
              "gitlab-ci": {
                about: "Gitlab CI",
                course_name: "Skoleni Gitlab CI"
              }
            };
            return (
              <div className="row">
                <div className="col-6">
                  <div
                    className="alert alert-success mt-5 text-center"
                    role="alert"
                  >
                    <h3>
                      Zajimate se o {ads[post.ad].about}? Zkuste me{" "}
                      {ads[post.ad].course_name}!
                    </h3>
                    <a
                      className="btn btn-large btn-success m-3"
                      href={`/skoleni/${post.ad}`}
                    >
                      Ukazat {ads[post.ad].course_name}
                    </a>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    className="alert alert-primary mt-5 text-center"
                    role="alert"
                  >
                    <h3>
                      Chcete dostavat nove clanky do emailu? Prihlaste se k
                      newsletteru!
                    </h3>
                    <a
                      className="btn btn-large btn-primary m-3"
                      href="https://sika.link/newsletter"
                    >
                      Prihlasit se k odberu
                    </a>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div
                className="alert alert-primary mt-5 text-center"
                role="alert"
              >
                <h3>
                  Chcete dostavat nove clanky do emailu? Prihlaste se k
                  newsletteru!
                </h3>
                <a
                  className="btn btn-large btn-primary m-3"
                  href="https://sika.link/newsletter"
                >
                  Prihlasit se k odberu
                </a>
              </div>
            );
          }
        })()}
      </div>
    </div>
  );
};

Post.getInitialProps = async function(context) {
  return { post_id: context.query.id };
};

export default Post;
