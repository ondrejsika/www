import React from "react";
import CourseBar from "@app/ondrejsika-theme/components/CourseBar";
import Article from "@app/ondrejsika-theme/layouts/Article";
import styled from "styled-components";

const FontSize = styled.div`
  p,
  a {
    font-size: 24px;
  }
`;

export const Page404 = () => {
  return (
    <>
      <Article title="404 Nenašli jste co hledáte ..." hideNewsletter={false}>
        <FontSize>
          <p>
            Napište mi email na{" "}
            <a href="mailto:ondrej@sika.io">ondrej@sika.io</a> a dejte mi vědět
            co potřebujete. Rád Vám pomohu. Nebo se podivejte na kurzy co
            školím:
          </p>
        </FontSize>
        <CourseBar LectureImgHeader="" />
        <div className="mt-5" />
        <FontSize>
          <p>
            Pokud něco nefunguje, dejte mi vědět na{" "}
            <a href="mailto:ondrej@sika.io">ondrej@sika.io</a>
          </p>
        </FontSize>
      </Article>
    </>
  );
};

export default Page404;
