import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";
import Markdown from "@app/common/components/Markdown";

export const Manuals = () => (
  <Article title="Media" hideNewsletter={true}>
    <h3>Photos</h3>
    <Markdown
      source={`
#### Download all photos in ZIP

- [Photos (web).zip](https://github.com/ondrejsika/ondrejsika-media-zip/raw/master/2020-02-14_Sinagl_Web.zip)
- [Photos (print).zip](https://github.com/ondrejsika/ondrejsika-media-zip/raw/master/2020-02-14_Sinagl_Print.zip)
`}
    />
    <h4>Photos</h4>
    {[
      "2020-02-14_Sinagl/Web/ondrejsika4.jpg",
      "2020-02-14_Sinagl/Web/ondrejsika4_grayscale.jpg",
      "2020-02-14_Sinagl/Web/ondrejsika4x_chair.jpg",
      "2020-02-14_Sinagl/Web/ondrejsika4x_chair_grayscale.jpg",
      "2020-02-14_Sinagl/Web/ondrejsika4x_notebook.jpg",
      "2020-02-14_Sinagl/Web/ondrejsika4x_notebook_grayscale.jpg",
      "2020-02-14_Sinagl/Web/ondrejsika4x_portrait.jpg",
      "2020-02-14_Sinagl/Web/ondrejsika4x_portrait_grayscale.jpg",
      "2020-02-14_Sinagl/Web/ondrejsika4x_steave.jpg",
      "2020-02-14_Sinagl/Web/ondrejsika4x_steave_grayscale.jpg"
    ].map((el, i) => (
      <div key={i} className="mb-5">
        <a
          href={`https://raw.githubusercontent.com/ondrejsika/ondrejsika-media/master/Photos/${el}`}
        >
          <img
            height="400"
            src={`https://raw.githubusercontent.com/ondrejsika/ondrejsika-media/master/Photos/${el}`}
          />
        </a>
      </div>
    ))}
  </Article>
);
export default Manuals;
