import React from "react";

import Head from "next/head";
import Markdown from "@app/common/components/Markdown";

const Index = () => (
  <>
    <Head>
      <title>static.sika.io</title>
      <link rel="icon" type="image/png" href="/icon.png" />
      <link
        href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Sans&display=swap"
        rel="stylesheet"
      />
    </Head>
    <style jsx global>{`
      * {
        font-family: "IBM Plex Sans", sans-serif;
      }
      h1,
      h2 {
        font-family: "IBM Plex Mono", monospace;
      }
    `}</style>
    <div className="mt-4">
      <h1>static.sika.io</h1>
      <p>Static content for other websites or externals (conferences, ...).</p>
      <h2>Files</h2>
      <Markdown
        source={`
- [ondrejsika4.jpg](/files/photos/ondrejsika4.jpg) - \`https://static.sika.io/files/photos/ondrejsika4.jpg\`
- [ondrejsika4_print.jpg](/files/photos/ondrejsika4_print.jpg) - \`https://static.sika.io/files/photos/ondrejsika4_print.jpg\`
- [ondrejsika4_grayscale.jpg](/files/photos/ondrejsika4_grayscale.jpg) - \`https://static.sika.io/files/photos/ondrejsika4_grayscale.jpg\`
- [ondrejsika4_grayscale_print.jpg](/files/photos/ondrejsika4_grayscale_print.jpg) - \`https://static.sika.io/files/photos/ondrejsika4_grayscale_print.jpg\`
- [ondrejsika4_200px.jpg](/files/photos/ondrejsika4_200px.jpg) - \`https://static.sika.io/files/photos/ondrejsika4_200px.jpg\`
- [ondrejsika4_32px.jpg](/files/photos/ondrejsika4_32px.jpg) - \`https://static.sika.io/files/photos/ondrejsika4_32px.jpg\`
- [ondrejsika4_32px.png](/files/photos/ondrejsika4_32px.png) - \`https://static.sika.io/files/photos/ondrejsika4_32px.png\`
- [ondrejsika3.jpg](/files/photos/ondrejsika3.jpg) - \`https://static.sika.io/files/photos/ondrejsika3.jpg\`
- [ondrejsika3_200px.jpg](/files/photos/ondrejsika3_200px.jpg) - \`https://static.sika.io/files/photos/ondrejsika3_200px.jpg\`
- [ondrejsika3_32px.jpg](/files/photos/ondrejsika3_32px.jpg) - \`https://static.sika.io/files/photos/ondrejsika3_32px.jpg\`
- [ondrejsika3_32px.png](/files/photos/ondrejsika3_32px.png) - \`https://static.sika.io/files/photos/ondrejsika3_32px.png\`

Aliases for \`ondrejsika4*\`

- [ondrejsika.jpg](/files/photos/ondrejsika.jpg) - \`https://static.sika.io/files/photos/ondrejsika.jpg\`
- [ondrejsika_200px.jpg](/files/photos/ondrejsika_200px.jpg) - \`https://static.sika.io/files/photos/ondrejsika_200px.jpg\`
- [ondrejsika_32px.jpg](/files/photos/ondrejsika_32px.jpg) - \`https://static.sika.io/files/photos/ondrejsika_32px.jpg\`
- [ondrejsika_32px.png](/files/photos/ondrejsika_32px.png) - \`https://static.sika.io/files/photos/ondrejsika3_32px.png\`

Ondrej Sika DevOps

- [ondrejsikadevops1_blue_on_transparent.png](/files/logos/ondrejsikadevops1_blue_on_transparent.png) - \`https://static.sika.io/files/logos/ondrejsikadevops1_blue_on_transparent.png\`
- [ondrejsikadevops1_blue_on_transparent_square.png](/files/logos/ondrejsikadevops1_blue_on_transparent_square.png) - \`https://static.sika.io/files/logos/ondrejsikadevops1_blue_on_transparent_square.png\`
- [ondrejsikadevops1_blue_on_white.png](/files/logos/ondrejsikadevops1_blue_on_white.png) - \`https://static.sika.io/files/logos/ondrejsikadevops1_blue_on_white.png\`
- [ondrejsikadevops1_blue_on_white_square.png](/files/logos/ondrejsikadevops1_blue_on_white_square.png) - \`https://static.sika.io/files/logos/ondrejsikadevops1_blue_on_white_square.png\`
- [ondrejsikadevops1_color_on_transparent.png](/files/logos/ondrejsikadevops1_color_on_transparent.png) - \`https://static.sika.io/files/logos/ondrejsikadevops1_color_on_transparent.png\`
- [ondrejsikadevops1_color_on_transparent_square.png](/files/logos/ondrejsikadevops1_color_on_transparent_square.png) - \`https://static.sika.io/files/logos/ondrejsikadevops1_color_on_transparent_square.png\`
- [ondrejsikadevops1_color_on_white.png](/files/logos/ondrejsikadevops1_color_on_white.png) - \`https://static.sika.io/files/logos/ondrejsikadevops1_color_on_white.png\`
- [ondrejsikadevops1_color_on_white_square.png](/files/logos/ondrejsikadevops1_color_on_white_square.png) - \`https://static.sika.io/files/logos/ondrejsikadevops1_color_on_white_square.png\`
- [ondrejsikadevops1_white_on_blue.png](/files/logos/ondrejsikadevops1_white_on_blue.png) - \`https://static.sika.io/files/logos/ondrejsikadevops1_white_on_blue.png\`
- [ondrejsikadevops1_white_on_blue_square.png](/files/logos/ondrejsikadevops1_white_on_blue_square.png) - \`https://static.sika.io/files/logos/ondrejsikadevops1_white_on_blue_square.png\`
- [ondrejsikadevops1_white_on_transparent.png](/files/logos/ondrejsikadevops1_white_on_transparent.png) - \`https://static.sika.io/files/logos/ondrejsikadevops1_white_on_transparent.png\`
- [ondrejsikadevops1_white_on_transparent_square.png](/files/logos/ondrejsikadevops1_white_on_transparent_square.png) - \`https://static.sika.io/files/logos/ondrejsikadevops1_white_on_transparent_square.png\`

`}
      />
    </div>
  </>
);

export default Index;
