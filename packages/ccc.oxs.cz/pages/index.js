import Head from "next/head";
import Links from "@app/ccc.oxs.cz/components/Links";
import LinksWrap from "@app/ccc.oxs.cz/components/LinksWrap";

export default () => (
  <div>
    <Head>
      <title>ccc.oxs.cz</title>
    </Head>
    <h1>36c3</h1>
    <h3>Main Links</h3>
    <LinksWrap>
      <Links
        links={[
          [
            "Main Page (sika.link/36c3)",
            "https://events.ccc.de/congress/2019/wiki/index.php/Main_Page"
          ],
          [
            "Fahrplan",
            "https://fahrplan.events.ccc.de/congress/2019/Fahrplan/"
          ],
          ["c3nav", "https://c3nav.de/"],
          ["Venue (Google Maps)", "https://goo.gl/maps/KKBLWtA5AA53Jf1t8"],
          ["Messe Hbf (Google Maps)", "https://goo.gl/maps/FbmgoXj6VCmgfHwL6"],
          ["Hotel (Google Maps)", "https://goo.gl/maps/s3jG8dXi1yZMp8JXA"]
        ]}
      />
    </LinksWrap>
    <h3>Twitter</h3>
    <LinksWrap>
      <Links
        links={[
          ["CCC Updates (@chaosupdates)", "https://twitter.com/chaosupdates"],
          [
            "Fahrplan Update (@FahrplanUpdate)",
            "https://twitter.com/FahrplanUpdate"
          ]
        ]}
      />
    </LinksWrap>
    <h3>Other Links</h3>
    <LinksWrap>
      <Links links={[["c3queue", "https://c3queue.de/"]]} />
    </LinksWrap>
    <h2>All Congreses</h2>
    <LinksWrap>
      <Links
        links={[
          ["Tickets", "https://tickets.events.ccc.de/"],
          ["All Congresses (sika.link/ccc)", "https://events.ccc.de/congress/"]
        ]}
      />
    </LinksWrap>
  </div>
);
