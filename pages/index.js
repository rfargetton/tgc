import Link from "next/link";

import Date from "../components/date";
import Layout from "../components/layout";
import { getAllFilesData } from "../lib/folder";
import { getFile } from "../lib/file";
import Hero from "../components/hero";

export default function Home({ allPostsData, pageData }) {
  return (
    <Layout url="/" title={pageData.title}>
      <div>
        <Hero
          heading={pageData.heading}
          subheading={pageData.subheading}
          image={pageData.image}
        />

        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>
                  <h2>{title}</h2>
                  <Date dateString={date} />
                </a>
              </Link>
            </li>
          ))}
        </ul>
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
