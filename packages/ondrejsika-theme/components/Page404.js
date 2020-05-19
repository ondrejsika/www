import React from "react";
import CourseBar from "@app/ondrejsika-theme/components/CourseBar";
import Article from "@app/ondrejsika-theme/layouts/Article";
import styled from "styled-components";
import Translate from "@app/common/components/Translate";

const FontSize = styled.div`
  p,
  a {
    font-size: 24px;
  }
`;

export const Page404 = props => {
  return (
    <>
      <Article
        site={props.site}
        title="404 Not found"
        header={
          <Translate
            lang={props.site.lang}
            default="en"
            en="404 Don't found you are looking for ..."
            cs="404 Nenašli jste co hledáte ..."
          />
        }
        hideNewsletter={props.site.lang != "cs"}
      >
        <FontSize>
          <Translate
            lang={props.site.lang}
            default="en"
            en={
              <p>
                Send me and email{" "}
                <a href="mailto:ondrej@sika.io">ondrej@sika.io</a> and let me
                know what you need. I&apos;d like to help you.
              </p>
            }
            cs={
              <p>
                Napište mi email na{" "}
                <a href="mailto:ondrej@sika.io">ondrej@sika.io</a> a dejte mi
                vědět co potřebujete. Rád Vám pomohu. Nebo se podivejte na kurzy
                co školím:
              </p>
            }
          />
        </FontSize>
        <CourseBar lang={props.site.lang} LectureImgHeader="" />
        <div className="mt-5" />
        <FontSize>
          <Translate
            lang={props.site.lang}
            default="en"
            en={
              <p>
                If something doesnt work, please report to me on{" "}
                <a href="mailto:ondrej@sika.io">ondrej@sika.io</a>
              </p>
            }
            cs={
              <p>
                Pokud něco nefunguje, dejte mi vědět na{" "}
                <a href="mailto:ondrej@sika.io">ondrej@sika.io</a>
              </p>
            }
          />
        </FontSize>
      </Article>
    </>
  );
};

export default Page404;
