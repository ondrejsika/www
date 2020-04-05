import React from "react";
import Head from "next/head";
import Links from "@app/ccc.oxs.cz/components/Links";

const Page = () => (
  <div>
    <Head>
      <title>ccc.oxs.cz</title>
      <link rel="icon" href="/icon.png" type="image/png" />
      <link rel="apple-touch-icon" href="/icon.png" />
    </Head>
    <h1>36c3</h1>
    <div className="row">
      <div className="col-md-4">
        <h2>Main Links</h2>

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
            [
              "Messe Hbf (Google Maps)",
              "https://goo.gl/maps/FbmgoXj6VCmgfHwL6"
            ],
            ["Hotel (Google Maps)", "https://goo.gl/maps/s3jG8dXi1yZMp8JXA"]
          ]}
        />
      </div>
      <div className="col-md-4">
        <h2>Twitter</h2>

        <Links
          links={[
            ["CCC Updates (@chaosupdates)", "https://twitter.com/chaosupdates"],
            [
              "Fahrplan Update (@FahrplanUpdate)",
              "https://twitter.com/FahrplanUpdate"
            ]
          ]}
        />
        <h2>Other Links</h2>

        <Links
          links={[
            ["c3queue", "https://c3queue.de/"],
            ["Live Stream", "https://streaming.media.ccc.de/36c3/"],
            ["Video Records", "https://media.ccc.de/c/36c3"]
          ]}
        />
      </div>
      <div className="col-md-4">
        <h2>All Congreses</h2>
        <Links
          links={[
            ["Tickets", "https://tickets.events.ccc.de/"],
            [
              "All Congresses (sika.link/ccc)",
              "https://events.ccc.de/congress/"
            ]
          ]}
        />
      </div>
    </div>
  </div>
);

export default Page;
