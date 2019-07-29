import { withRouter } from 'next/router'
import LectureImgMdLg from '@app/ondrej-sika.cz/components/LectureImgMdLg';
import LectureImgSm from '@app/ondrej-sika.cz/components/LectureImgSm';
import MainBar from '@app/ondrej-sika.cz/components/MainBar';
import TextWithImg from '@app/ondrej-sika.cz/components/TextWithImg';
import StatisticBar from '@app/ondrej-sika.cz/components/StatisticBar';
import CompaniesBar from '@app/ondrej-sika.cz/components/CompaniesBar';
import CompaniesBar1 from '@app/ondrej-sika.cz/static/webglobe-yegon-sq.png';
import Markdown from "@app/common/components/Markdown";


import Head from 'next/head'

let site = {
  lang: 'cs'
}

let style = {
  fontSize: '1.4em',
  fontWeight: 'bold',
}

import posts from '@app/ondrej-sika.cz/data/blog-posts.yaml'

let posts_id_map = {}
posts.map((element, i) => {
  posts_id_map[element.id] = i
})

class BlogPost extends React.Component {
  render() {
    let post = posts[posts_id_map[this.props.router.query.post_id]]
    if (!post) return <></>;
    return (
      <div>
        <Head>
          <title>{post.title} - Ondřej Šika</title>
        </Head>
        <MainBar
          MainBarHeader={post.title}>
        </MainBar>

        <div className="container pt-4">
          <Markdown source={post.content}/>
        </div>
      </div>
    );
  }
}

export default withRouter(BlogPost)
