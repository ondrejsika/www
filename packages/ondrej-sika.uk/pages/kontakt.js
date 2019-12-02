import Header from "@app/course-landing/components/Header";
import HeaderLink from "@app/course-landing/components/HeaderLink";
import TextFrame from "@app/course-landing/components/TextFrame";
import TextFrameWithImage from "@app/course-landing/components/TextFrameWithImage";
import MyClients from "@app/course-landing/components/MyClients";
import References from "@app/course-landing/components/References";
import ThreeCol from "@app/course-landing/components/ThreeCol";
import someone from "@app/course-landing/components/References/someone.jpg";
import jurajboldis from "@app/course-landing/components/References/jurajboldis.jpg";
import martinkylian from "@app/course-landing/components/References/martinkylian.jpg";
import TwoCol from "@app/course-landing/components/TwoCol";
import Navigation from "@app/course-landing/components/Navigation";
import ButtonOutline from "@app/course-landing/components/ButtonOutline";
import Recommendation from "@app/course-landing/components/Recommendation";
import Contact from "@app/course-landing/components/Contact";
import FooterOndrejSika from "@app/course-landing/components/FooterOndrejSika";
import Former2 from "@app/common/components/Former2";
import site from "@app/ondrej-sika.cz/config";

const Index = () => (
  <div>
    <div className="bar-header">
      <div className="container">
        <div className="pt-4 pb-4">
          <h1 className="text-white pt-3 pb-2">Kontakt</h1>
        </div>
      </div>
    </div>
    <div className="container">
      <h3 className="pt-4 pb-2">Ondřej Šika</h3>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          {/* <h4 className='pt-4 pt-md-0'>Kontakt</h4> */}
          <p className="">
            <a href="tel:+420773452376">+420 773 452 376</a> (
            <a href="https://t.me/ondrejsika">Telegram</a>)
            <br />
            <a href="mailto:ondrej@sika.io?subject=Poptavka skoleni">
              ondrej@sika.io
            </a>{" "}
            (<a href="/pgp">PGP</a>)
          </p>
          <p className="pb-4">
            <a href="https://linkedin.com/in/ondrejsika">
              linkedin.com/in/ondrejsika
            </a>
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <h4>Fakturační údaje</h4>
          <p>
            Klatovská třída 1532/71
            <br />
            301 00 Plzeň
            <br />
            Česká Republika
          </p>
          <table className="contact-table table-borderless">
            <tbody>
              <tr>
                <td>IČ:</td>
                <td>88114163</td>
              </tr>
              <tr>
                <td>DIČ:</td>
                <td>CZ9302252102</td>
              </tr>
              <tr>
                <td>Účet:&nbsp;&nbsp;&nbsp;</td>
                <td>2301432033/2010 (Fio)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-lg-4 col-md-9 col-sm-12 col-12">
          <h4 className="pt-4 pt-md-0">Platební údaje</h4>
          <table className="contact-table table-borderless">
            <tbody>
              <tr>
                <td>ČR (CZK):</td>
                <td>2301432033 / 2010</td>
              </tr>
              <tr>
                <td>SK (EUR):</td>
                <td>2301432033 / 8330</td>
              </tr>
              <tr>
                <td>IBAN:</td>
                <td>CZ0820100000002301432033</td>
              </tr>
              <tr>
                <td>
                  BIC code:&nbsp;&nbsp;&nbsp;
                  <br />
                  SWIFT
                </td>
                <td valign="top">FIOBCZPPXXX</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3">
            <b>Adresa Banky</b>
            <br />
            Fio banka, a.s.,
            <br />
            V Celnici 1028/10,
            <br />
            Praha 1,
            <br />
            Česká Republika
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Index;
