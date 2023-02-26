import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";
import img1 from "@app/ondrej-sika.cz/public/content/chat_gpt/2023-02-26_shell_script_validation_of_one_commad_line_argument.png";
import img2 from "@app/ondrej-sika.cz/public/content/chat_gpt/2023-02-26_replace_spaces_with_uderscores_in_this_text.png";

const Page = () => (
  <Article title="Chat GPT Ukazky">
    {[img2, img1].map((img, i) => (
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
