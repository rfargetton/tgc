import settings from "../../config.json";

import Date from "../../components/date";
import Layout from "../../components/layout";
import { getAllFilesId, getFileData } from "../../lib/folder";

export default function Post({ postData }) {
  return (
    <Layout
      url={`/posts/${postData.id}`}
      title={`${postData.title} | ${settings.site_name}`}
      image={postData.img}
      description="Some description text"
    >
      <div>
        <div>
          <img src={postData.img} />
        </div>
        <h1>{postData.title}</h1>
        <Date dateString={postData.date} />
        <div dangerouslySetInnerHTML={{ __html: postData.htmlContent }} />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllFilesId("posts");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getFileData("posts", params.id);

  return {
    props: {
      postData,
    },
  };
}
