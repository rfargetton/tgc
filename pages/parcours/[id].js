import settings from "../../config.json";

import Layout from "../../components/layout";
import Hero from "../../components/hero";
import PostContent from "../../components/post-content";
import { getAllFilesId, getFileData } from "../../lib/folder";

export default function Post({ postData }) {
  return (
    <Layout
      url={`/posts/${postData.id}`}
      title={`${postData.title} | ${settings.site_name}`}
      image={postData.img}
      description="Some description text"
    >
      <Hero
        image={postData.img}
      >
        <h1>{postData.title}</h1>
      </Hero>

      <PostContent htmlContent={postData.htmlContent} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllFilesId("parcours");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getFileData("parcours", params.id);

  return {
    props: {
      postData,
    },
  };
}
