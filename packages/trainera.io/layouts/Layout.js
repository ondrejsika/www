import Layout from "@app/bootstrap-theme/layouts/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default props => (
  <Layout>
    <div className="mt-5">
      <Header />
    </div>
    {props.children}
    <Footer />
  </Layout>
);
