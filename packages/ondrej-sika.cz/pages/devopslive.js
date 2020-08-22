import React from "react";
import events from "@app/data/devopslive.yml";
import Article from "@app/ondrejsika-theme/layouts/Article";
import Markdown from "@app/common/components/Markdown";

const Page = () => {
  return (
    <Article
      title="DevOps Live by Ondrej Sika"
      header="DevOps Live"
      subheader="Livestreamy na popularni temata z DevOps"
      hideNewsletter={true}
    >
      {events.map((event, i) => {
        return (
          <div key={i}>
            {(() => {
              if (i > 0) {
                return <hr className="hr-black" />;
              }
            })()}
            <h3 className="pt-4 pb-4 bold">{event.title}</h3>
            <p className="pb-4">
              {event.date} od {event.time}
            </p>
            <p className="pb-4">
              <Markdown source={event.perex} />
            </p>
          </div>
        );
      })}
    </Article>
  );
};

export default Page;
