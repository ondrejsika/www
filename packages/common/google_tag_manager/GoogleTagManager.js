import React from "react";

const GoogleTagManager = (props) => (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtm.js?id=${props.gtm_id}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${props.gtm_id}', {
              page_path: window.location.pathname,
            });
          `
      }}
    />
  </>
);

export default GoogleTagManager;
