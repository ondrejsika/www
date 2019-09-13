import Layout from "@app/bootstrap-theme/layouts/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default props => (
  <Layout>
    <Header />
    {props.children}
    <Footer />
  </Layout>
);
