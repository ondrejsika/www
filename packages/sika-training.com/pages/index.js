import Head from "next/head";

const Index = () => (
  <div>
    <Head>
      <title>Sika Training</title>
    </Head>
    <div className="container mt-4">
      <h2>About us</h2>
      <p>
        We provide IT &amp; DevOps training and consulting in Europe and Middle
        East. We are focused on Git, Gitlab, Gitlab CI, Docker, Kubernetes,
        Terraform, Ansible, Prometheus, ELK / EFK, ...
      </p>
      <h2>Contact us</h2>
      <p>
        Ask us about a course on{" "}
        <a href="mailto:hello@sika-training.com" style={{ fontWeight: "bold" }}>
          hello@sika-training.com
        </a>
      </p>
      <p>
        Contact a board on{" "}
        <a href="mailto:company@sika-training.com">company@sika-training.com</a>
      </p>
    </div>
  </div>
);

export default Index;
