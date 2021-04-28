import Layout from "@app/bootstrap-theme/layouts/Layout";

export default props => (
  <Layout>
    <div className="container">
      <p>
        <strong>home.sikalabs.com</strong>
      </p>
      {props.children}
      <p className="mt-5">
        <strong>home.sikalabs.com</strong> | <strong>sikalabs.com</strong>
      </p>
    </div>
  </Layout>
);
