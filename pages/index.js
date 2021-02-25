import Link from "next/link";

import Layout from "../components/layout";
import { getAllFilesData } from "../lib/folder";
import { getFile } from "../lib/file";
import Hero from "../components/hero";
import PostList from "../components/post-list";

export default function Home({ allPostsData, pageData }) {
  return (
    <Layout url="/" title={pageData.title}>
      <div>
        <Hero image={pageData.image}>
          <h1>{pageData.heading}</h1>
          <p>{pageData.subheading}</p>
        </Hero>

        <PostList posts={allPostsData} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = await getAllFilesData("posts");
  const pageData = await getFile("pages", "home");
  return {
    props: {
      allPostsData,
      pageData,
    },
  };
}
