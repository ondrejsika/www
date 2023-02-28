import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";
import img1 from "@app/ondrej-sika.cz/public/content/github_copilot/2022-10-04_1.png";
import img2 from "@app/ondrej-sika.cz/public/content/github_copilot/2022-10-04_2.png";
import img3 from "@app/ondrej-sika.cz/public/content/github_copilot/2022-10-04_3.png";
import img4 from "@app/ondrej-sika.cz/public/content/github_copilot/2023-02-26_german.png";

const Page = () => (
  <Article title="Github Copilot Ukazky">
    {[img4, img1, img2, img3].map((img, i) => (
      <div key={i}>
        <img
          src={img.src}
          className="img img-fluid"
          style={{ margin: "1em" }}
        />
      </div>
    ))}
  </Article>
);

export default Page;
