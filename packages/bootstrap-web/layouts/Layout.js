import Layout from "@app/bootstrap-theme/layouts/Layout";

export default props => (
  <Layout>
    <div className="container">
      <h1>Simple Bootrstap Web</h1>
      {props.children}
      <p>2019 (c) Simple Bootstrap Web</p>
    </div>
  </Layout>
);
